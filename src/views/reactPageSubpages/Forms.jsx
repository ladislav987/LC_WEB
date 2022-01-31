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
    </>
  );
};

export default Forms;
