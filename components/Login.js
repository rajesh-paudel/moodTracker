import React from "react";
import Button from "./Button";
import { Fugaz_One } from "next/font/google";
const fugaz = Fugaz_One({
  subsets: ["latin"],
  weight: ["400"],
});
function Login() {
  return (
    <div className=" flex flex-col flex-1 justify-center items-center gap-4">
      <h3 className={" text-4xl sm:text-5xl md:text-6xl " + fugaz.className}>
        Log in / Register
      </h3>
      <p>You&#39;re one step away!</p>
      <input
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600"
        placeholder="Email"
        type="email"
      />
      <input
        className="w-full max-w-[400px] mx-auto px-4 py-2 sm:py-3 border border-solid border-indigo-400 rounded-full outline-none duration-200 hover:border-indigo-600"
        placeholder="Password"
        type="password"
      />
      <div className=" max-w-[400px] w-full mx-auto ">
        <Button text="Submit" full />
      </div>
      <p className="text-center">
        Don&#39;t have an account?{" "}
        <span className="text-indigo-500 ">Sign up</span>
      </p>
    </div>
  );
}

export default Login;
