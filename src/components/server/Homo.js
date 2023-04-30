import { initializeApp } from "firebase/app";
import { doc, getDoc, getFirestore, setDoc } from "firebase/firestore";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://support.google.com/firebase/answer/7015592
const firebaseConfig = {
    apiKey: "AIzaSyALZ5U4sEmsNenL8WE2d8IkiNIyK7ecKaA",
    authDomain: "hackaton-94660.firebaseapp.com",
    databaseURL: "https://hackaton-94660-default-rtdb.firebaseio.com",
    projectId: "hackaton-94660",
    storageBucket: "hackaton-94660.appspot.com",
    messagingSenderId: "355569090139",
    appId: "1:355569090139:web:d428453a391ad1ba63c97e",
    measurementId: "G-HGRMCCH5XS"
};

// Initialize Firebase';
const app = initializeApp(firebaseConfig);
const user = {
    "AjiltanId": "AJ0001",
    "AjiltanOwog": "Tsogzol",
    "AjiltanNer": "Dewjrekh",
    "NuutsUg": "123456",
    "Utas": "94123212",
    "Email": "something@gmail.com",
    "ShaardlagataiHolbogd": "hohohaha@gmail.com",
    "GeriinHayg": "Skypedia",
    "TsalingiinMedeelel": "400.000"
}


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export function Zahialga() {
    setDoc(doc(db, "data", "ZahialgaID/Zahialga_medeelel/" + "ZI001"), {
        "ZahialgaID": "ZI001",
        "Hayg": "SHD 19-khoroo 12-32, 12",
        "Ognoo": "2023-04-27",
        "AjiltanID": "AJ001",
        "Unelgee": "ih lag bailaaaa",
        "ZahialgaLawlahID": "ZL001"
    }).then(res => {

        });
    setDoc(doc(db, "data", "ZahialgaID/Zahialga_medeelel/" + "ZI002"), {
        "ZahialgaID": "ZI002",
        "Hayg": "BZD 13-khoroo 32, 17",
        "Ognoo": "2023-04-27",
        "AjiltanID": "AJ002",
        "Unelgee": "ih taalagdlaa",
        "ZahialgaLawlahID": "ZL001"
    }).then(res => {

    });
    setDoc(doc(db, "data", "ZahialgaID/Zahialga_medeelel/" + "ZI003"), {
        "ZahialgaID": "ZI003",
        "Hayg": "SHD 25-r khoroo 51, 23",
        "Ognoo": "2023-04-28",
        "AjiltanID": "AJ003",
        "Unelgee": "gomdoltoii bainaa ",
        "ZahialgaLawlahID": "ZL002"
    }).then(res => {

    });

    setDoc(doc(db, "data", "ZahialgaID/Zahialga_medeelel/" + "ZI004"), {
        "ZahialgaID": "ZI004",
        "Hayg": "Nalaikh 1-khoroo 32, 17",
        "Ognoo": "2023-04-28",
        "AjiltanID": "AJ004",
        "Unelgee": "ih setgeleeree umaaaa",
        "ZahialgaLawlahID": "ZL003"
    }).then(res => {

    });
    setDoc(doc(db, "data", "ZahialgaID/Zahialga_medeelel/" + "ZI005"), {
        "ZahialgaID": "ZI005",
        "Hayg": "SHD 24-r khoroo 11, 23",
        "Ognoo": "2023-04-29",
        "AjiltanID": "AJ005",
        "Unelgee": "yanztaaishuu",
        "ZahialgaLawlahID": "ZL004"
    }).then(res => {

    });
}

export function Hereglegch() {
    setDoc(doc(db, "data", "CustomerID/Customer_info/" + "CI001"), {
        "HereglegchID": "CI001",
        "ZahialgaID":"ZI001",
        "HereglegchOwog": "Selem",
        "HereglegchNer": "Jad",
        "Email": "jad@gmail.com",
        "NuutsUg": "selem123",
        "Utas": "99871232",
        "geriinHayg": "SB 12-khoroo 2, 17",
        "ShaardlagataiHolbogd": "selem@gmail.com"
    }).then(res => {

    });
    setDoc(doc(db, "data", "CustomerID/Customer_info/" + "CI002"), {
        "HereglegchID": "CI004",
        "ZahialgaID":"ZI002",
        "HereglegchOwog": "Dorj",
        "HereglegchNer": "Pagma",
        "Email": "pagma@gmail.com",
        "NuutsUg": "pagma123",
        "Utas": "98781232",
        "geriinHayg": "SHD 25-khoroo 12, 17",
        "ShaardlagataiHolbogd": "dorj@gmail.com"
    }).then(res => {

    });
    setDoc(doc(db, "data", "CustomerID/Customer_info/" + "CI003"), {
        "HereglegchID": "CI003",
        "ZahialgaID":"ZI003",
        "HereglegchOwog": "Molsukh",
        "HereglegchNer": "Ganaa",
        "Email": "ganaa@gmail.com",
        "NuutsUg": "ganaa123",
        "Utas": "94231265",
        "geriinHayg": "BZD 2-khoroo 52, 17",
        "ShaardlagataiHolbogd": "molsukh@gmail.com"
    }).then(res => {

    });
    setDoc(doc(db, "data", "CustomerID/Customer_info/" + "CI004"), {
        "HereglegchID": "CI004",
        "ZahialgaID":"ZI004",
        "HereglegchOwog": "Gombo",
        "HereglegchNer": "Suren",
        "Email": "gombo@gmail.com",
        "NuutsUg": "gombo123",
        "Utas": "96452354",
        "geriinHayg": "Nalaikh 1-khoroo 32, 17",
        "ShaardlagataiHolbogd": "gombo@gmail.com"
    }).then(res => {

    });
    setDoc(doc(db, "data", "CustomerID/Customer_info/" + "CI005"), {
        "HereglegchID": "CI005",
        "ZahialgaID":"ZI005",
        "HereglegchOwog": "Molom",
        "HereglegchNer": "bayar",
        "Email": "bayar@gmail.com",
        "NuutsUg": "bayar123@gmail.com",
        "Utas": "86964353",
        "geriinHayg": "SHD 24-r khoroo 11, 23",
        "ShaardlagataiHolbogd": "molom@gmail.com"
    }).then(res => {

    })
}
export function ZahialgaLawlah() {
    setDoc(doc(db, "data", "ZahialgaLawlahID/ZahialgaLawlah/" + "ZL001"), {
        "ZahialgaLawlahID": "ZL001",
        "ZahialgaTailbar": "Coding"
    }).then(res => {

    });
    setDoc(doc(db, "data", "ZahialgaLawlahID/ZahialgaLawlah/" + "ZL002"), {
        "ZahialgaLawlahID": "ZL002",
        "ZahialgaTailbar": "Cleaning"
    }).then(res => {

    });
    setDoc(doc(db, "data", "ZahialgaLawlahID/ZahialgaLawlah/" + "ZL003"), {
        "ZahialgaLawlahID": "ZL003",
        "ZahialgaTailbar": "Electronic"
    }).then(res => {

    });
    setDoc(doc(db, "data", "ZahialgaLawlahID/ZahialgaLawlah/" + "ZL004"), {
        "ZahialgaLawlahID": "ZL004",
        "ZahialgaTailbar": "Hard work"
    }).then(res => {

    });
}

//------------------AJILTAN----------------
export function T() {
    setDoc(doc(db, "data", "User/Ajiltan/" + "AJ001"), {
        "AjiltanId": "AJ001",
        "AjiltanOwog": "Tsogzol",
        "AjiltanNer": "Dewjrekh",
        "NuutsUg": "nuutslagug",
        "Utas": "95132123",
        "Email": "dewjrekh@gmail.com",
        "ShaardlagataiHolbogd": "tsogzol@gmail.com",
        "GeriinHayg": "SB 1r horoo, 21, 12",
        "TsalingiinMedeelel": "400.000",
        "Register":"RD12321232",
        "Bolowsrol":"Bachelor"
    }).then(res => {

    });
    setDoc(doc(db, "data", "User/Ajiltan/" + "AJ002"), {
        "AjiltanId": "AJ002",
        "AjiltanOwog": "Baatarkhuu",
        "AjiltanNer": "Munkhjin",
        "NuutsUg": "nuutslagug",
        "Utas": "98123242",
        "Email": "munkhjin@gmail.com",
        "ShaardlagataiHolbogd": "baatarkhuu@gmail.com",
        "GeriinHayg": "SHD 15-r khoroo 41,24",
        "TsalingiinMedeelel": "400.000",
        "Register":"PS12324312",
        "Bolowsrol":"Buren dund"
    }).then(res => {

    });
    setDoc(doc(db, "data", "User/Ajiltan/" + "AJ003"), {
        "AjiltanId": "AJ003",
        "AjiltanOwog": "Samand",
        "AjiltanNer": "Jawkhlan",
        "NuutsUg": "jawkhlan123",
        "Utas": "94245212",
        "Email": "jawkhlan@gmail.com",
        "ShaardlagataiHolbogd": "samand@gmail.com",
        "GeriinHayg": "BZD 15r horoo, 21, 112",
        "TsalingiinMedeelel": "400.000",
        "Register":"PO12542322",
        "Bolowsrol":"Magistr"
    }).then(res => {

    });
    setDoc(doc(db, "data", "User/Ajiltan/" + "AJ004"), {
        "AjiltanId": "AJ004",
        "AjiltanOwog": "Demberel",
        "AjiltanNer": "Sambuu",
        "NuutsUg": "nuutslagug",
        "Utas": "99881123",
        "Email": "sambuu@gmail.com",
        "ShaardlagataiHolbogd": "demberel@gmail.com",
        "GeriinHayg": "BZD 14r horoo, 2-21, 12",
        "TsalingiinMedeelel": "400.000",
        "Register":"Oyutan"
    }).then(res => {

    });
    setDoc(doc(db, "data", "User/Ajiltan/" + "AJ005"), {
        "AjiltanId": "AJ005",
        "AjiltanOwog": "Saikhantamir",
        "AjiltanNer": "Usukhbayar",
        "NuutsUg": "homoburhan123",
        "Utas": "94205412",
        "Email": "usuhuu@gmail.com",
        "ShaardlagataiHolbogd": "saihnaa@gmail.com",
        "GeriinHayg": "SHD 19r horoo, 2-21, 12",
        "TsalingiinMedeelel": "400.000",
        "Register":"Bachelor"
    }).then(res => {

    });
}
export function AjilTurul(){
    setDoc(doc(db,"data", "Ajil_Turul/turul/" + "AT001"),{
        "AjilTurulID":"AT001",
        "AjilTailbar":"Huselt"
    }).then(res=>{

    });setDoc(doc(db,"data", "Ajil_Turul/turul/" + "AT002"),{
        "AjilTurulID":"AT002",
        "AjilTailbar":"Hiigdsen"
    }).then(res=>{

    });
}
export function AjiltanTuuh() {

    setDoc(doc(db, "data", "Ajiltan_Tuuh/tuuh/" + "AJ001"), {
        "AjiltanId": "AJ001",
        "ZahialgaID": "ZI001",
        "AjilTurulID":"AT001"
    }).then(res => {

    });
    setDoc(doc(db, "data", "Ajiltan_Tuuh/tuuh/" + "AJ002"), {
        "AjiltanId": "AJ002",
        "ZahialgaID": "ZI002",
        "AjilTurulID":"AT001"
    }).then(res => {

    });
    setDoc(doc(db, "data", "Ajiltan_Tuuh/tuuh/" + "AJ003"), {
        "AjiltanId": "AJ003",
        "ZahialgaID": "ZI003",
        "AjilTurulID":"AT002"
    }).then(res => {

    });
    setDoc(doc(db, "data", "Ajiltan_Tuuh/tuuh/" + "AJ004"), {
        "AjiltanId": "AJ004",
        "ZahialgaID": "ZI004",
        "AjilTurulID":"AT002"
    }).then(res => {

    });
    setDoc(doc(db, "data", "Ajiltan_Tuuh/tuuh/" + "AJ005"), {
        "AjiltanId": "AJ005",
        "ZahialgaID": "ZI005",
        "AjilTurulID":"AT002"
        
    }).then(res => {

    });
}


// export function HereglegchTuuh() {

//     setDoc(doc(db, "data", "HereglegchTuuh/tuuh/" + "HT001"), {
//         "HereglegchID": "CI001",
//         "ZahialgaID": "ZI001"
//     }).then(res => {

//     });
//     setDoc(doc(db, "data", "HereglegchTuuh/tuuh/" + "HT002"), {
//         "HereglegchID": "CI002",
//         "ZahialgaID": "ZI002"
//     }).then(res => {

//     });
//     setDoc(doc(db, "data", "HereglegchTuuh/tuuh/" + "HT003"), {
//         "HereglegchID": "CI003",
//         "ZahialgaID": "ZI003"
//     }).then(res => {

//     });
//     setDoc(doc(db, "data", "HereglegchTuuh/tuuh/" + "HT004"), {
//         "HereglegchID": "CI004",
//         "ZahialgaID": "ZI004"
//     }).then(res => {

//     });
//     setDoc(doc(db, "data", "HereglegchTuuh/tuuh/" + "HT005"), {
//         "HereglegchID": "CI005",
//         "ZahialgaID": "ZI005"
//     }).then(res => {

//     });
// }