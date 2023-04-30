import { useState } from "react";
import "../css/ViewOrderCard.css";
import { Link } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";

const showSkillNum = 2;

export function ViewOrderCard(props) {
  const skills = props.data.skills;
  const skillsList = [];
  const [inputPrice, setInputPrice] = useState(false);
  for (let i = 0; i < skills.length && i < showSkillNum; i++) {
    skillsList.push(<li>{skills[i]}</li>);
  }
  if (skills.length > showSkillNum) {
    skillsList.push(<li>...</li>);
  }
  function OnOrderClick() {
    setInputPrice(true);
  }

  return (
    <div className="viewOrderCardMain haku-from-left">
      <div className="viewOrderCardTopParent">
        <div className="viewOrderCardTopDatas">
          <div className="viewOrderCardTopIcon">
            <GetTestLogo />
          </div>
          <div className="viewOrderCardTopOrderNum">{props.data.id}</div>
        </div>
      </div>
      <div className="viewOrderCardCenterParent">
        <div className="viewOrderCardCenterName">
          <div className="viewOrderCardCenterNameText">{props.data.name}</div>
          <div className="viewOrderCardCenterType">{props.data.type}</div>
        </div>
        <div className="viewOrderCardCenterDescrition">
          {props.data.description}
        </div>
        <div className="viewOrderCardCenterSkill">
          <div className="viewOrderCardCenterSkillText">
            Хэрэгтэй чадварууд: {skills.length == 0 ? "байхгүй" : ""}
          </div>
          <ul>{skillsList}</ul>
        </div>
      </div>
      <div className="viewOrderCardBottomParent">
        <div className="viewOrderCardBottomRequest">
          <div className="viewOrderCardTopDate">{props.data.date}</div>
        </div>
        <a className="viewOrderCardBtn" href={"index.html?page=AddOrderRequest&id=" + props.data.id}>
          Үнийн санал оруулах
        </a>
      </div>
    </div>
  );
}
