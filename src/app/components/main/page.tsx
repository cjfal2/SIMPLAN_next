import React from 'react'
import PositiveSentence from "../.././components/today/PositiveSentence";
import ToDoList from "../.././components/today/ToDoList";
import TodayTimeTable from "../.././components/today/TodayTimeTable";


export default function MainPage() {
  return (
    <div className="px-6">
    <PositiveSentence/>
    <ToDoList/>
    <TodayTimeTable/>
  </div>
  )
}
