export function getTodayDate() {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  const dayOfWeek: number = today.getDay();
  const date: number[] = [year, month, day, dayOfWeek]

  return date;
}
