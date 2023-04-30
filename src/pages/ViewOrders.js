import { ViewOrderCard } from "../components/ViewOrderCard";
import data from "../json/viewOrderCardTestData.json";
export function ViewOrders() {
  return (
    <div>
      <ViewOrderCard  data={data[0]}/>
      <ViewOrderCard  data={data[1]}/>
      <ViewOrderCard  data={data[2]}/>
    </div>
  );
}
