import { createContext, useContext, useState, useEffect } from "react";
import {
  addUser,
  tryLogin,
  refreshToken,
  updateUser,
  getUserData,
} from "./apiRequests";
import { useNavigate } from "react-router-dom";


const AuthContext = createContext(undefined);

const AuthProvider = (props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");
  const [refreshInterval, setRefreshInterval] = useState();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const register = async (newUser) => {
    const response = await addUser(newUser);
    if (response.status === 400) {
      return "error";
    } else {
      return response;
    }
  };

  const login = async (username, password) => {
    const response = await tryLogin(username, password);
    if (response.token) {
      setToken(response.token);
      setIsLoggedIn(true);
      localStorage.setItem("token", response.token);
      return "success";
    } else {
      return "error";
    }
  };

  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
    navigate("/login");
    localStorage.removeItem("token");
  };

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      const checkToken = async () => {
        const response = await refreshToken(getAuthHeader(localStorageToken));
        if (!response.token) {
          logout();
        } else {
          setToken(response.token);
          localStorage.setItem("token", response.token);
        }
      };
      checkToken();
    }
  }, []);

  useEffect(() => {
    const setRefreshTokenInterval = async () => {
      if (token && !refreshInterval) {
        const fifteenMinutes = 1000 * 60 * 15;
        const interval = window.setInterval(async () => {
          if (!localStorage.getItem("token")) {
            logout();
            return;
          }
          try {
            const response = await refreshToken(getAuthHeader());
            setToken(response.token);
            localStorage.setItem("token", response.token);
          } catch (e) {
            console.log(e);
          }
        }, fifteenMinutes);
        setRefreshInterval(interval);
        return () => {
          window.clearInterval(refreshInterval);
        };
      }
    };
    setRefreshTokenInterval();
  }, [token, refreshInterval]);

  const getAuthHeader = (tempToken = undefined) => ({
    headers: {
      Authorization: `Bearer ${tempToken ?? token}`,
    },
  });

  const modifyUserData = async (userData) => {
    const response = await updateUser(userData);
    if (response.status === 400) {
      return "error";
    } else {
      return response;
    }
  };

  const getUser = async (id) => {
    const response = await getUserData(id);
    if (response.status === 400) {
      return "error";
    } else {
      return response;
    }
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        register,
        login,
        logout,
        getAuthHeader,
        modifyUserData,
        getUser,
        isLoggedIn,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context)
    throw new Error("AuthContext must be used within it's provider");
  return context;
};

export default AuthProvider;
