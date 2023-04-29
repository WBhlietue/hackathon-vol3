import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Test1 from "./pages/Test1";
import Test2 from "./pages/Test2";
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
