import React from "react";

const Map = () => {
  return (
    <div>
      Treba prerobiť
      <p>
        V reacte sa map() používa na iterovanie v objekte kde z callback funkcie
        vráti JSX.
      </p>
      <div className="code-example">
        {/* //? kod kde je celý kod v bloku */}
        <pre>
          <code>{`const Users = () => {
  const data = [
    { id: 1, name: "John" },
    { id: 2, name: "Victor" },
    { id: 3, name: "Jane" },
  ];

  return (
    <div>
      {data.map((user) => (
        <div>{user}</div>
      ))}
    </div>
  );
};
  `}</code>
        </pre>
      </div>
    </div>
  );
};

export default Map;
