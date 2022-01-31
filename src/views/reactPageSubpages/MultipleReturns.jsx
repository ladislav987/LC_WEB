import React from "react";

const MultipleReturns = () => {
  return (
    <>
      <p>
        Po pridaní podmienky v komponente môžeme vytvoriť viacnásobný return
        ktorý sa vykoná v závislosti od splnenej podmienky.
      </p>

      <div className="code-example">
        <pre>
          <code>{`const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  return <h2>multiple returns</h2>;
};
`}</code>
        </pre>
      </div>

      <p>Príklad kde sa používa fetch</p>

      <div className="code-example">
        <pre>
          <code>{`const MultipleReturns = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <=299) {
          return resp.json()
        }
        else{
          setIsLoading(false);
          setIsError(true);
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch(error => {
        console.error(error, "Chyba pri načitaváni");
      });
  }, []);


  if (isLoading) {
    return (
      <>
        <h1>
          Loading...
        </h1>
      </>
    )
  }
  if (isError) {
    return (
      <>
        <h1>
          Error...
        </h1>
      </>
    )
  }
  return (
    <>
      <h1>{user}</h1>
    </>
  )
};
`}</code>
        </pre>
      </div>
    </>
  );
};

export default MultipleReturns;
