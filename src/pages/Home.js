// import { Link } from "react-router-dom";
import { Link } from "../components/Link";
import { GetData } from "../components/Storage";
import "../css/Home.css";

export function Home() {
  return (
    <div>
      <div className="homeMainPage">
        <div className="homeMainPageCenter">
          <div className="homeMainPagePersonParent haku-from-scale">
            <div className="homeMainPagePerson"></div>
          </div>
          <div className="homeMainPageText1 haku-from-scale">
            Тавтай морилно уу!
          </div>
          <br></br>
          <div className="homeMainPageText1 haku-from-top">
            Та юу сонирхож байна?
          </div>
          <a  href={"index.html?page=" + (GetData("isLogin", 0) == 1 ? "ViewOrders" : "Register") } className="homeMainPageBtn1 haku-from-right">
            <span className="homeMainPageText2">Би ажил хайж байна</span>
          </a>
          <a href={"index.html?page=" + (GetData("isLogin", 0) == 1 ? "MyOrder" : "Register" )} className="homeMainPageBtn1 haku-from-left">
            <span className="homeMainPageText2">Би ажилтан хайж байна</span>
          </a>
          <a href="index.html?page=About" className="homeMainPageBtn1 haku-from-right">
            <span className="homeMainPageText2">Зүгээр л сонирхож байна</span>
          </a>
          <div className="homeMainPageBtn2 haku-from-left">
            <span className="homeMainPageText2">Үргэлжлүүлэх</span>
          </div>
        </div>
      </div>
      <div className="homeSecondPage">
        <div className="homeSecondPageLittleTitle haku-from-top">
          <div className="homeSecondPageLittleTitleStar"></div>
          <div className="homeSecondPageLittleTitleText">
            Монголын #1 ажлын сайт
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="homeSecondPageSet1">
          <div className="homeSecondPageSet1Title haku-from-left">
            Эрэлт ихтэй үйлчилгээнүүд
          </div>
          <div className="homeSecondPageSet1ItemList">
            <div
              className="homeSecondPageSet1Item haku-from-bottom"
              haku-ani-delay={100}
            >
              <div className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData1"></div>
              <div className="homeSecondPageSet1ItemText">Тавилга угсралт</div>
            </div>
            <div
              className="homeSecondPageSet1Item haku-from-bottom"
              haku-ani-delay={300}
            >
              <div className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData2"></div>
              <div className="homeSecondPageSet1ItemText">Гэр цэвэрлэгээ</div>
            </div>
            <div
              className="homeSecondPageSet1Item haku-from-bottom"
              haku-ani-delay={500}
            >
              <div className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData3"></div>
              <div className="homeSecondPageSet1ItemText">Хүнд юм өргөх</div>
            </div>
            <div
              className="homeSecondPageSet1Item haku-from-bottom"
              haku-ani-delay={700}
            >
              <div className="homeSecondPageSet1ItemImg homeSecondPageSet1ItemImgData4"></div>
              <div className="homeSecondPageSet1ItemText">
                Цахилгааны тусламж
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="homeThirdPageMain haku-from-bottom">
          <div className="homeThirdPageMainText haku-from-left">
            Өдөр тутмын амьдрал илүү хялбар болсон банк.
            <br />
            Амьдрал завгүй болох үед та үүнийг ганцаараа шийдэх шаардлагагүй.
            <br />
            Дуртай зүйлдээ цаг зав гаргуулалгүй буцаан аваарай.
            <br />
            &nbsp;&nbsp;&#10047;&nbsp;&nbsp;Tasker-ээ шүүмж, ур чадвар, үнээр нь
            сонго.
            <br />
            &nbsp;&nbsp;&#10047;&nbsp;&nbsp;Энэ нь танд ямар үед ажиллахаа яг
            өнөөдрөөс эхлэн төлөвлө.
            <br />
            &nbsp;&nbsp;&#10047;&nbsp;&nbsp;Нэг платформоор чатлах, төлбөр хийх,
            мөнгө өгөх, хянах.
            <br />
          </div>
          <div className="homeThirdPageMainImg haku-from-right"></div>
        </div>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <div className="homeSecondPageSet1">
          <div className="homeSecondPageSet1Title">Онцлох ажилчид</div>
          <div className="homeSecondPageSet2ItemList">
            <div
              className="homeSecondPageSet2Item haku-from-bottom"
              haku-ani-delay={100}
            >
              <div className="homeSecondPageSet2Item1">
                <div className="homeSecondPageSet2ItemImg homeSecondPageSet2ItemImgData1"></div>
                Бат
              </div>
              <hr />
              <div className="homeSecondPageSet2Item2">
                Чадвар
                
                <br />
                -Шал гоё угаадаг
                <br />
                -Хурдан гүйдэг
                <br />
                -Хоол хийх
                <br />
              </div>
              <hr />
              <div className="homeSecondPageSet2Item3">
                Танилцуулга
                <br />
                Би таньд гоё гоё юмнууд хйиж өгж чадна
              </div>

             </div>
            <div
              className="homeSecondPageSet2Item haku-from-bottom"
              haku-ani-delay={300}
            >
              <div className="homeSecondPageSet2Item1">
                <div className="homeSecondPageSet2ItemImg homeSecondPageSet2ItemImgData2"></div>
                Дорж
              </div>
              <hr />
              <div className="homeSecondPageSet2Item2">
                Чадвар
                
                <br />
                -Шал гоё угаадаг
                <br />
                -Хурдан гүйдэг
                <br />
                -Хоол хийх
                <br />
              </div>
              <hr />
              <div className="homeSecondPageSet2Item3">
                Танилцуулга
                <br />
                Би таньд гоё гоё юмнууд хйиж өгж чадна
              </div>

            </div>
            <div
              className="homeSecondPageSet2Item haku-from-bottom"
              haku-ani-delay={500}
            >
              <div className="homeSecondPageSet2Item1">
                <div className="homeSecondPageSet2ItemImg homeSecondPageSet2ItemImgData3"></div>
                Өсөхөө
              </div>
              <hr />
              <div className="homeSecondPageSet2Item2">
                Чадвар
                
                <br />
                -Шал гоё угаадаг
                <br />
                -Хурдан гүйдэг
                <br />
                -Хоол хийх
                <br />
              </div>
              <hr />
              <div className="homeSecondPageSet2Item3">
                Танилцуулга
                <br />
                Би таньд гоё гоё юмнууд хйиж өгж чадна
              </div>

             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
