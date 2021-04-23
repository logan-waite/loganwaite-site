import * as R from 'ramda';

export const clampMin = R.curry(((min, val) => R.clamp(min, Number.MAX_SAFE_INTEGER, val)));
export const clampMax = R.clamp(Number.MIN_SAFE_INTEGER);

export async function timeout(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function delayIterator<T>(
  action: (el: T, index: number) => void,
  invert: boolean,
  delay: number,
  list: T[],
): () => void {
  const iteratee = invert ? R.reverse(list) : list;
  let i = iteratee.length;
  return async function iterator() {
    i -= 1;
    action(iteratee[i], i);
    if (i > 0) {
      await timeout(delay);
      await iterator();
    }
  };
}
