import React from "react";

// components
import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

//icons
import { FaMapMarkerAlt, FaPencilRuler, FaStarOfLife } from "react-icons/fa";

import { BsFillPersonFill, BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoBarbellOutline, IoChatbubbleEllipsesSharp } from "react-icons/io5";
import { BiRun, BiJoystickAlt } from "react-icons/bi";
import { ImBooks } from "react-icons/im";
import { GiSherlockHolmes, GiPerson } from "react-icons/gi";

//css
import "../../scss/AboutMe.scss";

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
      <main className="container_aboutMe">
        <img
          id="portrait"
          className="foto"
          src={require("../../img/Foto.png")}
          alt="portrait"
        />
        <div className="introduction_paragraf">
          <p className="title">Ladislav Chvastaš</p>
          <p className="description">
            Moje meno je <strong>Ladislav</strong>, študujem{" "}
            <strong>informatiku</strong> na{" "}
            <strong>Technickej Univerzite v Košiciach</strong>. Hľadám
            príležitosť pracovať na projekte, kde môžem <strong>využiť </strong>{" "}
            a<strong> zdokonaliť</strong> si svoje vedomosti z web developmentu.
          </p>
        </div>

        <div className="border hidde"></div>

        <section className="vzdelanie">
          <h3 className="vzdelanie_s11">Vzdelanie a kurzy</h3>
          <p className="vzdelanie_s1 bold">2020 - súčasnosť</p>
          <p className="vzdelanie_s2">Technická univerzita v Košiciach </p>
          <p className="vzdelanie_s3">Fakulta elektrotechniky a informatiky</p>
          <p className="vzdelanie_s4">Odbor: informatika</p>
          <p className="vzdelanie_s5 bold">2012 - 2016</p>
          <p className="vzdelanie_s6">Stredná odborná škola dopravná, Prešov</p>
          <p className="vzdelanie_s7">Odbor: mechanik elektrotechnik</p>
          <p className="vzdelanie_s8">Ukončené: maturitná skúška</p>
          <p className="vzdelanie_s9 bold">2021</p>
          <p className="vzdelanie_s10">
            Kurz: Webrebel 1: HTML, CSS & JavaScript
          </p>
        </section>

        <div className="border1 hidde"></div>

        <section className="skusenosti">
          <h3 className="skusenosti_s4">Pracovné skúsenosti</h3>
          <p className="skusenosti_s1 bold">1/2020 - 9/2020</p>
          <p className="skusenosti_s2">Staffline universe, Bristol</p>
          <p className="skusenosti_s3">
            Pracovná pozícia: pracovník v Tesco Distribution Centre
          </p>

          <p className="skusenosti_s5 bold">2/2018 - 3/2019</p>
          <p className="skusenosti_s6">
            Volkswagen Slovakia, a.s., Devínska Nová Ves
          </p>
          <p className="skusenosti_s7">Pracovná pozícia: Kontrolór kvality</p>
        </section>

        <div className="border2 hidde"></div>

        <section className="znalosti">
          <h3 className="znalosti_s1">Znalosti</h3>
          <div className="znalosti_s2">
            <span className="znalosti_s2_1">
              <img src={require("../../img/english.png")} alt="english" />
            </span>
            <p className="znalosti_s2_2">Anglický jazyk</p>
            <p className="znalosti_s2_3"> - B1</p>
          </div>
          <div className="znalosti_s3">
            <span className="znalosti_s3_1">
              <img src={require("../../img/html.png")} alt="html" />
            </span>
            <p className="znalosti_s3_2">HTML</p>
            <p className="znalosti_s3_3"> - pokročilý</p>
          </div>
          <div className="znalosti_s4">
            <span className="znalosti_s4_1">
              <img src={require("../../img/css.png")} alt="css" />
            </span>
            <p className="znalosti_s4_2">CSS</p>
            <p className="znalosti_s4_3"> - pokročilý</p>
          </div>
          <div className="znalosti_s5">
            <span className="znalosti_s5_1">
              <img src={require("../../img/sass.png")} alt="sass" />
            </span>
            <p className="znalosti_s5_2">SASS</p>
            <p className="znalosti_s5_3"> - pokročilý</p>
          </div>
          <div className="znalosti_s6">
            <span className="znalosti_s6_1">
              <img src={require("../../img/JS.png")} alt="javascript" />
            </span>
            <p className="znalosti_s6_2">JavaScript</p>
            <p className="znalosti_s6_3"> - mierne pokročilý</p>
          </div>
          <div className="znalosti_s7">
            <span className="znalosti_s7_1">
              <img src={require("../../img/react.png")} alt="react" />
            </span>
            <p className="znalosti_s7_2">React</p>
            <p className="znalosti_s7_3"> - mierne pokročilý</p>
          </div>
        </section>

        <div className="border3 hidde2"></div>

        <section className="udaje">
          <h3 className="udaje_s1">Osobné údaje</h3>
          <div className="udaje_s2">
            <span className="udaje_s2_1">
              <BsFillPersonFill size="1.8em" />
            </span>
            <p className="udaje_s2_2">Ladislav Chvastaš</p>
          </div>
          <div className="udaje_s3">
            <span className="udaje_s3_1">
              <GrMail size="1.8em" />
            </span>
            <a className="udaje_s3_2" href="mailto:ladislavchvastas@gmail.com">
              ladislavchvastas@gmail.com
            </a>
          </div>
          <div className="udaje_s4">
            <span className="udaje_s4_1">
              <BsFillTelephoneFill size="1.8em" />
            </span>
            <a className="udaje_s4_2" href="tel:+421 950 826 689">
              +421 950 826 689
            </a>
          </div>
          <div className="udaje_s5">
            <span className="udaje_s5_1">
              <FaMapMarkerAlt size="1.8em" />
            </span>
            <p className="udaje_s5_2">Vyšný Hrabovec 2, 090 34</p>
          </div>
          <div className="udaje_s6">
            <span className="udaje_s6_1">
              <FaStarOfLife size="1.8em" />
            </span>
            <p className="udaje_s6_2">14.8.1997</p>
          </div>
        </section>

        <div className="border4 hidde1"></div>

        <section className="zaujmy">
          <h3 className="zaujmy_s1">Záujmy</h3>
          <div className="zaujmy_s2">
            <span>
              <IoBarbellOutline size="1.8em" />
            </span>
            <p>Fitness</p>
          </div>

          <div className="zaujmy_s3">
            <span>
              <BiRun size="1.8em" />
            </span>
            <p>Beh</p>
          </div>

          <div className="zaujmy_s4">
            <span>
              <ImBooks size="1.8em" />
            </span>
            <p>Knihy</p>
          </div>
          <div className="zaujmy_s5">
            <span>
              <BiJoystickAlt size="1.8em" />
            </span>
            <p>Videohry</p>
          </div>
        </section>

        <div className="border5"></div>

        <section className="vlastnosti">
          <h3 className="vlastnosti_s1">Vlastnosti</h3>
          <div className="vlastnosti_s2">
            <span>
              <FaPencilRuler size="1.8em" />
            </span>
            <p>Kreativita</p>
          </div>

          <div className="vlastnosti_s3">
            <span>
              <GiPerson size="1.8em" />
            </span>
            <p>Samostatnosť</p>
          </div>

          <div className="vlastnosti_s4">
            <span>
              <IoChatbubbleEllipsesSharp size="1.8em" />
            </span>
            <p>Komunikatívnosť</p>
          </div>

          <div className="vlastnosti_s5">
            <span>
              <GiSherlockHolmes size="1.8em" />
            </span>
            <p>Dôslednosť</p>
          </div>
        </section>
      </main>
    </>
  );
};

export default AboutMe;
