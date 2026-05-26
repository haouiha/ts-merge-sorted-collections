export function merge(
  collection1: number[],
  collection2: number[],
  collection3: number[]
): number[] {
  const merged: number[] = [];
  let index1 = collection1.length - 1;
  let index2 = 0;
  let index3 = 0;

  while (index1 >= 0 || index2 < collection2.length || index3 < collection3.length) {
    const current1 = index1 >= 0 ? collection1[index1] : Infinity;
    const current2 = index2 < collection2.length ? collection2[index2] : Infinity;
    const current3 = index3 < collection3.length ? collection3[index3] : Infinity;

    if (current1 <= current2 && current1 <= current3) {
      merged.push(current1);
      index1--;
    } else if (current2 <= current3) {
      merged.push(current2);
      index2++;
    } else {
      merged.push(current3);
      index3++;
    }
  }

  return merged;
}
