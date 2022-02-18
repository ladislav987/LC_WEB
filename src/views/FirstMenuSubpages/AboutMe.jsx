import React from 'react'

import HomeButton from '../../component/HomeButton';
import Svg from '../../component/Svg';
import ThemeButton from '../../component/ThemeButton';

const AboutMe = () => {

  return (
    <>
      <header>
        <nav className="hornaNav">
          <Svg />
          <HomeButton/>
          <ThemeButton />
        </nav>
      </header>
      About Me !
    </>
  );
}

export default AboutMe