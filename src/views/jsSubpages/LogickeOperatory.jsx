import React from "react";

const ShortCircuitEvaluation = () => {
  return (
    <>
      <p>
        V JS existujú 3 logické operátory:
        <br />
        Logický AND ( && )
        <br />
        Logický OR ( | | )
        <br />
        Logický NOT ( ! )
      </p>

      <p>
        Logický AND v JS vieme napr. použiť pri overení či daný objekt existuje (je pravdivý)
        a v prípade že áno pristúpime k danej hodnote.
      </p>

      <div className="code-example">
        <pre>
          <code>{`let n = obj && obj.name;`}</code>
          <p>Tento kód je taktiež skrátený zápis tohto kódu:</p>
          <code>{`let n;

if (obj){
  n = obj.name;
}`}</code>
        </pre>
      </div>

      <p>
        Podobne sa logický OR v JS používa ako <strong>default operator</strong>{" "}
        v prípade ak by premenná nemala žiadnu hodnotu priradí sa defaultna hodnota.
      </p>

      <div className="code-example">
        <pre>
          <code>{`let firstName = null;
var name = firstName || "John";`}</code>
        </pre>
      </div>
    </>
  );
};

export default ShortCircuitEvaluation;
