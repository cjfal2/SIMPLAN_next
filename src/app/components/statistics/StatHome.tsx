"use client";

import React, { useState } from "react";
import StatNav from "./StatNav";
import StatWeek from "./StatWeek";
import StatMonth from "./StatMonth";

export default function StatHome() {
  const [where, setWhere] = useState("week");
  const clickNav = (click: string) => {
    setWhere(click);
  };

  return (
    <>
      <StatNav clickButton={clickNav} where={where}/>
      {where === "week" ? (
        <StatWeek/>
      ) : (
        <StatMonth/>
      )}
    </>
  );
}
