import "../css/Header.css";
import { a } from "react-router-dom";
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
            <a className="headerMainNavLink headerMainUnderLineAni" href={"index.html?page=Home"}>
              <div>Нүүр</div>
            </a>
          </li>
          <li>
            <a
              className="headerMainNavLink headerMainUnderLineAni"
              href={"index.html?page=About"}
            >
              <div>Бидний тухай</div>
            </a>
          </li>
          <li>
            <a
              className="headerMainNavLink headerMainUnderLineAni"
              href={"index.html?page=FAQ"}
            >
              <div>Нийтлэг асуулт</div>
            </a>
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
        <a href={"index.html?page=Profile"} className="headerMainLogin headerMainUnderLineAni">Хэрэглэгч</a>
        <a href={"index.html?page=PlaceWork"} className="headerMainRegister">
          <div>Aжил байршуулах</div>
          <div>&#8250;</div>
        </a>
      </div>
    </div>
  );
}
