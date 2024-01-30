const daysOfWeekEng: string[] = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

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

type DayEntry = [number, string, number];

export function getTodayDate() {
  const today: Date = new Date();
  const year: number = today.getFullYear();
  const month: number = today.getMonth() + 1;
  const day: number = today.getDate();
  const dayOfWeek: number = today.getDay();
  const date: number[] = [year, month, day, dayOfWeek];

  return date;
}

export function getThisWeekDates() {
  const [year, month, day, dayOfWeek] = getTodayDate();

  const firstDayOfWeek = day - dayOfWeek;

  // 이번 주의 날짜 배열 초기화
  const thisWeekDates: DayEntry[] = new Array();

  for (let i = 0; i < 7; i++) {
    // 날짜 계산
    // TODO: 이번 주의 첫 번째 날짜 계산 (달이 넘어가는 주간이라면 이번주 예시로 달을 새로 계산해야함)

    let newDay = firstDayOfWeek + i;
    const daysAll: number =
      month === 2 && year % 4 === 0 ? 29 : monthInfo[month]; // 이 번달 총 일수 (윤년 계산)
    let m = month;
    // 이번주의 첫째날 + i 가 이번달의 총 날짜 수 보다 크다면 총 날짜수를 빼주고 달을 + 해야함
    if (newDay > daysAll) {
      newDay = newDay - daysAll;
      m++;
    }

    // 이번주의 첫재날 + i 가 1보다 작다면 지날달의 총 날짜수에서 그만큼을 더해주고 달을 - 해야함
    else if (newDay < 1) {
      newDay = newDay + daysAll;
      m--;
    }
    // TODO: 나중에는 년도도 계산해야함
    const currentDate = new Date(year, m - 1, newDay);

    // 날짜와 요일 정보를 배열에 추가
    const dateInfo: DayEntry = [newDay, daysOfWeekEng[currentDate.getDay()], m];
    thisWeekDates.push(dateInfo);
  }
  return thisWeekDates;
}
