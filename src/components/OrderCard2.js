import { useState } from "react";
import "../css/OrderCard2.css";
import { GetTestLogo } from "./GetTestLogo";

export function OrderCard2(props) {
  let t = props.data.startTime.split(":");
  const startTime = parseInt(t[0]) * 60 + parseInt(t[1]);
  t = props.data.time.split(":");
  const timeLimit = parseInt(t[0]) * 60 + parseInt(t[1]) + startTime;
  const [out, setOut] = useState(false);
  const [time, setTime] = useState(GetTime());
  const [ordered, setOrdered] = useState(props.ordered);
  function GetTime() {
    let date = new Date();
    let now = date.getHours() * 60 + date.getMinutes();
    if (now > timeLimit) {
      if (!out) setOut(true);
      return "Time Out";
    } else {
      return timeLimit - now + " minutes";
    }
  }
  let interval = setInterval(() => {
    setTime(GetTime());
    if (out) {
      clearInterval(interval);
    }
  }, 60000);

  function OnOrderClick() {
    setOrdered(true);
  }
  function NoticeToCustomer(){
    alert("NANI")
  }

  return (
    <div className="orderCard2Main haku-from-left">
      <div className="orderCard2TopParent">
        <div className="orderCard2TopTime">
          <div className="orderCard2TopTimeIcon">
            <GetTestLogo />
          </div>
          <div className="orderCard2TopTimeText" style={out?{color:"red"}:{}}>{time}&nbsp;</div>
          <div className="orderCard2TopTimeText2">{out ? "" : "to you"}</div>
        </div>
        <div className="orderCard2TopPrice">{props.data.price} ₮</div>
      </div>
      <div className="orderCard2PlaceData">
        <div className="orderCard2PlaceDataIcon">
          <GetTestLogo />
        </div>
        <div className="orderCard2PlaceDataBody">
          <div className="orderCard2PlaceDataPlace">{props.data.location}</div>
          <div className="orderCard2PlaceDataDescription">
            {props.data.description}
          </div>
        </div>
      </div>
      <div className="orderCard2PlaceData">
        <div className="orderCard2PlaceDataIcon">
          <GetTestLogo />
        </div>
        <div className="orderCard2PlaceDataBody">
          <div className="orderCard2PlaceDataWorkName">{props.data.workName}</div>
          <div className="orderCard2PlaceDataDescription">
            Work time: <span className="orderCard1PlaceDistanceText">{props.data.workTime} </span>
          </div>
        </div>
      </div>
      <div className="orderCard2BottomInfo">
        <div className="orderCard2Type">Type: Tsagiin ajil</div>
        {ordered? <div className="orderCard2Contant">
            <div className="orderCard2ContantIcon"><GetTestLogo/></div>
            <div className="orderCard2ContantText">{props.data.customerPhone}</div>
        </div>:""}
        <div
          className={"orderCard2Btn" + (ordered?"2":"")} 
          onClick={() => {
            ordered?NoticeToCustomer():
            OnOrderClick();
          }}
        >
          {ordered ? "End ymar tovch tavih u" : "Get Order"}
        </div>
      </div>
    </div>
  );
}
