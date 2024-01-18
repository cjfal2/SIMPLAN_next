export type NavigatorDataType = {
  eng: string;
  kor: string;
};

export type ToDoItemType = {
  id: number;
  title: string;
  content: string;
  status: string;
  planStartTime: Date;
  planEndTime: Date;
  realStartTime: Date;
  realEndTime: Date;
  category: string;
};

export type DailyToDoType = ToDoItemType[];

export type ToDoDataType = {
  [date: string]: DailyToDoType;
};
