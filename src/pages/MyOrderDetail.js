import { useParams } from "react-router-dom";
import { GetTestLogo } from "../components/GetTestLogo";
import data from "../json/myOrderCardTestData.json";
import "../css/OrderDetail.css";
import { OrderSubmitedWorkerCard } from "../components/OrderSubmitedWorkerCard";
export function MyOrderDetail() {
  const orderID = new URLSearchParams(window.location.search).get("id");
  let d = "5";
  for (let i of data) {
    if (i.id == orderID) {
      d = i;
      break;
    }
  }
  const skills = d.skills;
  const skillsList = [];
  for (let i = 0; i < skills.length; i++) {
    skillsList.push(<li>{skills[i]}</li>);
  }
  const submittedWorkers = [];
  for (let i of d.requests) {
    submittedWorkers.push(<OrderSubmitedWorkerCard data={i} />);
  }
  return (
    <div className="orderDetailMain">
      <div className="orderDetailRight haku-from-left">
        <div className="orderDetailRightMain ">
          <div className="orderDetailRightTopParent">
            <div className="orderDetailRightTopDatas">
              <div className="orderDetailRightTopIcon">
                <GetTestLogo />
              </div>
              <div className="orderDetailRightTopOrderNum">{d.id}</div>
            </div>
            <div className="orderDetailRightTopDate">{d.date}</div>
          </div>
          <div className="orderDetailRightCenterParent">
            <div className="orderDetailRightCenterName">
              <div className="orderDetailRightCenterNameText">{d.name}</div>
              <div className="orderDetailRightCenterType">{d.type}</div>
            </div>
            <div className="orderDetailRightCenterDescrition">
              {d.description}
            </div>
            <div className="orderDetailRightCenterSkill">
              <div className="orderDetailRightCenterSkillText">
              Хэрэгтэй чадварууд: {skills.length == 0 ? "байхгүй" : ""}
              </div>
              <ul>{skillsList}</ul>
            </div>
          </div>
        </div>
      </div>
      <div className="orderDetailLine"></div>
      <div className="orderDetailLeft">
      {submittedWorkers}
      </div>
    </div>
  );
}
