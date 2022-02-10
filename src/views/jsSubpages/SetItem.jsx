import React from "react";

const SetItem = () => {
  return (
    <>
      <p>
        setItem() je metóda Storage interfacu kde po priradení kľuča a hodnoty
        vytvorí v úložisku kľuč s uvedenou hodnotou alebo aktualizuje hodnotu
        existujucého kľúča.
      </p>

      <div className="code-example">
        <pre>
          <code>{`window.localStorage.setItem("theme", "theme-1");`}</code>
        </pre>
      </div>
    </>
  );
};

export default SetItem;
