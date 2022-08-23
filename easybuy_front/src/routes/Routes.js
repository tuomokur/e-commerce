import styles from "./App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { GridItem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./routes/Home";
import Login from "./routes/Login";
import Register from "./routes/Register";
import Category from "./routes/Category";

const Routes = () => {
  return (
    <ChakraProvider>
      <Router>
        <GridItem pl="2" bg="white.300" area={"header"}>
          <nav>
            <li className={styles.title}>EasyBuy</li>

            <li className={styles.home}>
              <Link to="/">Home</Link>
            </li>
            <li className={styles.home}>
              <Link to="/Login">Login</Link>
            </li>
            <li className={styles.home}>
              <Link to="/Register">Register</Link>
            </li>
          </nav>
        </GridItem>

        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/category" element={<Category />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </ChakraProvider>
  );
};
export default Routes;
