import React from "react";
import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
function Button(props) {
  const { text, dark, full } = props;
  return (
    <button
      className={
        " rounded-full border duration-200 hover:opacity-60 border-solid overflow-hidden border-indigo-600 " +
        (dark ? " text-white bg-indigo-600 " : " text-indigo-600 ") +
        (full ? " grid place-items-center w-full " : "")
      }
    >
      <p
        className={
          " px-6 sm:px-10 whitespace-nowrap py-2 sm:py-33 " + fugaz.className
        }
      >
        {text}
      </p>
    </button>
  );
}

export default Button;
