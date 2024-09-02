import React, { useState } from "react";

const Five = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };
  return (
    <div>
      <input type="checkbox" onChange={handleToggle} />
      <h3>{isToggled ? "On" : "Off"}</h3>
    </div>
  );
};

export default Five;
