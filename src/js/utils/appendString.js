function appendDecimal(str) {
  if (!str) {
    return "0.";
  }
  return `${str}.`;
}

function checkZero(str, char) {
  if (char === '0' && str === '0') {
    return '0'
  }
  if (str === '0') {
    return char;
  }
  return `${str}${char}`;
}

export function appendChar(str, char) {
  return char === '.' ? appendDecimal(str) : checkZero(str, char);
}
