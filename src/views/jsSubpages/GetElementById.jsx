import React from "react";

const GetElementById = () => {
  return (
    <>
      <p> Document metóda ktorá vracia Element ktorý zodpovedá hľadanému ID.</p>
      <div className="code-example">
        <pre>
          <code>{`const button_container = document.getElementById("button_container");`}</code>
        </pre>
      </div>
    </>
  );
};

export default GetElementById;
