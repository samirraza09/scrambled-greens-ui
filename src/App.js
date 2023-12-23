import React, { useState, createContext } from 'react';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import { AuthContext } from './context';

function App() {
  const [currentUser, setCurrentUser] = useState({username: 'Samir'});
  return (
    <AuthContext.Provider value={{currentUser, setCurrentUser}}>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/home" element={<Home />}/>
      </Routes>
    </AuthContext.Provider>
  );
}

export default App;
