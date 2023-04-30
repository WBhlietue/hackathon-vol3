import "../css/Payment.css"
function Payment(){
    return(
        <>
            <div className="container-element">
                <h2>Дансны Мэдээлэл</h2>
                <div className="bank-acc">
                    <label>Дансы дугаар</label> 
                    <input type="text" placeholder="Дансы дугаар"/>
                    <label>Дансы Үлдэгдэл</label> 
                    <input type="text" placeholder="Дансы дугаар"/>
                 </div>
            </div>
        </>
    );
}
export default Payment;