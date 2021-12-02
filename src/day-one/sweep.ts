
export function DepthDetector(depths: Array<number>) {
  return depths.reduce((prev, curr, i, arr) => curr > arr[i-1] ? prev+1 : prev, 0);
}

export function DepthAggregator(depths: Array<number>) {
  return depths.reduce<Array<number>>((prev, _, i, arr) => [...prev, arr[i] + arr[i-1] + arr[i-2]], []);
}