import { Cronodile, DateAtom,Group } from "./utils/models";


interface Event {
    id: string;
    parentId?: string;
    date: Date;
    name?: string;
}

interface Task {
    id: string;
    parentId?: string;
    startDate: Date;
    endDate:   Date;
    startDateLabel?: string;
    endDateLabel?: string;
    name?: string;
}


/**
 * This function returns true if the given object is an event.
 * An 'event' is an orphan date atom, or a group containing only one date atom.
 * @example
 * `'09/09/1996'`
 * `['01/02/2023'] "First event"`
 * `[['01/01/2024] "Start date", '01/02/2024'] "Task"` // A group of 2 events
 */
function isEvent(check: {dateAtom: DateAtom} | {group: Group, cronodile: Cronodile}): boolean {

    // DATE ATOM
    if ('dateAtom' in check) {
        // A date atom can only be an event if it is an orphan.
        // If it has a parent, in the case it forms an event, we consider the parent to be the event, not the date atom.
        return !check.dateAtom.parentId || check.dateAtom.parentId === '';

    // GROUP
    } else { //if ('group' in check)

        // 1 Check if the group contains exactly one date atom

        // 1.1 Check if the group contains another group
        let containsAGroup = false;
        for (const otherGroup of check.cronodile.groups || []) {
            if (otherGroup.parentId === check.group.id) {
                containsAGroup = true;
                break;
            }
        }

        // If it contains another group, skip it, we don't want it
        if (containsAGroup) return false;

        // 1.2 We know the group contains only date atoms or nothing. Check if it has more than one child
        let numberOfChildren = 0;
        //let date: Date | undefined;
        for (const dateAtom of check.cronodile.dateAtoms || []) {
            if (dateAtom.parentId === check.group.id) {
                numberOfChildren++;
                if (numberOfChildren > 1) break;
                //date = dateAtom.date;
            }
        }

        // If it doesn't have exactly one children, skip it
        if (numberOfChildren !== 1) return false;

        /*
        // 2 Check if the group is part of a task

        let isPartOfATask = false;
        // 2.1 Check if its parent is a task
        for (const group of check.cronodile.groups || []) {
            if (group.id === check.group.parentId) {
                if (isTask({group, cronodile: check.cronodile})) {
                    isPartOfATask = true;
                    break;
                }
            }
        }
        */

        return true;
    }

}

/**
 * Get the date value of the date atom of a group event.
 */
function getEventDate({group, cronodile}: {group: Group, cronodile: Cronodile}): Date {
    return cronodile.dateAtoms?.find(da => da.parentId === group.id)?.date || new Date();
}

export function getEvents(cronodile: Cronodile): Event[] {
    const events: Event[] = [];
    
    // Browse date atoms to find orphans
    for (const dateAtom of cronodile.dateAtoms || []) {
        if (isEvent({dateAtom})) {
            events.push({
                id: dateAtom.id,
                date: dateAtom.date,
                name: ''
            });
        }
    }

    // Browse groups to find events
    for (const group of cronodile.groups || []) {
        if (isEvent({group, cronodile})) {
            events.push({
                id: group.id,
                parentId: group.parentId,
                date: getEventDate({group, cronodile}),
                name: group.name
            });
        }
    }

    return events;
}


/**
 * Returns true if the given object is a task.
 * A 'task' is a group with two children: 2 date atoms, 2 events, or 1 date atom and 1 event.
 */
function isTask({group, cronodile}: {group: Group, cronodile: Cronodile}): boolean {
    // 1 Check if the group has exactly two children
    let numberOfChildren = 0;

    // 1.1 Count children among date atoms
    for (const dateAtom of cronodile.dateAtoms || []) {
        if (dateAtom.parentId === group.id) {
            numberOfChildren++;
            if (numberOfChildren > 2) break;
        }
    }

    // 1.2 Count children among groups
    for (const otherGroup of cronodile.groups || []) {
        if (otherGroup.parentId === group.id) {
            numberOfChildren++;
            if (numberOfChildren > 2) break;
        }
    }

    // If it doesn't have exactly two children, it's not a task
    if (numberOfChildren !== 2) return false;


    // 2 Check if it has a child that is not compatible with a task.
    // The only thing not compatible with a task is a group that is not an event
    let hasWeirdChild = false;
    for (const otherGroup of cronodile.groups || []) {
        if (otherGroup.parentId === group.id) {
            if (!isEvent({group: otherGroup, cronodile: cronodile})) {
                hasWeirdChild = true;
                break;
            }
        }
    }

    // If it has a child that is not compatible with a task, it's not a task
    if (hasWeirdChild) return false;

    // Here, we know the group has exactly two children, and they are compatible with a task
    return true;
}


function getTaskLabels({task, cronodile}: {task: Group, cronodile: Cronodile}): {startDateLabel?: string, endDateLabel?: string} {
    // Labels are actually the names of the events constituting the task
    let events = cronodile.groups?.filter(g => g.parentId === task.id) || [];

    if (events.length == 0) return {};

    if (events.length == 1) {
        const event = events[0];
        const position = event.order;
        return position === 0 ? {startDateLabel: event.name} : {endDateLabel: event.name};
    }

    if (events.length == 2) {
        events = events.sort((a, b) => a.order - b.order);
        const event1 = events[0];
        const event2 = events[1];
        return {startDateLabel: event1.name, endDateLabel: event2.name};
    }

    return {};
}

function getTaskDates({task, cronodile}: {task: Group, cronodile: Cronodile}): {startDate: Date, endDate: Date} {
    // Dates are either the date atoms of the task, or the date atoms of the events (or a mix of both)
    // Lets get the children of the task:
    const dateAtoms = cronodile.dateAtoms?.filter(da => da.parentId === task.id) || [];
    const events = cronodile.groups?.filter(g => g.parentId === task.id) || [];

    // Concatenate their dates
    const dateAtomsDates = dateAtoms.map(da => da.date);
    const eventsDates = events.map(event => getEventDate({group: event, cronodile}));
    const allDates = dateAtomsDates.concat(eventsDates);
    const orderedDates = allDates.sort((a, b) => a.getTime() - b.getTime());

    return {startDate: orderedDates[0], endDate: orderedDates[1]};
}

export function getTasks(cronodile: Cronodile): Task[] {
    const tasks: Task[] = [];
    
    // Browse groups to find tasks
    for (const group of cronodile.groups || []) {
        if (isTask({group, cronodile})) {
            const {startDate, endDate} = getTaskDates({task: group, cronodile});
            const {startDateLabel, endDateLabel} = getTaskLabels({task: group, cronodile});
            tasks.push({
                id: group.id,
                parentId: group.parentId,
                startDate,
                endDate,
                startDateLabel,
                endDateLabel,
                name: group.name
            });
        }
    }

    return tasks;
}


/**
 * Returns the events that are not part of any task.
 * Once we have all the events and all the tasks, we will be able to keep only the events that are not part of any task.
 * This is usefull for drawing (not drawing events when already drawing the task they are part of).
 */
export function getEventsNotInTasks(events: Event[], tasks: Task[]): Event[] {
    const eventsNotInTasks: Event[] = [];

    for (const event of events) {
        if (!tasks.find(task => task.id === event.parentId)) {
            eventsNotInTasks.push(event);
        }
    }

    return eventsNotInTasks;
}