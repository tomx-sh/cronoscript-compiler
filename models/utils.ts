const timeUnits = {
    second: ['s', 'sec', 'second', 'seconds', 'seconde', 'secondes'],
    minute: ['m', 'mn', 'min', 'minute', 'minutes'],
    hour:   ['h', 'hour', 'hours', 'heure', 'heures'],
    day:    ['d', 'day', 'days', 'jour', 'jours'],
    week:   ['w', 'week', 'weeks', 'semaine', 'semaines'],
    month:  ['M', 'month', 'months', 'mois'],
    year:   ['y', 'year', 'years', 'an', 'ans']
};

type UnitType = typeof timeUnits;
type DurationUnit = keyof UnitType;

function getCategory(unit: DurationUnit): keyof UnitType {
    return Object.keys(timeUnits).find(key => timeUnits[key as keyof UnitType].includes(unit)) as keyof UnitType;
}

function getMultiplier(unit: DurationUnit): number {
    switch (unit) {
        case "second":  return 1000;
        case "minute":  return 1000 * 60;
        case "hour":    return 1000 * 60 * 60;
        case "day":     return 1000 * 60 * 60 * 24;
        case "week":    return 1000 * 60 * 60 * 24 * 7;
        case "month":    return 1000 * 60 * 60 * 24 * 30;
        case "year":    return 1000 * 60 * 60 * 24 * 365;
        default:        throw new Error(`Unknown unit ${unit}`);
    }
}

/**
 * This function parses a duration string and returns the number of milliseconds it represents
 * @param value - The value of the duration
 * @param unit - The unit of the duration like `s`, `min`, `h`, `d`, `w`, `M`, `y`...
 * @returns The number of milliseconds the duration represents
 */
export function parseDuration(value: number, unit: string): number {
    const unitCategory = getCategory(unit as DurationUnit);
    const multiplier = getMultiplier(unitCategory);
    return value * multiplier;
}