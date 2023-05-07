import "../css/Header.css";
import { a } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";
import { useEffect, useState } from "react";
import { GetData, IsLogin, SetData } from "./Storage";

export function Header() {
  const [isLogin, setIsLogin] = useState(GetData("isLogin", 0));
  console.log(isLogin);
  console.log(localStorage.getItem("isLogin"));
  useEffect(() => {
    if (isLogin == 0) {
      localStorage.setItem("isLogin", 0);
    }
  }, [isLogin]);
  const [menuHide, setMenuHide] = useState(0);
  return (
    <div className="headerMain">
      <div className="headerMainLogoParent">
        <div
          className="headerMainLogo"
          onClick={() => {
            window.location.href = "index.html";
          }}
        >
          <img
            src={require("../assets/images/rocket.png")}
            width="100%"
            height="100%"
          ></img>
        </div>
        <div
          onClick={() => {
            window.location.href = "index.html";
          }}
          className="headerMainLogoText"
        >
          Apollo
        </div>
      </div>
      <div className="headerMainNav">
        <ul style={{ display: menuHide ? "none" : "flex" }}>
          <li>
            <a
              className="headerMainNavLink headerMainUnderLineAni"
              href={"index.html"}
            >
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
          style={{ transform: "rotateZ(" + (menuHide ? 90 : -90) + "deg)" }}
          onClick={() => {
            setMenuHide((i) => !i);
          }}
        >
          &#8250;
        </div>
      </div>
      <div className="headerMainRight">
        <div
          onClick={() => {
            window.location.href =
              " index.html" + (isLogin == 1 ? "?page=Profile" : "?page=Login");
          }}
          className={
            "headerMainLogin " + (isLogin == 1 ? "" : "headerMainUnderLineAni")
          }
        >
          {isLogin == 1 ? (
            <div className="headerMainUser">
              {" "}
              <img
                width="70%"
                src={require("../assets/images/userWhite.png")}
              />
            </div>
          ) : (
            "Нэвтрэх"
          )}
        </div>
        <div
          onClick={() => {
            window.location.href =
              "index.html?page=" + (isLogin == 1 ? "PlaceWork" : "Register");
          }}
          href={"index.html?page=PlaceWork"}
          className="headerMainRegister"
        >
          <div>{isLogin == 1 ? "Aжил байршуулах" : "Бүртгүүлэх"}</div>
          <div>&#8250;</div>
        </div>
        <a href={"index.html?page=Wallet"} className="headerMainLogin ">
          {isLogin == 1 ? (
            <div className="headerMainUser">
              {" "}
              <img width="70%" src={require("../assets/images/wallet.png")} />
            </div>
          ) : (
            ""
          )}
        </a>

        <div
          onClick={() => {
            setIsLogin(0);
            window.location.href = "index.html";
          }}
          className="headerMainLogin "
        >
          {isLogin == 1 ? (
            <div className="headerMainUser">
              {" "}
              <img width="70%" src={require("../assets/images/logout.png")} />
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
