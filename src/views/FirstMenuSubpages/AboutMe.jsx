import React from "react";

import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

const AboutMe = () => {
  return (
    <>
      <header>
        <nav className="topNavigationContainer">
          <Svg />
          <HomeButton />
          <ThemeButton />
        </nav>
      </header>
      <main className="skuska">
        <img src={require("../../img/Foto.png")} alt="portrait" />
        <div className="border">
          <p>
            Moje meno je <strong>Ladislav</strong>, študujem{" "}
            <strong>informatiku</strong> na{" "}
            <strong>Technickej Univerzite v Košiciach</strong>. Hľadám
            príležitosť pracovať na projekte, kde si môžem zdokonaľovať svoje
            poznatky a učiť sa novým veciam v IT.
          </p>
        </div>

        <div className="border">
          <h3>Vzdelanie a kurzy</h3>
          <p>
            2020 - súčasnosť Technická univerzita v Košiciach Fakulta
            elektrotechniky a informatiky Odbor: informatika
          </p>
          <p>
            2012 - 2016 Stredná odborná škola dopravná, Prešov Odbor: mechanik
            elektrotechnik Ukončené: maturitná skúška
          </p>
          <p>2021 Kurz: Webrebel 1: HTML, CSS & JavaScript</p>
        </div>

        <div className="border">
          <h3>Pracovné skúsenosti</h3>
          <p>
            1/2020 - Staffline universe, Bristol 9/2020 Pracovná pozícia:
            pracovník v Tesco Distribution Centre
          </p>
        </div>

        <div className="border">
          <h3>Znalosti</h3>
        </div>
      </main>
    </>
  );
};

export default AboutMe;
