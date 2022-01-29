import React from "react";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <div>
      <h2>&#60;summary&gt;</h2>
      <p>
        &#60;summary&gt; je HTML elemente špecifický ako legenda pre{" "}
        <NavLink to="/html/details">&#60;details&gt;</NavLink>{" "}
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
