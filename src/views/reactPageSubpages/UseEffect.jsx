import React from "react";

const UseState = () => {
  return (
    <div>
      <p>
        <code>useEffect()</code> nám dovoľuje vyvolať vedľajší efekt v funkcii
        komponentu{" "}
      </p>

      <div className="code-example">
        <pre>
          <code>{`    useEffect(() => {
      document.title = "hello";
    });
`}</code>
        </pre>
      </div>
      <p>
        Prípady kedy použiť useEffect(): <br /> - pri manipulácii s DOMom <br />{" "}
        - pri pripnutí eventListeners <br /> - po zobrazení komponentu
        potrebujeme použiť fetch, ajax alebo api <br />- pri spustení
        setTimeout()
      </p>
    </div>
  );
};

export default UseState;
