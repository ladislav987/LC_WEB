import React from "react";

const PrevState = () => {
  return (
    <div>
      <p>
        prevState je podľa konvecie názov parametru ktorý drží aktuálnu hodnotu
        premennej.
      </p>

      <p>
        Vo funkcii increaseFunction môžeme stlačiť počas timeoutu tlačidlo +
        ľubovoľne krát ale hodnota sa zmení len o 1 pretože na konci sa vezme
        vždy stará hodnota.
      </p>

      <p>
        Kdežto vo funkcii superIncreaseFunction môžeme stlačiť počas timeoutu
        tlačidlo Super + ľubovoľne krát ale hodnota sa zmení o počet kliknutí
        pretože zavolaním arrow funkcie v setValue a parametrom prevState vieme
        odchytiť aktuálnu hodnotu premennej.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const increaseFunction = () => {
    setTimeout(() => {
      setValue(value + 1);
    }, 1000);
  }
  const superIncreaseFunction = () => {
    setTimeout(() => {
      setValue((prevState) => {
        return prevState + 1;
      });
    }, 1000);
  }
  return (
    <>
      <section>
        <h2>Counter</h2>
        <h3>{value}</h3>
        <button className='btn' onClick={increaseFunction}>+</button>
        <button className='btn' onClick={superIncreaseFunction}>Super +</button>
      </section>
    </>
  );
};
`}</code>
        </pre>
      </div>
    </div>
  );
};

export default PrevState;
