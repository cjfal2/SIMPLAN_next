export function transNumber(num: number) {
  return num.toString().length === 1 ? "0" + num.toString() : num.toString();
};