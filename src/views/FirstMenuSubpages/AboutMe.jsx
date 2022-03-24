import React from "react";

// components
import HomeButton from "../../component/HomeButton";
import Svg from "../../component/Svg";
import ThemeButton from "../../component/ThemeButton";

//icons
import { FaLanguage, FaMapMarkerAlt } from "react-icons/fa";
import { DiHtml5, DiCss3, DiSass, DiJavascript1 } from "react-icons/di";
import {
  BsFillPersonFill,
  BsFillTelephoneFill,
  BsFillCalendarWeekFill,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { IoBarbellOutline } from "react-icons/io5";
import { BiRun, BiJoystickAlt } from "react-icons/bi";
import { ImBooks } from "react-icons/im";

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
        <section className="introduction">
          <img src={require("../../img/Foto.png")} alt="portrait" />
          <p>
            Moje meno je <strong>Ladislav</strong>, študujem{" "}
            <strong>informatiku</strong> na{" "}
            <strong>Technickej Univerzite v Košiciach</strong>. Hľadám
            príležitosť pracovať na projekte, kde si môžem{" "}
            <strong>zdokonaľovať</strong> svoje poznatky a{" "}
            <strong>učiť sa</strong> novým veciam v IT.
          </p>
        </section>

        <div className="border hidde"></div>

        <h3>Vzdelanie a kurzy</h3>
        <section className="vzdelanie">
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

        <div className="border hidde"></div>

        <h3>Pracovné skúsenosti</h3>
        <section className="skusenosti">
          <p className="skusenosti_s1 bold">1/2020 - 9/2020</p>
          <p className="skusenosti_s2">Staffline universe, Bristol</p>
          <p className="skusenosti_s3">
            Pracovná pozícia: pracovník v Tesco Distribution Centre
          </p>
        </section>

        <div className="border hidde"></div>

        <div className="znalosti_udaje_zaujmy">
          <section className="znalosti">
            <h3 className="znalosti_s1">Znalosti</h3>
            <div className="znalosti_s2">
              <span className="znalosti_s2_1">
                <FaLanguage size="1.8em" />
              </span>
              <p className="znalosti_s2_2">Anglický jazyk</p>
              <p className="znalosti_s2_3"> - B1</p>
            </div>
            <div className="znalosti_s3">
              <span className="znalosti_s3_1">
                <DiHtml5 size="1.8em" />
              </span>
              <p className="znalosti_s3_2">HTML</p>
              <p className="znalosti_s3_3"> - pokročilý</p>
            </div>
            <div className="znalosti_s4">
              <span className="znalosti_s4_1">
                <DiCss3 size="1.8em" />
              </span>
              <p className="znalosti_s4_2">CSS</p>
              <p className="znalosti_s4_3"> - pokročilý</p>
            </div>
            <div className="znalosti_s5">
              <span className="znalosti_s5_1">
                <DiSass size="1.8em" />
              </span>
              <p className="znalosti_s5_2">SASS</p>
              <p className="znalosti_s5_3"> - pokročilý</p>
            </div>
            <div className="znalosti_s6">
              <span className="znalosti_s6_1">
                <DiJavascript1 size="1.8em" />
              </span>
              <p className="znalosti_s6_2">JavaScript</p>
              <p className="znalosti_s6_3"> - pokročilý</p>
            </div>
          </section>

          <div className="border hidde2"></div>

          <div className="udaje_zaujmy">
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
                <a
                  className="udaje_s3_2"
                  href="mailto:ladislavchvastas@gmail.com"
                >
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
                <p className="udaje_s5_2">Vyšný Hrabovec 2, 09034</p>
              </div>
              <div className="udaje_s6">
                <span className="udaje_s6_1">
                  <BsFillCalendarWeekFill size="1.8em" />
                </span>
                <p className="udaje_s6_2">14.8.1997</p>
              </div>
            </section>

            <div className="border hidde1"></div>

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
          </div>
        </div>
        {/* <div className="border hidde">
          <h3>Vlastnosti</h3>
          <div className="flex">
          <span>
          <p>Kreativita</p>
          </span>
          </div><
          </span>
          span >
            <BsFillPersonFill />
          <div className="flex">
          <span>
          <p>Samostatnost</p>
          </span>
          </div><
          </span>
          span >
            <FaMapMarkerAlt />
          <div className="flex">
          <span>
          <p>Komunikácia</p>
          </span>
          </div><
          </span>
          span >
            <BsFillCalendarWeekFill />
        </div> */}
      </main>
    </>
  );
};

export default AboutMe;
