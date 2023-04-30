import { useState } from "react";
import "../css/MyOrderCard.css";
import { Link } from "react-router-dom";
import { GetTestLogo } from "./GetTestLogo";

const showSkillNum = 2;

export function MyOrderCard(props) {
  const skills = props.data.skills;
  const skillsList = [];
  for (let i = 0; i < skills.length && i < showSkillNum; i++) {
    skillsList.push(<li>{skills[i]}</li>);
  }
  if (skills.length > showSkillNum) {
    skillsList.push(<li>...</li>);
  }
  function OnOrderClick() {}

  return (
    <div className="myOrderCardMain haku-from-left">
      <div className="myOrderCardTopParent">
        <div className="myOrderCardTopDatas">
          <div className="myOrderCardTopIcon">
            <GetTestLogo />
          </div>
          <div className="myOrderCardTopOrderNum">{props.data.id}</div>
        </div>
        <div className="myOrderCardTopDate">{props.data.date}</div>
      </div>
      <div className="myOrderCardCenterParent">
        <div className="myOrderCardCenterName">
          <div className="myOrderCardCenterNameText">{props.data.name}</div>
          <div className="myOrderCardCenterType">{props.data.type}</div>
        </div>
        <div className="myOrderCardCenterDescrition">
          {props.data.description}
        </div>
        <div className="myOrderCardCenterSkill">
          <div className="myOrderCardCenterSkillText">
            skills required: {skills.length == 0 ? "none" : ""}
          </div>
          <ul>{skillsList}</ul>
        </div>
      </div>
      <div className="myOrderCardBottomParent">
        <div className="myOrderCardBottomRequest">
          <div className="myOrderCardBottomRequestIcon">
            <GetTestLogo />
          </div>
          <div className="myOrderCardBottomRequestText">
            request: {props.data.requests.length}
          </div>
        </div>
        <Link
          className="myOrderCardBtn"
          to={"/orderDetail/" + props.data.id}
        >
          View Order Detail
        </Link>
      </div>
    </div>
  );
}
