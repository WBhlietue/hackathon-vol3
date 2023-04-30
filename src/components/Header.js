import "../css/Header.css";
import { Link } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";
import { useState } from "react";

export function Header() {
  const [menuHide, setMenuHide] = useState(true);
  return (
    <div className="headerMain">
      <div className="headerMainLogoParent">
        <div className="headerMainLogo">
          <GetTestLogo />
        </div>
        <div className="headerMainLogoText">Apollo</div>
      </div>
      <div className="headerMainNav">
        <ul style={{display:menuHide? "none":"block"}}>
          <li>
            <Link className="headerMainNavLink headerMainUnderLineAni" to={"/"}>
              <div>Нүүр</div>
            </Link>
          </li>
          <li>
            <Link
              className="headerMainNavLink headerMainUnderLineAni"
              to={"/orderList"}
            >
              <div>Бидний тухай</div>
            </Link>
          </li>
          <li>
            <Link
              className="headerMainNavLink headerMainUnderLineAni"
              to={"/Test"}
            >
              <div>Зөвөлгөө</div>
            </Link>
          </li>
        </ul>
        <div
          className="headerMainNavBtn"
          style={{transform:"rotateZ("+(menuHide? 90:-90)+"deg)"}}
          onClick={() => {
            setMenuHide((i) => !i);
          }}
        >
          &#8250;
        </div>
      </div>
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
