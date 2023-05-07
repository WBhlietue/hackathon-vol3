import { useEffect, useState } from "react";
import { GetData, SetData } from "../components/Storage";
import "../css/Register.css"
export function Register() {
    const [isLogin, setIsLogin] = useState(GetData("isLogin", 0));
  useEffect(() => {
    if (isLogin == 1) {
      SetData("isLogin", isLogin);
      window.location.href = "index.html";
    }
  }, [isLogin]);
  return (
    <div className="registerMain">
      <div className="registerPanel">
        <div className="registerPanelTitle">Бүртгэл</div>
        <div className="registerPanelForm">
          <div className="registerPanelFormItem">
            <div className="registerPanelFormItemTxt">Овог</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Нэр</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Регистрийн дугаар</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Утасны дугаар</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">И-мэйл</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelCheck">
          <input type={"checkbox"} className="registerPanelCheckBox" />
          <div className="registerPanelCheckTxt">Ажилтны гэрээтэй танилцах</div>
        </div>
          </div>
          <div className="registerPanelFormItem">
            <div className="registerPanelFormItemTxt">Яаралтай үед холбогдох дугаар</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Боловсрол</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Гэрийн хаяг</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Нууц үг үүсгэх</div>
            <input className="registerPanelFormItemInput" />
            <div className="registerPanelFormItemTxt">Нууц үг давтах</div>
            <input className="registerPanelFormItemInput" />
          </div>
        </div>
        
        <div className="registerPanelButton" onClick={() => {
            setIsLogin(1)
            
        }}>Бүртгүүлэх</div>
      </div>
    </div>
  );
}
