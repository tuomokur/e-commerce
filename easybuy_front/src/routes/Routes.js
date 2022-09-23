import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Category from "./Category";
import HeaderBar from "./components/HeaderBar";
import AuthProvider from "../contexts/authContext";
import ProductProvider from "../contexts/productContext";
import Footer from "./components/Footer.js";
import CategoryProvider from "../contexts/categoryContext";
import ProductPage from "./ProductPage";
import ProductFormComponent from "./components/ProductFormComponent";

const AppRoutes = () => {
  return (
    <Router>
      <AuthProvider>
        <CategoryProvider>
          <ProductProvider>
            <HeaderBar />
            <Routes>
              <Route path="/login" />
              <Route path="/register" />
              <Route path="/category" element={<Category />} />
              <Route path="/product" element={<ProductPage />} />
              <Route path="/settings" />
              <Route path="/product" element={ProductFormComponent} />
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
