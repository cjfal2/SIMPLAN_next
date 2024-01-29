const daysOfWeekEng: string[] = [
  "SUN",
  "MON",
  "TUE",
  "WED",
  "THU",
  "FRI",
  "SAT",
];

type DayEntry = [number, string];

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

  // 이번 주의 첫 번째 날짜 계산
  const firstDayOfWeek = day - dayOfWeek;

  // 이번 주의 날짜 배열 초기화
  const thisWeekDates: DayEntry[] = new Array();

  for (let i = 0; i < 7; i++) {
    // 날짜 계산
    const currentDate = new Date(year, month - 1, firstDayOfWeek + i);

    // 날짜와 요일 정보를 배열에 추가
    const dateInfo: DayEntry = [
      currentDate.getDate(),
      daysOfWeekEng[currentDate.getDay()],
    ];
    thisWeekDates.push(dateInfo);
  }

  return thisWeekDates;
}
