import React from "react";
import { useState } from "react";

export default function Nine() {
  const [backgroundColor, setBackgroundColor] = useState("white");
  const HandleClick = () => {
    const newColor = backgroundColor === "white" ? "lightblue" : "white";
    setBackgroundColor(newColor)
  };
  return (
    <div
      onClick={HandleClick}
      style={{
        backgroundColor,
        width: "200px",
        height: "200px",
        cursor: "pointer",
      }}
    >
      Click To Me To Change Color
    </div>
  );
}
