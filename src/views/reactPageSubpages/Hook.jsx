import React from "react";

const Hook = () => {
  return (
    <div>
      <p>Hook začína slovom use.</p>
      <p>
        Hook nesmie byť byť na vrchu funkcie, nesmie byť zapustený do podmienky
        alebo cyklu.
      </p>
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

      <p></p>
    </div>
  );
};

export default Hook;
