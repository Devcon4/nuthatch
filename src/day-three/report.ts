export function GenReport(data: string) {
  let rotated = [];

  data.split('\n').map((v) =>
    v
      .trim()
      .split('')
      .map((v, i) => (rotated[i] = `${rotated[i] || ''}${v}`))
  );
  const counts = rotated.map((v) => ({
    ones: v.replace(/0/g, '').length,
    zeros: v.replace(/1/g, '').length,
  }));
  const gamma = parseInt(
    counts.reduce<string>(
      (prev, curr) => (prev += curr.ones > curr.zeros ? '1' : '0'),
      ''
    ),
    2
  );
  const epsilon = parseInt(
    counts.reduce<string>(
      (prev, curr) => (prev += curr.ones < curr.zeros ? '1' : '0'),
      ''
    ),
    2
  );

  return {
    gamma,
    epsilon,
    consumption: gamma * epsilon,
  };
}

export function O2Report(data: string) {
  const cleaned = data.split('\n').map((v) => v.trim());

  const filterArr = (list: string[], tieBreaker: (arr) => string, filter: (arr, lookup, i) => string[]) => {
    let res = '';

    const calcCounts = (arr: string[]) => {
      let charLookup = [];

      for (let row of arr) {
        for (let i = 0; i < row.length; i++) {
          charLookup[i] =
            row[i] === '1' ? (charLookup[i] || 0) + 1 : charLookup[i] || 0;
        }
      }
      return charLookup;
    };

    let arr = list;
    for (let i = 0; i < list[0].length; i++) {
      let lookup = calcCounts(arr);
      if (arr.length === 2) { res = tieBreaker(arr); break; }
      if (arr.length === 1) { res = arr[0]; break; }
      arr = filter(arr, lookup, i);
    }
    return parseInt(res, 2);
  };

  let oxy = filterArr(
    cleaned,
    (arr) => (arr[0][arr[0].length - 1] === '1' ? arr[0] : arr[1]),
    (a, l, i) => a.filter(v => l[i] >= a.length / 2 === !!+v[i])
  );

  let co2 = filterArr(
    cleaned,
    (arr) => (arr[0][arr[0].length - 1] === '0' ? arr[0] : arr[1]),
    (a, l, i) => a.filter(v => l[i] < a.length / 2 === !!+v[i])
  );

  return {
    oxy,
    co2,
    rating: oxy * co2,
  };
}
