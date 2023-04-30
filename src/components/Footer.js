import "../css/Footer.css";

export function Footer() {
  return (
    <div className="footerMain">
      <hr></hr>
      <div className="footerItems">
        <div className="footerDataParent">
          <div className="footerDataLeft">
            <h1 className="headeredede"> 
            Apollo 11
            </h1>
            <ul className="footerDataLeftList">
              <li className="footerDataLeftIcon">
                <a>
                  <p>Ажлын цаг 10:00 - 18:00</p>
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  <p>(Үдийн цай 13:00 - 14:00)</p>
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  Улаанбаатар хот, Баянзүрх дүүрэг, 41-р хороо, Ромео Жульетта хотхон
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  Утас: *********
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  И-мейл: *********@apollo.mn
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                </a>
              </li>
            </ul>
          </div>
          <div className="footerDataLine"></div>
          <div className="footerDataRight">
            <ul className="footerDataRightList">
              <li className="footerDataRightIcon">
                <button className="button">
                  APP STORE
                </button>
              </li>
              <li className="footerDataRightIcon">
                <button className="button">
                  PLAY STORE
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="footerEndText">
          Hackathon-Vol3 Apollo11, Copyright @ 2023
        </div>
      </div>
    </div>
  );
}
