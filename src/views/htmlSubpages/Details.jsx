import React from "react";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <p>
        Element v sebe drží informácie ktoré su viditelné len v "open" stave.
        Label tohto elementu sa zobrazí pomocou{" "}
        <NavLink to="/html/summary">&#60;summary&gt;</NavLink>
      </p>

      <div className="code-example">
        <pre>
          <code>{`<details>
    <summary>Details</summary>
    Something small enough to escape casual notice.
</details>`}</code>
        </pre>
      </div>
    </div>
  );
};

export default Details;
