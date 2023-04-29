import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
const UserType = {
  worker: "1",
  part: "2",
  customer: "3",
  guest: "4",
  company: "5",
};
var userType = UserType.worker;

function OnScroll() {
  var elems = document.querySelectorAll(
    ".haku-from-bottom, .haku-from-top, .haku-from-left, .haku-from-right, .haku-from-scale"
  );
  var revealPoint = 0;
  var windowHeight = window.innerHeight;
  var delta = windowHeight + revealPoint;
  elems.forEach((i) => {
    let delay = i.getAttribute("haku-ani-delay");
    if (delay == null) {
      delay = 0;
    }
    if (i.getBoundingClientRect().top < delta) {
      if (!i.classList.contains("haku-from-active")) {
        setTimeout(() => {
          i.classList.add("haku-from-active");
        }, delay);
      }
    } else {
      i.classList.remove("haku-from-active");
    }
    if (i.getBoundingClientRect().bottom < 0) {
      i.classList.remove("haku-from-active");
    }
  });

  elems = document.querySelectorAll(".haku-from-hide-ani");
  elems.forEach((i) => {
    let delay = i.getAttribute("haku-ani-delay");
    let rev = i.getAttribute("reverse");
    if (rev == null) {
      rev = false;
    }
    if (delay == null) {
      delay = 0;
    }
    let className = "haku-from-hide-ani-active" + (rev == 0 ? "2" : "");
    if (i.getBoundingClientRect().top < delta) {
      if (!i.classList.contains(className)) {
        setTimeout(() => {
          i.classList.add(className);
        }, delay);
      }
    }
  });
}
// OnScroll();


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Test1 />} />
          <Route path="test" element={<Test2 />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
