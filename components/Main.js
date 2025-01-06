import React from "react";

function Main(props) {
  const { children } = props;
  return <main className="px-5 flex-1">{children}</main>;
}

export default Main;
