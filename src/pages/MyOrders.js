import { MyOrderCard } from "../components/MyOrderCard";
import data from "../json/myOrderCardTestData.json"

export function MyOrder(){
    return (
        <div>
            <MyOrderCard data={data[0]}/>
            <MyOrderCard data={data[1]}/>
            <MyOrderCard data={data[2]}/>
        </div>
    )
}