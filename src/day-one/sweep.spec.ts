import { DepthAggregator, DepthDetector } from './sweep';
import data from './sweep.data';

test('Sweep A', () => {
  const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  const res = DepthDetector(depths);

  expect(res).toEqual(7);
});

test('Sweep B', () => {
  const depths = data.split('\n').map(s => parseInt(s));
  const res = DepthDetector(depths);

  expect(res).toEqual(1475);
});

test('Sweep C', () => {
  const depths = [199, 200, 208, 210, 200, 207, 240, 269, 260, 263];

  const res = DepthDetector(DepthAggregator(depths));
  console.log(res);

  expect(res).toEqual(5);
});

test('Sweep D', () => {
  const depths = data.split('\n').map(s => parseInt(s));
  const agg = DepthAggregator(depths);
  const res = DepthDetector(agg);
  
  expect(res).toEqual(1516);
});