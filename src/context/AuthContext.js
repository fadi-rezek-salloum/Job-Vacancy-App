import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"

const AuthContext = createContext();

export default AuthContext;

export const AuthProvider = ({ children }) => {

  let [auth, setAuth] = useState(() =>
    localStorage.getItem("auth")
      ? JSON.parse(localStorage.getItem("auth"))
      : null
  );

  let [user, setUser] = useState(() =>
    localStorage.getItem("auth")
      ? localStorage.getItem("auth")
      : null
  );

  let [loading, setLoading] = useState(true);

  let navigate = useNavigate();

  let loginUser = async (e) => {
    
    e.preventDefault();

    let response = await axios.post('https://localhost:5000/api/login', {
        email: e.target.email.value,
        password: e.target.password.value
    }, { headers: { 'Content-Type': 'application/json;charset=UTF-8', 'Accept': '*/*', "Access-Control-Allow-Origin": "*"}})

    if (response.status === 200) {
      setAuth(response.data);
      setUser(response.data);
      localStorage.setItem("auth", JSON.stringify(response.data));
      
      navigate('/jobs-list')

    } else {
      alert("The Credentials You Provided Are Invalid!");
    }
  };

  let logoutUser = () => {
    setAuth(null);
    setUser(null);
    localStorage.removeItem("auth");
    navigate('/')
  };

  let contextData = {
    user: user,
    auth: auth,
    setAuth: setAuth,
    setUser: setUser,
    loginUser: loginUser,
    logoutUser: logoutUser,
  };

  useEffect(() => {
    if (auth) {
      setUser(auth);
    }
    setLoading(false);
  }, [auth, loading]);

  return (
    <AuthContext.Provider value={contextData}>
      {loading ? null : children}
    </AuthContext.Provider>
  );
};
