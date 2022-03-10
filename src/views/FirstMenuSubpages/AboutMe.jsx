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
        <img src={require("../../img/Foto.png")} alt="portrait" />
        <p className="introduction">
          Moje meno je <strong>Ladislav</strong>, študujem{" "}
          <strong>informatiku</strong> na{" "}
          <strong>Technickej Univerzite v Košiciach</strong>. Hľadám príležitosť
          pracovať na projekte, kde si môžem <strong>zdokonaľovať</strong> svoje
          poznatky a <strong>učiť sa</strong> novým veciam v IT.
        </p>
        <div className="border"></div>
        <h3>Vzdelanie a kurzy</h3>
        <div className="grid_35_65">
          <p className="grid1_1 bold">2020 - súčasnosť</p>
          <p className="grid2_1">Technická univerzita v Košiciach </p>
          <p className="grid2_3">Fakulta elektrotechniky a informatiky</p>
          <p className="grid2_4">Odbor: informatika</p>
        </div>
        <div className="grid_35_65">
          <p className="grid1_1 bold">2012 - 2016</p>
          <p className="grid2_1"> Stredná odborná škola dopravná, Prešov</p>
          <p className="grid2_3">Odbor: mechanik elektrotechnik</p>
          <p className="grid2_4">Ukončené: maturitná skúška</p>
        </div>
        <div className="grid_35_65">
          <p className="grid1_1 bold">2021</p>
          <p className="grid2_1">Kurz: Webrebel 1: HTML, CSS & JavaScript</p>
        </div>
        <div className="border"></div>
        <h3>Pracovné skúsenosti</h3>
        <div className="grid_35_65">
          <p className="grid1_1 bold">1/2020 - 9/2020</p>
          <p className="grid2_1">Staffline universe, Bristol</p>
          <p className="grid2_3">
            Pracovná pozícia: pracovník v Tesco Distribution Centre
          </p>
        </div>
        <div className="border"></div>
        <h3>Znalosti</h3>
        <div className="grid_15_45_40">
          <span className="grid1_1">
            <FaLanguage size="1.8em" />
          </span>
          <p className="grid2_1">Anglický jazyk</p>
          <p className="grid3_1"> - B1</p>
        </div>
        <div className="grid_15_45_40">
          <span className="grid1_1">
            <DiHtml5 size="1.8em" />
          </span>
          <p className="grid2_1">HTML</p>
          <p className="grid3_1"> - pokročilý</p>
        </div>
        <div className="grid_15_45_40">
          <span className="grid1_1">
            <DiCss3 size="1.8em" />
          </span>
          <p className="grid2_1">CSS</p>
          <p className="grid3_1"> - pokročilý</p>
        </div>
        <div className="grid_15_45_40">
          <span className="grid1_1">
            <DiSass size="1.8em" />
          </span>
          <p className="grid2_1">SASS</p>
          <p className="grid3_1"> - pokročilý</p>
        </div>
        <div className="grid_15_45_40">
          <span className="grid1_1">
            <DiJavascript1 size="1.8em" />
          </span>
          <p className="grid2_1">JavaScript</p>
          <p className="grid3_1"> - pokročilý</p>
        </div>
        <div className="border"></div>
        <h3>Osobné údaje</h3>
        <div className="grid_20_80">
          <span className="grid1_1">
            <BsFillPersonFill size="1.8em" />
          </span>
          <p className="grid2_1">Ladislav Chvastaš</p>
        </div>
        <div className="grid_20_80">
          <span className="grid1_1">
            <GrMail size="1.8em" />
          </span>
          <a className="grid1_2" href="mailto:ladislavchvastas@gmail.com">
            ladislavchvastas@gmail.com
          </a>
        </div>
        <div className="grid_20_80">
          <span className="grid1_1">
            <BsFillTelephoneFill size="1.8em" />
          </span>
          <a className="grid1_2" href="tel:+421 950 826 689">
            +421 950 826 689
          </a>
        </div>
        <div className="grid_20_80">
          <span className="grid1_1">
            <FaMapMarkerAlt size="1.8em" />
          </span>
          <p className="grid2_1">Vyšný Hrabovec 2, 09034</p>
        </div>
        <div className="grid_20_80">
          <span className="grid1_1">
            <BsFillCalendarWeekFill size="1.8em" />
          </span>
          <p className="grid2_1">14.8.1997</p>
        </div>
        <div className="border"></div>
        <h3>Záujmy</h3>
        <div className="container_hobbies">
          <div className="grid_25_25_25_25">
            <span className="grid1_1">
              <IoBarbellOutline size="1.8em" />
            </span>
            <p className="grid1_2">Fitness</p>
            <span className="grid3_1">
              <BiRun size="1.8em" />
            </span>
            <p className="grid4_1">Beh</p>
          </div>
          <div className="grid_25_25_25_25">
            <span className="grid1_1">
              <ImBooks size="1.8em" />
            </span>
            <p className="grid2_1">Knihy</p>
            <span className="grid3_1">
              <BiJoystickAlt size="1.8em" />
            </span>
            <p className="grid4_2">Videohry</p>
          </div>
        </div>
        {/* <div className="border">
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
