
import { getDatabase, ref, child, get, set } from "firebase/database";
let data1 = {
    firstName: "Haku",
    lastName: "Ran",
    register: "123123123",
    phone: "98765432",
    email: "haku@gmail.com",
    address: "in the earth",
    pass: "12345678",
};
let data2 = {
    firstName: "Haku",
    lastName: "Ran",
    register: "123123123",
    phone: "98765432",
    email: "haku@gmail.com",
    phonePro: "99887766",
    degree: "buren dund",
    address: "in the earth",
    pass: "12345678",
};


let data3 = {
    id: "002",
    date: "2023.04.30",
    name: "Нохой салхилуулах",
    type: "Биеийн хөдөлмөр",
    description: "Ажилтай байгаа тул нохой салхилуулах хүн хэрэгтэй байна.",
    where: "Баянзүрх дүүрэг NationalPark town 502-р орц",
    time: "1цаг",
    skills: ["Царайлаг байх", "Найз залуугүй байх", "Өндөр байх"],
    requests: [
        {
            userID: "A001",
            userName: "Э.Мөнхжин",
            price: 5000,
            rate: "4.5",
            completedNum: "500",
        },
        {
            userID: "A002",
            userName: "Э.Мөнхжин",
            price: 3000,
            rate: "5",
            completedNum: "4",
        },
    ],
};

let data4 = {
    name: "Naiz ohintoi boloh",
    time: "1 days",
    location: "my house",
    plus: "i need meet for my mom",
    picture: ""
}

export function RegisterGive(fname, lname, reg, phone, mail, add, pass) {

    setDoc(doc(db, "data", "Customer/Customer_info/" + customerID), {
        firstname: fname,
        lastname: lname,
        register: reg,
        phone: phone,
        email: mail,
        address: add,
        password: pass
    }).then(res => {

    });
}

export function RegisterGet(fname, lname, reg, phone, mail, add, pass, phonepro, degree) {
    const db = getDatabase();
    set(ref(db, 'User/ZahialgaID/Zahialga_medeelel/' + zahialgaID), {
        firstname: fname,
        lastname: lname,
        register: reg,
        phone: phone,
        email: mail,
        phonePro: phonepro,
        degree: degree,
        address: add,
        password: pass
    });
}
export function ChangeData(fname, lname, reg, phone, mail, add, pass, phonepro, degree) {
    const db = getDatabase();
    set(ref(db, 'User/Ajiltan/' + userID), {
        firstname: fname,
        lastname: lname,
        register: reg,
        phone: phone,
        email: mail,
        phonePro: phonepro,
        degree: degree,
        address: add,
        password: pass
    });
}



export function GetMyOrders(id, date, name, type, desc, where, time, [skill], [req]) {
    setDoc(doc(db, "data", 'User/ZahialgaID/Zahialga_medeelel/' + MyOrderID), {
        id: id,
        date: date,
        name: name,
        type: type,
        description: desc,
        where: where,
        time: time,
        skills: skill,
        request: req
    }).then(res => {

    });
} // return data3's list
export function ViewOrders() {
    const dbRef = ref(getDatabase());
    get(child(dbRef, 'User/ZahialgaID/Zahialga_medeelel/${MyOrderID}')).then((snapshot) => {
        if (snapshot.exists()) {
            console.log(snapshot.val());
        } else {
            console.log("No data available");
        }
    }).catch((error) => {
        console.log(error);
    })
} // return data3's list
export function ToGiveRequest(price, orderID) {
    setDoc(doc(db, "data", 'User/ZahialgaID/Zahialga_medeelel/' + reqID), {
        price: price,
        id: orderID
    }).then(res => {

    });
} // add request
export function SelectRequest(orderID, userID) {
    setDoc(doc(db, "data", 'User/ZahialgaID/Zahialga_medeelel/' + selectID), {
        orderID: orderID,
        user: userID
    }).then(res => {

    });
} // select request
export function AddOrder(name, time, location, plus, picture) {
    setDoc(doc(db, 'User/ZahialgaID/Zahialga_medeelel/' + addID), {

        name: name,
        time: time,
        location: location,
        plus: plus,
        picture: picture
    }).then(res => {

    });
} // use data4
export function RemoveMyOrder(price, orderID) { 
    const docRef = doc(db, 'User/ZahialgaID/Zahialga_medeelel/addID');
    deleteDoc(docRef).then(()=>{
        console.log("deleted");
    }).catch(error=>{
        console.log(error);
    })
} // ug orderiin minii requestiig ustgah