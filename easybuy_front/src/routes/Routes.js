import styles from "../App.module.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Grid, GridItem } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Category from "./Category";

const AppRoutes = () => {
  return (
    <ChakraProvider>
      <Router>
        <Grid
          templateAreas={`"header"
                  
            `}
          gridTemplateRows={"250px "}
          gridTemplateColumns={"1200px"}
          h="120px"
          gap="1"
          color="blackAlpha.700"
          fontWeight="bold"
        >
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
        </Grid>
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
export default AppRoutes;
