import { PlanAimRoute, PlanRoute } from './route';
import data from './route.data';
test('Route A', () => {
  const commands = `forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2`;

  const {horizontal, depth, total} = PlanRoute(commands);

  expect(horizontal).toEqual(15);
  expect(depth).toEqual(10);
  expect(total).toEqual(150);
});

test('Route B', () => {
  const {horizontal, depth, total} = PlanRoute(data);

  expect(horizontal).toEqual(2033);
  expect(depth).toEqual(750);
  expect(total).toEqual(1524750);
});

test('Route C', () => {
  const commands = `forward 5
  down 5
  forward 8
  up 3
  down 8
  forward 2`;
  const {horizontal, depth, total} = PlanAimRoute(commands);

  expect(horizontal).toEqual(15);
  expect(depth).toEqual(60);
  expect(total).toEqual(900);
});

test('Route D', () => {
  const {horizontal, depth, total} = PlanAimRoute(data);

  expect(horizontal).toEqual(2033);
  expect(depth).toEqual(783289);
  expect(total).toEqual(1592426537);
});
