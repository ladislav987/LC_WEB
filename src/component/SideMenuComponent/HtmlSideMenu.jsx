import { NavLink } from "react-router-dom";

const HtmlSideMenu = (props) => {

  const handleClick = () => {
    if (window.innerWidth < 700) {
      props.onClickToMenu();
    }
  };
  return (
    <>
      <ul>
        <li>
          <NavLink onClick={handleClick} to="details">
            &#60;details&gt;
          </NavLink>
        </li>
        <li>
          <NavLink onClick={handleClick} to="summary">
            &#60;summary&gt;
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default HtmlSideMenu;
