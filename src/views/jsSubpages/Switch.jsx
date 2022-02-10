import React from "react";

const Switch = () => {
  return (
    <>
      <p>
        Príkaz<code>swith</code> vyhodnotí výraz a priradí jeho hodnotu k{" "}
        <code>case</code>.
      </p>
      <div className="code-example">
        <pre>
          <code>{`switch (event.target.id) {
        case "nine":
            addNumber(9);
            break;

        case "eight":
            addNumber(8);
            break;

        case "seven":
            addNumber(7);
            break;
    }`}</code>
        </pre>
      </div>
    </>
  );
};

export default Switch;
