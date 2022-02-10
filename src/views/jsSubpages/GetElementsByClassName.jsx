import React from 'react'

const GetElementsByClassName = () => {
  return (
    <>
      <p> Document metóda ktorá vracia pole elementov, ktoré zodpovedajú hľadanému menu.</p>
      <div className="code-example">
        <pre>
          <code>{`const button_container = document.getElementById("button_container");`}</code>
        </pre>
      </div>
    </>
  );
}

export default GetElementsByClassName