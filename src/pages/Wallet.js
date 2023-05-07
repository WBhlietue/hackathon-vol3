import "../css/Wallet.css";

export function Wallet() {
  return (
    <div className="walletMain">
      <div className="walletPanel">
        <div className="walletPanelTitle">Дансны мэдээлэл</div>
        <div className="walletPanelItem">
          <div className="walletPanelTxt">Хэрэглэж болох үлдэгдэл</div>
          <div className="walletPanelData">1000000</div>
          <div className="walletPanelTxt">Хадгалсан үлдэгдэл</div>
          <div className="walletPanelData">120000</div>
        </div>
        <div className="walletPanelBtns">
          <div className="walletBtnsHistory">Түүх</div>
          <div className="walletBtnsAdd">Цэнэглэх</div>
          <div className="walletBtnsExport">Гаргаж авах</div>
        </div>
      </div>
    </div>
  );
}
