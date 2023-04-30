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
                    <h2 className="headerrr">Ерөнхий мэдээлэл</h2>
                    <ul>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                    </ul>
                    <button className="edithBtn">Засварлах</button>
                </div>
                <div className='RightContainer'>
                    <h2 className="headerrr">Нэмэлт мэдээлэл</h2>
                    <ul>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>
                        <li>
                            <img src={check}></img>
                            <input type="textbox">
                            </input>
                        </li>

                    </ul>
                    <button className="edithBtn">Засварлах</button>
                </div>
            </div>
        </div>

    );
}
