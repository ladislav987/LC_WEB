import React from "react";

const TernarnyOperator = () => {
  return (
    <>
      <p>
        Ternárny operátor je jediný operátor v JS ktorý vie vziať 3 operandy:
        <br />
        1. Podmienka pred opytovacím znamienkom (?).
        <br />
        2. Vetva ktorá sa splní v prípade že podmienka je pravdivá.
        <br />
        3. Vetva ktorá sa splní v prípade že podmienka je nepravdivá.
      </p>

      <div className="code-example">
        <pre>
          <code>{`var vek = 22;
var nápoj = (vek >= 18) ? "Pivo" : "Džús";

console.log(nápoj); // "Pivo"`}</code>
        </pre>
      </div>
    </>
  );
};

export default TernarnyOperator;
