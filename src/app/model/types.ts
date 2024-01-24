export type NavigatorDataType = {
  eng: string;
  kor: string;
};

export type ToDoItemType = {
  id: number;
  title: string;
  content: string;
  status: string;
  planStartTime: string;
  planEndTime: string;
  realStartTime: string;
  realEndTime: string;
  category: string;
};

export type DailyToDoType = ToDoItemType[];

export type ToDoDataType = {
  [date: string]: DailyToDoType;
};
