import React, { useState } from "react";

import { useTransition, animated, useSpring } from "@react-spring/web";

import "./Home.scss";

const Home = () => {
  const [items, setItems] = useState([]);

  //? useTrantiton má dve parametre, prvá je naš useState a druhá je nastavovací objekt
  const transition = useTransition(items, {
    from: { x: -100, y: 500, opacity: 0 }, // predtým než sa namontuje
    enter: (item) => async (next) => {
      await next({ y: item.y, opacity: 1, delay: item.delay });
      await next({ x: 0 });
    }, // zobrazuje konečný stav
    leave: { x: 100, y: 500, opacity: 0 }, // keď sa dokončí
  });

  return (
    <div className="appSkuska">
      <button
        className="buttonSkuska"
        onClick={() => {
          setItems((v) =>
            v.length
              ? []
              : [
                  { y: 0, delay: 200 },
                  { y: 10, delay: 400 },
                  { y: 20, delay: 600 },
                ]
          );
        }}
      >
        {items.length ? "un-mount" : "mount"}
      </button>
      <div className="containerSkuska">
        {transition((style, item) =>
          item ? <animated.div className="item" style={style} /> : ""
        )}
      </div>
    </div>
  );
};

export default Home;
