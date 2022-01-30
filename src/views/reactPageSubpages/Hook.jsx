import React from "react";

const Hook = () => {
  return (
    <div>
      <p>Hook začína slovom use.</p>
      <p>
        Hook musí byť na vrchu funkcie, nesmie byť zapustený do podmienky alebo
        cyklu. Podmienky alebo cykly môžeme použiť vo vnútri.
      </p>

      <div className="code-example">
        <pre>
          <code>{`useEffect(() => {
  if (value >= 1) {
    document.title = "New message"
  }
});
`}</code>
        </pre>
      </div>

      <p>Komponent v ktorom chceme použiť Hook musí začínať velkým písmenom.</p>
      <p>
        Hook môžeme volať len vo <strong>function komponentoch.</strong>{" "}
      </p>

      <div className="code-example">
        <pre>
          <code>{`export const Hook = () => {
    const [variable, setvariable] = useState(second);
    return <div>{variable}</div>;
};
`}</code>
        </pre>
      </div>

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
        zavolá useEffect. V prípade že je [ ] prázdne sa useEffect zavolá len
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

      <p></p>
    </div>
  );
};

export default Hook;
