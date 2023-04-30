import { OrderCard1 } from "../components/OrderCard1";
import { OrderCard2 } from "../components/OrderCard2";

import data from "../json/orderCard1TestData.json";
import data2 from "../json/orderCard2TestData.json";



export function GetOrderList() {
  return (
    <div>
      <OrderCard1 data={data[0]} />
      <OrderCard1 data={data[1]} />
      <OrderCard1 data={data[2]} />
      <OrderCard1 data={data[3]} />
      <OrderCard1 data={data[3]} ordered/>
      <OrderCard2 data={data2[0]}/>
    </div>
  );
}
