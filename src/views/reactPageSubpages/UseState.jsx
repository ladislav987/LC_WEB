import React from "react";

const UseState = () => {
  return (
    <div>
      <p>
        <code>useState()</code> je funkcia ktorá vráti premennú a tiez funkciu{" "}
        <code>setVariable()</code> pomocou ktorej môžeme meniť hodnotu premennej{" "}
      </p>

      <div className="code-example">
        <pre>
          <code>{`const [variable, setVariable] = useState("text");`}</code>
        </pre>
      </div>
      <h3>useState - Array</h3>
      <p>
        - do useState pošlem pole s hodnotami. V returne komponentu pomocou
        destructoringu vytiahnem hodnoty z poľa a ku každej priradím button na
        mazanie.
      </p>
      <p>
        - funkcia removeItem odfiltruje záznamy ktoré nemajú rovnaké id a vráti
        pole len s ostatnými hodnotami.{" "}
      </p>

      <div className="code-example">
        <pre>
          <code>{`const UseStateArray = () => {
  const [people, setPeople] = useState([
    { id: 1, name: "john" },
    { id: 2, name: "peter" },
    { id: 3, name: "susan" },
    { id: 4, name: "anna" },
  ]);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id)
    setPeople(newPeople);
  }

  return <Fragment>
    {
      people.map((person) => {
        const { id, name } = person;

        return <div key={id} className='item' >
          <h4>{name}</h4>
          <button onClick={() => removeItem(id)}>Remove</button>
        </div>;
      })
    }
    <button className='btn' onClick={() => setPeople([])}>Remove all</button>
  </Fragment>

};`}</code>
        </pre>
      </div>

      <h3>useState - Object</h3>
      <p>
        - do useState pošlem objekt s hodnotami. V returne komponentu je
        tlačidlo ktoré po stlačení zavolá funkciu changeMessage ktorá pomocou spread operátora vráti všetky hodnoty okrem message nezmenené.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    message: "new message",
  });

  const changeMessage = () => {
    setPerson({...person, message: "uplne niečo iné"})
  }
  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h3>{person.message}</h3>
      <button className='btn' onClick={changeMessage}>Change</button>
    </>
  )
};`}</code>
        </pre>
      </div>
    </div>
  );
};

export default UseState;
