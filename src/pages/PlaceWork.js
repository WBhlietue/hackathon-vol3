import "../css/PlaceWork.css"
export function PlaceWork() {
  return (
    <div className="placeWorkMain">
      <div className="placeWorkMainInner haku-from-top">
        <div className ="placeWorkMainTitle">Ажлын захиалга оруулах</div>
        <div className="placeWorkMainBody">
          <div className="placeWorkMainForm">
            <div className="placeWorkMainText" >Ажлын нэр</div>
            <input className="placeWorkMainInput"/>
            <div className="placeWorkMainText" >Хугацаа</div>
            <input className="placeWorkMainInput"/>
            <div className="placeWorkMainText"> Байршил</div>
            <input className="placeWorkMainInput"/>
            <div className="placeWorkMainText" >Нэмэлт мэдээлэл</div>
            <input className="placeWorkMainInput"/>
            <div className="placeWorkMainCheck">
                <input type="checkbox"></input>
                <div>Үйлчилгээний нөхцөлтэй танилцах</div>
            </div>
          </div>
          <div>
            <div>Шаардлагатай тохиолдолд зураг нэмэх</div>
            <input type="file"></input>
          </div>
        </div>
        <div className="placeWorkMainBottom" onClick={() => {
            alert("add")
          }}>
          <div>Баталгаажуулах</div>
        </div>
      </div>
    </div>
  );
}
