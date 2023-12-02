interface Event {
    id: string;
    timestamp: number;
    title: string;
    description?: string;
}

interface Task {
    id: string;
    startEventId: string;
    endEventId: string;
    title?: string;
    description?: string;
}

interface Actor {
    id: string;
    name: string;
    surname?: string;
}

interface Delay {
    id: string;
    originalEventId: string;
    delayedEventId: string;
    title?: string;
    description?: string;
}

interface TaskRelationship {
    id: string;
    parentTaskId: string;
    subtaskId: string;
}

interface Timeline {
    id: string;
    title: string;
    description?: string;
}

interface Responsibility {
    id: string;
    type: 'Event' | 'Task' | 'Timeline';
    objectId: string;
    actorId: string;
    role?: string;
}