import { Outlet, Link } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import "../css/Layout.css";

const Layout = () => {
  return (
    <div className="parent">
      <Header />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
