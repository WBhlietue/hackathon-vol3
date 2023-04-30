import "../css/Profile.css"
import logo from "../css/hoho.png"
import check from '../css/check.png'

export function Profile() {
    return (

        <div className='ProfileContain'>
            <div className='prohead'>
                <div className='profilesection'>
                    <img src={logo}></img>
                </div>
                <div className='LeftContainer'>
                    <h2 className="headerrr">Ерөнхий мэдээлэл&nbsp; &nbsp; &nbsp; </h2>
                    <ul>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Овог">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Нэр">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Утасны дугаар">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="И-Мэйл">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Яаралтай үед холбогдох">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Боловсрол">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Гэрийн хаяг">
                            </input>
                        </li>
                    </ul>
                    <button className="edithBtn">Засварлах</button>
                </div>
                <div className='RightContainer'>
                    <h2 className="headerrr">Нэмэлт мэдээлэл&nbsp; &nbsp; &nbsp; </h2>
                    <ul>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Дэлнэрэнгүй мэдээлэл">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox" placeholder="Чадвар">
                            </input>
                        </li>

                    </ul>
                    <button className="edithBtn">Засварлах</button>
                </div>
            </div>
        </div>

    );
}
