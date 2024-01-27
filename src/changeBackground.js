import React, { useEffect, useRef, useState } from "react";
import "./changeBackground.css";

function ChangeBackground() {
  const [color, setColor] = useState("blue");
  const divRef = useRef(null);

  useEffect(() => {
    document.body.style.backgroundColor = color;
  });

  return (
    <>
      <div ref={divRef} className="testBackground">
        <p> Color input to change the bg color </p>
        <input type="color" onChange={(e) => setColor(e.target.value)} />
      </div>
    </>
  );
}

export default ChangeBackground;
