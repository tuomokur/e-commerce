import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import HeaderBar from "./components/HeaderBar";
import AuthProvider from "../contexts/authContext";
import ProductProvider from "../contexts/productContext";
import Footer from "./components/Footer.js";
import CategoryProvider from "../contexts/categoryContext";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <HeaderBar />
            <Routes>
              <Route path="/login"/>
              <Route path="/register" />
              <Route path="/category" element={<Category />} />
              <Route path="/settings" />
              <Route path="/" element={<Home />} />
            </Routes>
            <Footer />
          </ProductProvider>
        </CategoryProvider>
      </AuthProvider>
    </Router>
  );
};
export default AppRoutes;
