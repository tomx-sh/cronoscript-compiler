/**
 * This object is the final result of the parsing process
 */
export interface Cronodile {
    options?: Option[];
    tags?: Tag[];
    events?: Event[];
}
/**
 * An option that can be set for an element, or the whole document
 * It is derived from a notation like `#color:blue`
 */
export interface Option {
    /**
     * The key of the option, written after the `#` symbol
     */
    key: string;

    /**
     * The value of the option, written after the `:` symbol
     */
    value?: string;
}

/**
 * A tag that can be set for an element, or the whole document
 * It is derived from a notation like `@Team`
 */
export interface Tag {
    /**
     * The name of the tag, written after the `@` symbol
     */
    value: string;
}

/**
 * A date is a string that can be parsed into a date
 */
export interface Date {
    /**
     * The original date
     */
    originalDate: string;

    /**
     * If the date has been delayed (or advanced), this is the new date
     */
    delayedDate?: string;
}

/**
 * An element of the timeline
 */
export interface Event {
    date: Date;
    label?: string;
    tags?: Tag[];
    options?: Option[];
    timelineId?: string; // TODO: not sure if I should force this
}

