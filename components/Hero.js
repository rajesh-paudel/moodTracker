import React from "react";
import { Fugaz_One } from "next/font/google";
import Button from "./Button";
import Calender from "./Calender";
import Link from "next/link";

const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
function Hero() {
  return (
    <div className=" py-4  md:py-12 flex flex-col gap-4 sm:gap-8 ">
      <h1
        className={
          " text-5xl sm:text-6xl md:text-7xl text-center " + fugaz.className
        }
      >
        <span className="textGradient">MoodTracker </span> helps you track your
        <span className="textGradient">daily </span> mood!
      </h1>
      <p className="text-lg sm-text-xl md:text-2xl text-center w-full mx-auto max-w-[600px]">
        Create your record and see how you feel on
        <span className=" font-medium ">every dy of every year </span>
      </p>
      <div className="grid grid-cols-2 gap-4 w-fit mx-auto">
        <Link href="/dashboard">
          <Button text="Signup" />
        </Link>

        <Link href="/dashboard">
          <Button text="Login" dark />
        </Link>
      </div>
      <Calender demo />
    </div>
  );
}

export default Hero;
