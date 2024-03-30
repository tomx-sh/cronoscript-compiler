import { Cronodile, DateAtom, Group } from "./utils/models";


interface Event {
    id: string;
    parentId?: string;
    date: Date;
    name?: string;
    line: string;
}

interface Task {
    id: string;
    parentId?: string;
    startDate: Date;
    endDate:   Date;
    startDateLabel?: string;
    endDateLabel?: string;
    name?: string;
    line: string;
}

interface GroupBracket {
    id: string;
    parentId?: string;
    startDate: Date;
    endDate: Date;
    name?: string;
    line: string;
}

type CronObject = Event | Task | GroupBracket;

interface Link {
    startDate: Date;
    endDate: Date;
    startLine: string;
    endLine: string;
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

        return true;
    }

}

/**
 * Get the date value of the date atom of a group event.
 */
function getEventDate({group, cronodile}: {group: Group, cronodile: Cronodile}): Date {
    return cronodile.dateAtoms?.find(da => da.parentId === group.id)?.date || new Date();
}

function getEvents(cronodile: Cronodile): Event[] {
    const events: Event[] = [];
    
    // Browse date atoms to find orphans
    for (const dateAtom of cronodile.dateAtoms || []) {
        if (isEvent({dateAtom})) {
            events.push({
                id: dateAtom.id,
                date: dateAtom.date,
                name: '',
                line: getLine(dateAtom)
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
                name: group.name,
                line: getLine(group)
            });
        }
    }

    return events;
}


/**
 * Returns true if the given object is a task.
 * A 'task' is a group with 2 children: 2 date atoms, 2 events, or 1 date atom and 1 event.
 * Also, the 2 children must be separated by a `->` symbol. That means the first child must be `linkedTo` the second child.
 */
function isTask({group, cronodile}: {group: Group, cronodile: Cronodile}): boolean {

    // 0 Get the children
    const dateAtomsChildren = cronodile.dateAtoms?.filter(da => da.parentId === group.id) || [];
    const groupsChildren = cronodile.groups?.filter(g => g.parentId === group.id) || [];

    // 1 Check if the group has exactly two children
    /*
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
    */

    const childrenNumber = dateAtomsChildren.length + groupsChildren.length;
    if (childrenNumber !== 2) return false;


    // 2 Check if it has a child that is not compatible with a task.
    // The only thing not compatible with a task is a group that is not an event
    /*
    let hasWeirdChild = false;
    for (const otherGroup of cronodile.groups || []) {
        if (otherGroup.parentId === group.id) {
            if (!isEvent({group: otherGroup, cronodile: cronodile})) {
                hasWeirdChild = true;
                break;
            }
        }
    }*/
    // So we'll only browse the groups children to find something that is not an event
    const hasWeirdChild = groupsChildren.some(group => !isEvent({group, cronodile}));

    // If it has a child that is not compatible with a task, it's not a task
    if (hasWeirdChild) return false;

    // Check if the two children are linked
    const children: (DateAtom | Group)[] = (dateAtomsChildren as (DateAtom | Group)[]).concat(groupsChildren);
    const child1Link = children[0].linkedTo;
    const child2Link = children[1].linkedTo;
    const linkedTogether = child1Link === children[1].id || child2Link === children[0].id;
    if (!linkedTogether) return false;


    // Here, we know the group has exactly two children, they are compatible with a task, and they are linked.
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

function getTasks(cronodile: Cronodile): Task[] {
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
                name: group.name,
                line: getLine(group)
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
function getEventsNotInTasks(events: Event[], tasks: Task[]): Event[] {
    const eventsNotInTasks: Event[] = [];

    for (const event of events) {
        if (!tasks.find(task => task.id === event.parentId)) {
            eventsNotInTasks.push(event);
        }
    }

    return eventsNotInTasks;
}



/**
 * Returns true if the given object is a group bracket.
 * A 'group bracket' is a group that is not an event nor a task.
 */
function isGroupBracket({group, cronodile}: {group: Group, cronodile: Cronodile}): boolean {
    return !isEvent({group, cronodile}) && !isTask({group, cronodile});
}


/**
 * Returns the groups that are not events nor tasks.
 * We call them `GroupBrackets`, they are generic groups displaying their children below a bracket.
 */
function getGroupBrackets({events, tasks, cronodile}: {events: Event[], tasks: Task[], cronodile: Cronodile}): GroupBracket[] {

    // Get all groups whose ids are not ids of events or tasks
    const groupBrackets: GroupBracket[] = [];

    for (const group of cronodile.groups || []) {
        if (isGroupBracket({group, cronodile})) {
            const {startDate, endDate} = getGroupBracketsDates({group, cronodile});
            groupBrackets.push({
                id: group.id,
                parentId: group.parentId,
                startDate,
                endDate,
                name: group.name,
                line: getLine(group)
            });
        }
    }

    return groupBrackets;
}


function getGroupBracketsDates({group, cronodile}: {group: Group, cronodile: Cronodile}): {startDate: Date, endDate: Date} {
    // Get the children of the group bracket.
    // A group bracket can have the following children: date atoms, events, tasks, group brackets
    const dateAtoms = cronodile.dateAtoms?.filter(da => da.parentId === group.id) || [];
    const events = cronodile.groups?.filter(g => g.parentId === group.id && isEvent({group: g, cronodile})) || [];
    const tasks = cronodile.groups?.filter(g => g.parentId === group.id && isTask({group: g, cronodile})) || [];
    const groupBrackets = cronodile.groups?.filter(g => g.parentId === group.id && isGroupBracket({group: g, cronodile})) || [];

    // Concatenate their dates
    const dateAtomsDates = dateAtoms.map(da => da.date);
    const eventsDates = events.map(event => getEventDate({group: event, cronodile}));
    const tasksDates = tasks.map(task => getTaskDates({task, cronodile})).map(({startDate, endDate}) => [startDate, endDate]).flat();
    const groupBracketsDates = groupBrackets.map(groupBracket => getGroupBracketsDates({group: groupBracket, cronodile})).map(({startDate, endDate}) => [startDate, endDate]).flat();
    const allDates = dateAtomsDates.concat(eventsDates).concat(tasksDates).concat(groupBracketsDates);

    // Sort the dates
    const orderedDates = allDates.sort((a, b) => a.getTime() - b.getTime());

    // Return the first and last date
    return {startDate: orderedDates[0], endDate: orderedDates[orderedDates.length - 1]};
}


/**
 * Returns the id of the line on which we'll draw the object.
 * The id system used for the objects beautifully allows us to derive the line number from the id.
 * As we just align the 2nd level of objects to align them on the same line, we can just remove the 2nd level from the id.
 */
function getLine(object: CronObject | Group): string {
    const id = object.id;
    // The id is of form '1.2.3.4', we want an array ['1','2','3','4']
    const idArray = id.split('.');
    // Remove the seconds element (counting to 1)
    idArray.splice(1, 1);
    // Put the dots back
    return idArray.join('.');

}

function getAllLines(cronodile: Cronodile): string[] {
    let lines: string[] = [];

    for (const dateAtom of cronodile.dateAtoms || []) {
        lines.push(getLine(dateAtom));
    }

    for (const group of cronodile.groups || []) {
        lines.push(getLine(group));
    }

    // Remove duplicates
    lines = lines.filter((line, index) => lines.indexOf(line) === index);

    // Sort the lines in alphabetical order
    lines = lines.sort();

    return lines;
}

/**
 * Returns the links between the objects,
 * based on their `linkedTo` property.
 * Date atoms can be linked to other date atoms, or to groups.
 * Groups can be linked to other groups, or to date atoms.
 */
function getLinks(cronodile: Cronodile): Link[] {
    let links: Link[] = [];

    // Find date atoms that are linked to something and add the link
    for (const dateAtom of cronodile.dateAtoms || []) {
        if (dateAtom.linkedTo) {
            // It can eithe be linked to another date atom, or to a group
            const linkedToDateAtom = cronodile.dateAtoms?.find(da => da.id === dateAtom.linkedTo)
            const linkedToGroup    = cronodile.groups?.find(g => g.id === dateAtom.linkedTo);
            
            if (linkedToDateAtom) {
                links.push({
                    startDate: dateAtom.date,
                    endDate: linkedToDateAtom.date,
                    startLine: getLine(dateAtom),
                    endLine:   getLine(linkedToDateAtom)
                });
            }

            if (linkedToGroup) {
                links.push({
                    startDate: dateAtom.date,
                    endDate: getEventDate({group: linkedToGroup, cronodile}),
                    startLine: getLine(dateAtom),
                    endLine:   getLine(linkedToGroup)
                });
            }
        }
    }

    // Find groups that are linked to something and add the link
    for (const group of cronodile.groups || []) {
        if (group.linkedTo) {
            // It can eithe be linked to another group, or to a date atom
            const linkedToDateAtom = cronodile.dateAtoms?.find(da => da.id === group.linkedTo)
            const linkedToGroup    = cronodile.groups?.find(g => g.id === group.linkedTo);

            if (linkedToDateAtom) {
                links.push({
                    startDate: getEventDate({group, cronodile}),
                    endDate: linkedToDateAtom.date,
                    startLine: getLine(group),
                    endLine:   getLine(linkedToDateAtom)
                });
            }

            if (linkedToGroup) {
                links.push({
                    startDate: getEventDate({group, cronodile}),
                    endDate: getEventDate({group: linkedToGroup, cronodile}),
                    startLine: getLine(group),
                    endLine:   getLine(linkedToGroup)
                });
            }            
        }
    }

    return links;
}


export default function decompile(cronodile: Cronodile): {events: Event[], tasks: Task[], groupBrackets: GroupBracket[], links: Link[]} {
    let events = getEvents(cronodile);
    const tasks = getTasks(cronodile);
    events = getEventsNotInTasks(events, tasks);
    const groupBrackets = getGroupBrackets({events, tasks, cronodile});
    const links = getLinks(cronodile);
    return {events, tasks, groupBrackets, links};
}