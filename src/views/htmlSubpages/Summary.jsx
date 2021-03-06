import React from "react";
import { NavLink } from "react-router-dom";

const Details = () => {
  return (
    <>
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
    </>
  );
};

export default Details;
