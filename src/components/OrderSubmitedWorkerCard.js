import "../css/OrderSubmittedWorkerCard.css";

export function OrderSubmitedWorkerCard(props) {
  return (
    <div className="orderSubmittedWorkerCardMain haku-from-right">
      <div className="orderSubmittedWorkerCardUserData">
        <div className="orderSubmittedWorkerCardUserName">
          {props.data.userName}
        </div>
        <div className="orderSubmittedWorkerCardUserDetail">
          <div className="orderSubmittedWorkerCardUserDetailText">
            {props.data.userID}
          </div>
          <div className="orderSubmittedWorkerCardUserDetailText">
            {props.data.rate}&#11088;
          </div>
          <div className="orderSubmittedWorkerCardUserDetailText">
            {" "}
            Completed quest: {props.data.completedNum}
          </div>
        </div>
      </div>
      <div className="orderSubmittedWorkerCardPrice">
        <span className="orderSubmittedWorkerCardPriceText">Price: {props.data.price}</span>
        <span className="orderSubmittedWorkerCardPriceText2">This one</span>
      </div>
    </div>
  );
}
