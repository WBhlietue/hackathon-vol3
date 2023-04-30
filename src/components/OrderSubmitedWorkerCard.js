import "../css/OrderSubmittedWorkerCard.css";

export function OrderSubmitedWorkerCard(props) {
  return (
    <div className="orderSubmittedWorkerCardMain haku-from-right">
      <div className="orderSubmittedWorderIconOutline">
        <div className="orderSubmittedWorderIcon"></div>
      </div>
      <div className="orderSubmittedWorkerCardUserData">
        <div className="orderSubmittedWorkerCardUserName">
          {props.data.userName}
        </div>
        <div className="orderSubmittedWorkerCardUserDetail">
          {/* <div className="orderSubmittedWorkerCardUserDetailText">
            {props.data.userID}
          </div> */}
          <div className="orderSubmittedWorkerCardUserDetailText">
            {props.data.rate}&#11088;
          </div>
          <div className="orderSubmittedWorkerCardUserDetailText">
            {" "}
            Өмнө нь {props.data.completedNum} ажил хийж байсан
          </div>
        </div>
      </div>
      <div className="orderSubmittedWorkerCardPrice" onClick={() => {
        alert("selected")
      }}>
        <span className="orderSubmittedWorkerCardPriceText">
          ₮ {props.data.price}
        </span>
        <span className="orderSubmittedWorkerCardPriceText2">Сонгох</span>
      </div>
    </div>
  );
}
