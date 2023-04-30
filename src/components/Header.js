import "../css/Header.css";
import { Link } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";
import { useState } from "react";

export function Header() {
  const [menuHide, setMenuHide] = useState(false);
  return (
    <div className="headerMain">
      <div className="headerMainLogoParent">
        <div className="headerMainLogo">
          <GetTestLogo />
        </div>
        <div className="headerMainLogoText">Apollo</div>
      </div>
      <div className="headerMainNav">
        <ul style={{display:menuHide? "none":"flex"}}>
          <li>
            <Link className="headerMainNavLink headerMainUnderLineAni" to={"/"}>
              <div>Нүүр</div>
            </Link>
          </li>
          <li>
            <Link
              className="headerMainNavLink headerMainUnderLineAni"
              to={"/About"}
            >
              <div>Бидний тухай</div>
            </Link>
          </li>
          <li>
            <Link
              className="headerMainNavLink headerMainUnderLineAni"
              to={"/FAQ"}
            >
              <div>Нийтлэг асуулт</div>
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
        <Link to={"profile"} className="headerMainLogin headerMainUnderLineAni">Хэрэглэгч</Link>
        <Link to={"placeWork"} className="headerMainRegister">
        <div className="headerMainRegister">
          <div>Aжил байршуулах</div>
          <div>&#8250;</div>
          </div>
        </Link>
      </div>
    </div>
  );
}
