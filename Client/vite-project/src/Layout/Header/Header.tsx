import {  NavLink } from "react-router-dom";


const Header = () => {
  
  return (
    <>
      <header>
        <h1>TERROR MAP APP</h1>
       

        <div className="navlink">
          <NavLink to={"/"} className="nav">
            HOME
          </NavLink>
          <NavLink to={"/byid"} className="nav">
            BYID
          </NavLink>
          <NavLink to={"/Profile"} className="nav">
            AVG BY YEAR
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
