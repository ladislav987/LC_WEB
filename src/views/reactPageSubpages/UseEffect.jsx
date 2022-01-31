import React from "react";

const UseState = () => {
  return (
    <>
      <p>
        <code>useEffect()</code> nám dovoľuje vyvolať vedľajší efekt vo funkcii
        komponentu.{" "}
      </p>
      <p>Defaultne sa useEffect spustí po každom renderovaní.</p>
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
      <p>Do useEffect môžeme pridať další argument (pole).</p>
      <div className="code-example">
        <pre>
          <code>{`useEffect(() => {
    .....
  }, []);
`}</code>
        </pre>
      </div>
      <p>
        Tento druhý argument sa nazýva "Dependency list" a určuje kedy sa má
        zavolať useEffect. V prípade že je [ ] prázdne sa useEffect zavolá len
        pri počiatočnom spustení.
      </p>
      <p>
        Pri zadaní premennej do [ ] sa useEffect zavolá len pri zmene tejto
        premennej
      </p>
      <div className="code-example">
        <pre>
          <code>{`useEffect(() => {
    .....
  }, [value]);
`}</code>
        </pre>
      </div>
      <p>
        Pokiaľ v useEffect používame set funkciu alebo addEventListener je
        potrebné tiež zavolať Cleanup funkciu alebo dependency array ktoré
        zabránia opätovnému volaniu listenera z useEffect.
        <br /> Napr. pri pridaní addEventListenera by sa pri každom renderovaní
        alebo skrytí/zobrazení elementu pridal nový addEventListener alebo pri
        set funkcii by vznikla nekonečná slučka kedže zmena premennej vyvolá
        renderovanie.
      </p>
      <div className="code-example">
        <pre>
          <code>{`useEffect(() => {
    window.addEventListener("resize", checkSize);

    return () => {
      window.removeEventListener("resize", checkSize);
    };
  });
`}</code>
        </pre>
      </div>

      <p>
        V useEffect nemôžeme priamo napísať async funkciu kedže tá vracia
        promises, musíme vytvoriť osobytnú funkciu.
      </p>

      <div className="code-example">
        <pre>
          <code>{` const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUser(users);
  }

  useEffect(() => {
    getUsers();
  }, []);
`}</code>
        </pre>
      </div>
    </>
  );
};

export default UseState;
