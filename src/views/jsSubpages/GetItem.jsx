import React from 'react'

const GetItem = () => {
  return (
    <>
      <p>
        getItem() je metóda Storage interfacu kde po priradení kľuča vráti
        hodnotu kľúča alebo null ak kľúč neexistuje v úložisku.
      </p>

      <div className="code-example">
        <pre>
          <code>{`let themeClass = window.localStorage.getItem("theme");`}</code>
        </pre>
      </div>
    </>
  );
}

export default GetItem