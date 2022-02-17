import React from "react";
import { NavLink } from "react-router-dom";

// import { useSprings, animated, useSpring } from "@react-spring/web";

import "./Home.scss";


const Home = () => {
  // const props = useSpring({
  //   from: { x: -100, y: 500, opacity: 0 },
  //   to: async (next) => {
  //     await next({ y: 0, opacity: 1, delay: 1000 });
  //     await next({ x: 0 });
  //   },
  // });

  return (
    <div className="appSkuska">

      <div className="containerSkuska">
        <NavLink to="/aboutMe" className="item">
          O mne
        </NavLink>
        <NavLink to="/portfolio" className="item">
          Portfólio
        </NavLink>
        <NavLink to="/documentation" className="item">
          Dokumentácia
        </NavLink>
        <NavLink to="/other" className="item">
          Iné niečo
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
