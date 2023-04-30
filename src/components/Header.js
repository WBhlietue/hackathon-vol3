import "../css/Header.css";
import { Link } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";

export function Header() {
  return (
    <div className="headerMain">
      <div className="headerMainLogoParent">
        <div className="headerMainLogo">
          <GetTestLogo />
        </div>
        <div className="headerMainLogoText">Apollo</div>
      </div>
      <ul className="headerMainNav">
        <li>
          <Link className="headerMainNavLink headerMainUnderLineAni" to={"/"}>
            <div>Нүүр</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink headerMainUnderLineAni" to={"/orderList"}>
            <div>Бидний тухай</div>
          </Link>
        </li>
        <li>
          <Link className="headerMainNavLink headerMainUnderLineAni" to={"/Test"}>
            <div>Зөвөлгөө</div>
          </Link>
        </li>
      </ul>
      <div className="headerMainRight">
        <div className="headerMainLogin headerMainUnderLineAni">Нэвтрэх</div>
        <div className="headerMainRegister">
          <div>Aжил байршуулах</div>
          <div>&#8250;</div>
        </div>
      </div>
    </div>
  );
}
