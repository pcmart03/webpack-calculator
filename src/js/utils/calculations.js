const operations = {
  divide: (a, b) => a / b,
  mul: (a, b) => a * b,
  sub: (a, b) => a - b,
  add: (a, b) => a + b
};

export function calculate(val1, val2, opperand) {
  return operations[opperand](val1, val2);
}