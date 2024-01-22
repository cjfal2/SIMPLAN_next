// 각 달의 일수
const monthInfo: { [key: number]: number } = {
  1: 31,
  2: 28,
  3: 31,
  4: 30,
  5: 31,
  6: 30,
  7: 31,
  8: 31,
  9: 30,
  10: 31,
  11: 30,
  12: 31,
};

export function getCalendar(y: number, m: number) {
  // 월을 빼주기 (new Date는 월이 0부터 시작)
  if (m === -1) {
    y--;
    m = 11;
  }

  if (m === 12) {
    y++;
    m = 1;
  }

  const today: Date = new Date(y, m); // 해당 날짜정보
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const dayOfWeek: number = today.getDay();
  const prevMonthRest: number = dayOfWeek; // 지난 달 보여지는 일 수
  const daysAll: number = month === 2 && year % 4 === 0 ? 29 : monthInfo[month]; // 이 번달 총 일수 (윤년 계산)
  const nextMonthRest: number =
    prevMonthRest + daysAll <= 35
      ? 35 - (prevMonthRest + daysAll)
      : 40 - (prevMonthRest + daysAll); // 다음 달 보여지는 일 수

  // 지난 달 보여지는 일 구하기
  const prevMonthLast: Date = new Date(year, month-1, 0); // 마지막 0으로 마지막날의 정보 구하기
  const prevDate: number = prevMonthLast.getDate();
  const prevDates: number[][] = Array.from(
    { length: prevMonthRest },
    (_, index) => [prevDate - index, 0]
  ).reverse(); // 마지막 날을 기준으로 보여지는 일 수 만큼 생성하고, 지난 달을 뜻하는 0을 같이 표시 + 뒤집어서 순서에 맞게

  // 다음 달 보여지는 일 구하기
  const nextDates: number[][] = Array.from(
    { length: nextMonthRest },
    (_, index) => [index + 1, 2]
  ); // 다음 달은 어차피 1부터니까 1부터 보여지는 일 수 만큼 생성하고, 다음 달을 뜻하는 2를 같이 표시

  // 이번 달
  const thisDates: number[][] = Array.from({ length: daysAll }, (_, index) => [
    index + 1,
    1,
  ]); // 이번 달 일 수 만큼 생성하고 이번 달을 뜻하는 1을 같이 표시

  // 보여지는 이번 달 전체 달력 정보
  const calenderOfThisMonth: number[][] = [
    ...prevDates,
    ...thisDates,
    ...nextDates,
  ];

  return calenderOfThisMonth;
}
