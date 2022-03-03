import {NavLink } from "react-router-dom";

const HtmlMenu = (props) => {
  const handleClick = (event) => {
    props.onClickToMenu();
  }
  return (
    <div>
      <ul>
        <li>
          <NavLink onClick={handleClick} to="details">&#60;details&gt;</NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="summary">&#60;summary&gt;</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default HtmlMenu;
