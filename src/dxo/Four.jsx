import React from "react";

const Four = () => {
  const items = [
    "item 1",
    "item 2",
    "item 3",
    "item 4",
    "item 5",
    "item 6",
    "item 7",
    "item 8",
    "item 9",
    "item 10",
  ];
  return (<div>
    {items.map((item, i) => {
      return(
        <div key={i} >{item}</div>
      )
    })}
  </div>);
};

export default Four;
