import * as R from 'ramda';

export const clampMin = R.curry(((min, val) => R.clamp(min, Number.MAX_SAFE_INTEGER, val)));
export const clampMax = R.clamp(Number.MIN_SAFE_INTEGER);
