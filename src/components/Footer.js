import "../css/Footer.css";
import { GetTestLogo } from "./GetTestLogo";

export function Footer() {
  return (
    <div className="footerMain">
      <div className="footerItems">
        <div className="footerDataParent">
          <div className="footerDataLeft">
            <ul className="footerDataLeftList">
              <li className="footerDataLeftIcon">
                <a>
                  <GetTestLogo />
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  <GetTestLogo />
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  <GetTestLogo />
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  <GetTestLogo />
                </a>
              </li>
              <li className="footerDataLeftIcon">
                <a>
                  <GetTestLogo />
                </a>
              </li>
            </ul>
            <div>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </div>
          </div>
          <div className="footerDataLine"></div>
          <div className="footerDataRight">
            <ul className="footerDataRightList">
              <li className="footerDataRightIcon">
                <a>123</a>
              </li>
              <li className="footerDataRightIcon">
                <a>123</a>
              </li>
              <li className="footerDataRightIcon">
                <a>123</a>
              </li>
              <li className="footerDataRightIcon">
                <a>123</a>
              </li>
              <li className="footerDataRightIcon">
                <a>123</a>
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
