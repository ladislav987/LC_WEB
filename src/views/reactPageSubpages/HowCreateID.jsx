import React from "react";

const HowCreateID = () => {
  return (
    <>
      <p>Vytvoriť ID pre zoznam môžeme buď pomocou Math funckie:</p>

      <div className="code-example">
        <pre>
          <code>{`id: Math.max(...people.map(s => s.id)) + 1
alebo v niektorých prípadoch:
id: Math.max(people.map(s => s.id)) + 1
`}</code>
        </pre>
      </div>

      <p>
        Alebo pomocou npm balíka{" "}
        <a href="https://www.npmjs.com/package/uniqid">uniqid:</a>
      </p>

      <div className="code-example">
        <pre>
          <code>{`id: uniqid(),
`}</code>
        </pre>
      </div>
    </>
  );
};

export default HowCreateID;
