export default function Test1(){
    var t= [];
    for(let i = 0; i < 50; i++){
        t.push(<div>HI <br/></div>)
    }
    return <div>{t}</div>
}