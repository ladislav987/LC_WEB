import React from "react";

const UseContext = () => {
  return (
    <>
      <p>useContext slúži na odosielanie kontextu nižšie do komponentov.</p>
      <p>Na začiatku potrebujeme vytvoriť kontext</p>

      <div className="code-example">
        <pre>
          <code>{`const PersonContext = React.createContext();
`}</code>
        </pre>
      </div>

      <p>
        Od tohto okamžiku máme prístup ku dvom komponentom: provider a consumer{" "}
      </p>

      <p>
        Ako Providera potrebujeme nastaviť najvrchnejší komponent. Taktiež môžem
        posielať napr. objekt komponentu nižšie.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const ContextAPI = () => {
  .....
    });
  };
  return (
    <PersonContext.Provider value={{ removePerson }}>
      .....
    </PersonContext.Provider>
  );
};
`}</code>
        </pre>
      </div>

      <p>
        A v konkrétnom komponentne môžeme pristúpiť k hodnote pomocou useContext
        funckie.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const { removePerson } = useContext(PersonContext);
`}</code>
        </pre>
      </div>


    </>
  );
};

export default UseContext;
