import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Category from "./Category";
import HeaderBar from "./components/HeaderBar";
import AuthProvider from "../contexts/authContext";
import ProductProvider from "../contexts/productContext";
import Footer from "./components/Footer.js";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <ProductProvider>
          <HeaderBar />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/category" element={<Category />} />
            <Route path="/" element={<Home />} />
          </Routes>
          <Footer />
        </ProductProvider>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
