export var currentUser = {};

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
    name:"Naiz ohintoi boloh",
    time:"1 days",
    location:"my house",
    plus:"i need meet for my mom",
    picture:""
}
export function RegisterGive(data) {} // use data1
export function RegisterGet(data) {} // use data2
export function ChangeData(data, moreInfo, skill) {} // use data2
export function GetMyOrders() {} // return data3's list
export function ViewOrders() {} // return data3's list
export function ToGiveRequest(price, orderID) {} // add request
export function SelectRequest(orderID, userID) {} // select request
export function AddOrder(data) {} // use data4
export function RemoveMyOrder(price, orderID) {} // ug orderiin minii requestiig ustgah
