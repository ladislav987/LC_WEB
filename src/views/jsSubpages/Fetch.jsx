import React from "react";

import { NavLink } from "react-router-dom";

const Fetch = () => {
  return (
    <div>
      <p>
        fetch() metóda začne proces prinášania dát zo siete, pričom vracia{" "}
        <NavLink to="/js/promises">promises</NavLink> ktoré sú naplnené pri
        úspešnej odozve.
      </p>
      <p>fetch() je dostupná od ES6</p>
    </div>
  );
};

export default Fetch;
