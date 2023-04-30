import { ViewOrderCard } from "../components/ViewOrderCard";
import data from "../json/viewOrderCardTestData.json";
import "../css/ViewOrderCard.css"
import { useParams } from "react-router-dom";
export function ViewOrdersAdd(props) {
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
  return (
    <div className="viewOrderCardInputPrice haku-from-top">
      <div className="viewOrderCardInputPriceTitle">Үнийн санал оруулах</div>
      <br/>
      <br/>
      <div className="viewOrderCardInputPriceText">Ажлын нэр: {d.name}</div>
      <div className="viewOrderCardInputPriceText">Хугацаа: {d.time}</div>
      <div className="viewOrderCardInputPriceText">Байршил: {d.where}</div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <div className="viewOrderCardInputPricePrice">
        <div className="viewOrderCardInputPricePriceText">Үнийн санал оруулах</div>
        <input type={"number"} placeholder="₮50000" className="viewOrderCardInputPricePriceImput"></input>
      </div>
      <div className="viewOrderCardInputPriceSend" onClick={() => {
        alert("requested")
      }}>Илгээх</div>
    </div>
  );
}
