export type RouteReturn = { horizontal: number; depth: number; total: number };
export type Course = {horizontal: number; depth: number; };

function Pilot<T extends Course>(
  course: T,
  commands: string,
  commandTable: { [k: string]: (c: T, v: number) => void }
) {
  commands
    .split('\n')
    .map((c) => c.trim().split(' '))
    .map(([command, val]) => commandTable[command](course, +val));

  return {...course, total: course.depth * course.horizontal};
}

export function PlanRoute(commands: string): RouteReturn {
  let course = {
    horizontal: 0,
    depth: 0
  };

  return Pilot(course, commands, {
    forward: (c, v) => (c.horizontal += v),
    down: (c, v) => (c.depth += v),
    up: (c, v) => (c.depth -= v),
  });
}

export function PlanAimRoute(commands: string): RouteReturn {
  let course = {
    horizontal: 0,
    depth: 0,
    aim: 0
  };

  return Pilot(course, commands, {
    forward: (c, v) => {
      c.horizontal += v;
      c.depth += c.aim * v;
    },
    down: (c, v) => (c.aim += v),
    up: (c, v) => (c.aim -= v),
  });

}
