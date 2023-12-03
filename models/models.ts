
/**
 * This object is the final result of the parsing process
 */
export interface Cronodile {
    options?: Option[];
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