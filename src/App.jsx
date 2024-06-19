import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/mainhome/MainHome';
import GetStarted from './pages/getstarted/GetStarted';
import SignIn from './pages/Auth/Signin';
import SignUp from './pages/Auth/Signup';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<MainHome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
