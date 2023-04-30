import { T } from "../components/server/Homo";

export default function Test1(){
    var t= [];
    for(let i = 0; i < 50; i++){
        t.push(<div>HI <br/></div>)
    }
    T()
    return <div>{t}</div>
}