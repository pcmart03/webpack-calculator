const transformations = {
  neg: (val) => val * -1,
  percent: (val) => val * 100
}

export function transformValue(val, command) {
  return transformations[command](val);
}