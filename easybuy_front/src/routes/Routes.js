import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Category from "./Category";
import HeaderBar from "./components/HeaderBar";
import Footer from "./components/Footer.js";

const AppRoutes = () => {
  return (
    <ChakraProvider>
      <Router>
        <HeaderBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </Router>
    </ChakraProvider>
  );
};
export default AppRoutes;
