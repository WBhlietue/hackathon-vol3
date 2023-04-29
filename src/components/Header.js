import "../css/Header.css";
import { Link } from "react-router-dom";

export function Header() {
  return (
    <div className="headerMain">
      <div className="headerMainLogoParent">
        <div className="headerMainLogo">
          <img
            src={require("../assets/images/logo.png")}
            width="100%"
            height="100%"
          ></img>
        </div>
        <div className="headerMainLogoText">Hackathon-Vol3</div>
      </div>
      <ul className="headerMainNav">
        <li>
          <Link className="headerMainNavLink" to={"/"}>
            <div>HI</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink" to={"/Test"}>
            <div>HI</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink" to={"/Test"}>
            <div>HI</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink" to={"/profile"}>
            <div>HI</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink" to={"/Test"}>
            <div>HI</div>
          </Link>
        </li>
      </ul>
    </div>
  );
}
