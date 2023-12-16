/**
 * This object is the final result of the parsing process
 */
export interface Cronodile {
    tags?: Tag[];

    /**
     * An array of groups.The groups are flat, they are not nested.
     * The groups hyerarchy is defined by the `groupsIds` property of each group.
     */
    groups?: Group[];

    /**
     * An array of dateAtoms.
     */
    dateAtoms?: dateAtom[];
}

/**
 * An option that can be set for an element, or the whole document
 * @example `#color:blue` `@Thomas`
 */
export interface Tag {
    /**
     * The symbol of the tag, like `#` or `@`
     */
    symbol: string;

    /**
     * The key of the option, written after the `#` or `@` symbol
     */
    key: string;

    /**
     * The value of the option, written after the `:` symbol
     */
    value?: string;
}


/**
 * Common properties for elements that go in a group:
 * dateAtoms and other groups.
 */
export interface LinkedElement {
    /**
     * The id of the element
     */
    id: string;

    /**
     * The order of the element in the group
     */
    order: number;

    /**
     * The id of the element to which it is delayed
     * @example `'01/01/2023'...'01/01/2024'` or `'group1'...'group2'`
     */
    delayedTo?: string;

    /**
     * The id of the element to which it is linked.
     * The link is oriented; one element can be linked to another, but not the other way around.
     * @example `'01/01/2023'->'01/01/2024'` or `'group1'->'group2'`
     */
    linkedTo?: string;
}

/**
 * A date, which is the most basic element of a group
 */
export interface dateAtom extends LinkedElement {
    date: Date;
}

/**
 * A group of dateAtoms and other groups
 */
export interface Group extends LinkedElement {
    name: string;
    tags?: Tag[];
    /**
     * The ids of the children of the group.
     * The children can be dateAtoms or other groups.
     */
    childrenIds?: string[];
}


export interface Duration {
    millis: number;
}
