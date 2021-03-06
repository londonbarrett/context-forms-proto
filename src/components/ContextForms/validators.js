export const isNumber = message => value => (Number.isNaN(Number(value)) ? message : false);

export const lowerThan = limit => message => value => (value < limit ? message : false);

export const greaterThan = limit => message => value => (value > limit ? message : false);

export const isNotEmpty = message => value => (!value || value.length <= 0 ? message : false);

export const isRequired = message => value => (value === undefined ? message : false);
