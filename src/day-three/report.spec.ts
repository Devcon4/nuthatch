import { GenReport, O2Report } from './report';
import data from './report.data';

test('Report A', () => {
  const binary = `00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`;

  const res = GenReport(binary);

  expect(res.gamma).toEqual(22);
  expect(res.epsilon).toEqual(9);
  expect(res.consumption).toEqual(198);
});

test('Report B', () => {
  const res = GenReport(data);

  expect(res.gamma).toEqual(935);
  expect(res.epsilon).toEqual(3160);
  expect(res.consumption).toEqual(2954600);
});

test('Report C', () => {
  const binary = `00100
  11110
  10110
  10111
  10101
  01111
  00111
  11100
  10000
  11001
  00010
  01010`;

  const res = O2Report(binary);

  expect(res.oxy).toEqual(23);
  expect(res.co2).toEqual(10);
  expect(res.rating).toEqual(230);
});

test('Report D', () => {
  const res = O2Report(data);

  expect(res.oxy).toEqual(573);
  expect(res.co2).toEqual(2902);
  expect(res.rating).toEqual(1662846);
});