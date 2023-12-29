import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { AuthContext } from './context';
import { CookiesProvider, useCookies } from "react-cookie";

function App() {
  const [currentUser, setCurrentUser] = useState({username: 'refreshed'});
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  const handleUserCookies = (user) => {
    setCookie("user", user, { path: "/" });
  }

  return (
    <CookiesProvider>
      <AuthContext.Provider value={{currentUser, setCurrentUser}}>
        <Routes>
          <Route path="/login" element={<Login handleUserCookies={handleUserCookies}/>}/>
          <Route path="/home" element={<Home removeCookie={removeCookie} userCookies={cookies.user}/>}/>
        </Routes>
      </AuthContext.Provider>
    </CookiesProvider>
  );
}

export default App;
