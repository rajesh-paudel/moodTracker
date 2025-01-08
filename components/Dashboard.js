"use client";
import React from "react";
import { useEffect, useState } from "react";
import { Fugaz_One } from "next/font/google";
import Calender from "./Calender";
import { useAuth } from "@/context/AuthContext";
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
function Dashboard() {
  const { currentUser, userData, setUserData } = useAuth();
  const [data, setData] = useState({});

  function countValues() {}

  function handleSetMood(mood, day, month, year) {
    const newData = { ...userData };
  }
  const statuses = {
    num_days: 14,
    time_remaining: "13:14:26",
    date: new Date().toDateString(),
  };

  const moods = {
    "&*@#$": "😭",
    Sad: "😢",
    Existing: "😶",
    Good: "😊",
    Elated: "😍",
  };

  useEffect(() => {
    if (!currentUser || !userData) {
      return;
      setData(userData);
    }
  }, [currentUser, userData]);
  return (
    <div className="flex flex-col flex-1 gap-8 sm:gap-12 md:gap-16">
      <div className="grid grid-cols-3 bg-indigo-50 text-indigo-500 rounded-lg">
        {Object.keys(statuses).map((status, statusIndex) => {
          return (
            <div
              key={statusIndex}
              className=" p-4 flex flex-col gap-1 sm:gap-2 "
            >
              <p className="font-medium uppercase text-xs sm:text-sm ">
                {status.replaceAll("_", " ")}
              </p>
              <p
                className={" text-base sm:text-lg truncate " + fugaz.className}
              >
                {statuses[status]}
              </p>
            </div>
          );
        })}
      </div>
      <h4
        className={"text-5xl sm:6xl md:text-7xl text-center " + fugaz.className}
      >
        How do you <span className="textGradient">feel</span> today?
      </h4>
      <div className="grid grid-cols-2 sm:grid-cols-5  gap-4">
        {Object.keys(moods).map((mood, moodIndex) => {
          return (
            <button
              className={
                "p-4 rounded-2xl purpleShadow duration-200 bg-indigo-50 hover:bg-indigo-100 text-center flex flex-col gap-2 items-center " +
                (moodIndex === 4 ? " col-span-2 sm:col-span-1 " : "")
              }
              key={moodIndex}
            >
              <p className="text-4xl sm:text-5xl md:text-6xl ">{moods[mood]}</p>
              <p className={"text-indigo-500 " + fugaz.className}>{mood}</p>
            </button>
          );
        })}
      </div>
      <Calender data={data} handleSetMood={handleSetMood} />
    </div>
  );
}

export default Dashboard;
