import React from "react";

const Forms = () => {
  return (
    <>
      <p>Príklad formulára v Reacte</p>

      <div className="code-example">
        <pre>
          <code>{`const ControlledInputs = () => {
  // premenné firstName a email
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  const handleNameInput = (event) => {
    setFirstName(event.target.value)
  }
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  return (
    <>
      <article>
        <form className='form' onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName">Name: </label>
            <input
              type="text"
              id='firstName'
              name='firstName'
              value={firstName}
              onChange={handleNameInput}
            />
          </div>

          <div className="form-control">
            <label htmlFor="email">Email: </label>
            <input
              type="text"
              id='email'
              name='email'
              value={email}
              onChange={handleEmailInput}
            />
          </div>

          <button type='submit'>Add person</button>
        </form>
      </article>
    </>
  )
};
`}</code>
        </pre>
      </div>

      <p>Formulár s ukladaním do poľa</p>

      <div className="code-example">
        <pre>
          <code>{`const ControlledInputs = () => {
  // premenné firstName a email
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  // prázdne pole people
  const [people, setPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault(); //zabranenie odoslaniu formulara

    // podmienka aby sa formulár neodoslal pokiaľ nie su vyplnené hodnoty
    if (firstName && email) {
      const person = { id: uniqid(), firstName, email };

      // nastavenie starej hodnoty a pridanie novej
      setPeople((people) => {
        return [...people, person]
      });

      // nastavenie prázdnych inputov
      setFirstName("");
      setEmail("");
    }
  }

  const handleNameInput = (event) => {
    setFirstName(event.target.value)
  }
  const handleEmailInput = (event) => {
    setEmail(event.target.value)
  }

  return (
    <>
      <article>
        <Form
          handleSubmit={handleSubmit}
          handleNameInput={handleNameInput}
          handleEmailInput={handleEmailInput}
        />

        {/* iterovanie v poli objektov */}
        {
          people.map(((person) => {
            const { id, firstName, email } = person;

            return <div key={id}>
              <h4>{firstName}</h4>
              <h5>{email}</h5>
              <h5>{id}</h5>
            </div>
          }))
        }
      </article>
    </>
  )
};
`}</code>
        </pre>
      </div>
    </>
  );
};

export default Forms;
