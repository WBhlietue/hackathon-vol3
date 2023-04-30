import "../css/Home.css";

export function Home() {
  return (
    <div>
      <div className="homeMainPage">
        <div className="homeMainPageCenter">
          <div className="homeMainPagePersonParent">
            <div className="homeMainPagePerson"></div>
          </div>
          <div className="homeMainPageText1">Тавтай морилно уу!</div>
          <br></br>
          <div className="homeMainPageText1">Та юу сонирхож байна?</div>
          <div className="homeMainPageBtn1">
            <span className="homeMainPageText2">Би ажил хайж байна</span>
          </div>
          <div className="homeMainPageBtn1">
            <span className="homeMainPageText2">Би ажилтан хайж байна</span>
          </div>
          <div className="homeMainPageBtn1">
            <span className="homeMainPageText2">Зүгээр л сонирхож байна</span>
          </div>
          <div className="homeMainPageBtn2">
            <span className="homeMainPageText2">Үргэлжлүүлэх</span>
          </div>
        </div>
      </div>
      <div className="homeSecondPage">
        <div className="homeSecondPageLittleTitle">
          <div className="homeSecondPageLittleTitleStar"></div>
          <div className="homeSecondPageLittleTitleText">
            Монголын #1 ажлын сайт
          </div>
        </div>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <div className="homeSecondPageSet1">
          <div className="homeSecondPageSet1Title">
            Эрэлт ихтэй үйлчилгээнүүд
          </div>
          <div className="homeSecondPageSet1ItemList">
            <div className="homeSecondPageSet1Item">
              <div
                className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData1"
              ></div>
              <div className="homeSecondPageSet1ItemText">Тавилга угсралт</div>
            </div>
            <div className="homeSecondPageSet1Item">
              <div
                className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData2"
              ></div>
              <div className="homeSecondPageSet1ItemText">Гэр цэвэрлэгээ</div>
            </div>
            <div className="homeSecondPageSet1Item">
              <div
                className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData3"
              ></div>
              <div className="homeSecondPageSet1ItemText">Хүнд юм өргөх</div>
            </div>
            <div className="homeSecondPageSet1Item">
              <div
                className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData4"
              ></div>
              <div className="homeSecondPageSet1ItemText">Цахилгааны тусламж</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
