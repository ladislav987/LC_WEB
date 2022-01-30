import React from "react";
import { NavLink } from "react-router-dom";

const CallbackFunction = () => {
  return (
    <div>
      <p>Komponent môže zmeniť len svôj stav.</p>
      <p>
        Pre zmenu stavu v potomkovi (smerom dole) používame{" "}
        <NavLink to="/react/props">props</NavLink> a pre zmenu v rodičovi
        (smerom hore) používame <strong>Callback funkciu</strong>.
      </p>

      <p>
        Rodič posiela potomkovi "onFormSubmit" props s rodičovou funkciou
        "handleSubmit".
        <br />V potomkovi (App2) odchytím props a v funckii
        "handleSubmitChildren" pošlem rodičovi späť "value".
      </p>

      <div className="code-example">
        <pre>
          <code>{`Rodič:

function App() {
  const [title, setTitle] = useState("first message");

  const handleSubmit = (data) => {
    setTitle(data);
  };

  return (
    <div className="App">
      <h1>{title}</h1>
      <App2 onFormSubmit={handleSubmit} />
    </div>
  );
}

Potomok:

const App2 = (props) => {
  const [value, setValue] = useState("");

  const handleSubmitChildren = (event) => {
    event.preventDefault();

    props.onFormSubmit(value);
  };

  const handleInput = (event) => {
    setValue(event.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmitChildren}>
        <input type="text" value={value} onChange={handleInput} />
      </form>
    </div>
  );
};
`}</code>
        </pre>
      </div>
    </div>
  );
};

export default CallbackFunction;
