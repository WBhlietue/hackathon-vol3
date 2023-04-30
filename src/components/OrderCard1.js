import { useState } from "react";
import "../css/OrderCard1.css";
import { GetTestLogo } from "./GetTestLogo";


export function OrderCard1(props) {
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
    alert("send")
  }

  return (
    <div className="orderCard1Main haku-from-left" >
      <div className="orderCard1TopParent">
        <div className="orderCard1TopTime">
          <div className="orderCard1TopTimeIcon">
            <GetTestLogo />
          </div>
          <div className="orderCard1TopTimeText" style={out?{color:"red"}:{}}>{time}&nbsp;</div>
          <div className="orderCard1TopTimeText2">{out ? "" : "to you"}</div>
        </div>
        <div className="orderCard1TopPrice">{props.data.price} ₮</div>
      </div>
      <div className="orderCard1PlaceData">
        <div className="orderCard1PlaceDataIcon">
          <GetTestLogo />
        </div>
        <div className="orderCard1PlaceDataBody">
          <div className="orderCard1PlaceDataPlace">{props.data.from}</div>
          <div className="orderCard1PlaceDataDescription">
            {props.data.description}
          </div>
        </div>
      </div>
      <div className="orderCard1PlaceData">
        <div className="orderCard1PlaceDataIcon">
          <GetTestLogo />
        </div>
        <div className="orderCard1PlaceDataBody">
          <div className="orderCard1PlaceDataPlace">{props.data.to}</div>
          <div className="orderCard1PlaceDataDescription">
            Distance between two points: <span className="orderCard1PlaceDistanceText">{props.data.distance} </span>
          </div>
        </div>
      </div>
      <div className="orderCard1BottomInfo">
        <div className="orderCard1Type">Type: Hurgelt</div>
        {ordered? <div className="orderCard1Contant">
            <div className="orderCard1ContantIcon"><GetTestLogo/></div>
            <div className="orderCard1ContantText">{props.data.customerPhone}</div>
        </div>:""}
        <div
          className={"orderCard1Btn" + (ordered?"2":"")} 
          onClick={() => {
            ordered?NoticeToCustomer():
            OnOrderClick();
          }}
        >
          {ordered ? "Bara avsnaa medegdeh" : "Get Order"}
        </div>
      </div>
    </div>
  );
}
