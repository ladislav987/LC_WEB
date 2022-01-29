import React from "react";

const Fragments = () => {
  return (
    <div>
      <p>
        Fragment dá dohromady zoznam potomkov bez pridania extra vetvy do DOMu.
      </p>

      <div className="code-example">
        <pre>
          <code>{`render() {
  return (
    <React.Fragment>
      <ChildA />
      <ChildB />
      <ChildC />
    </React.Fragment>
  );
}
`}</code>
        </pre>
      </div>

      <p>
        V novej verzii Reactu existuje aj skrátena verzia zápisu pokiaľ
        nepouživáme "keys" alebo atribúty.
      </p>

      <div className="code-example">
        <pre>
          <code>{`render() {
  return (
    <>
      <ChildA />
      <ChildB />
      <ChildC />
    </>
  );
}
`}</code>
        </pre>
      </div>

      <p>
        Viac o Fragmentoch{" "}
        <a href="https://reactjs.org/docs/fragments.html">
          reactjs.org
        </a>
      </p>
    </div>
  );
};

export default Fragments;
