import React from 'react';
import { Route, Routes } from 'react-router-dom';
import MainHome from './pages/mainhome/MainHome';
import GetStarted from './pages/getstarted/GetStarted';
import SignIn from './pages/Auth/Signin';
import SignUp from './pages/Auth/Signup';
import AllMovies from './pages/Movies/AllMovies';
import Profile from './pages/User/Profile';
import Logout from './pages/Auth/Logout';

function App() {
  return (
    <Routes>
      <Route path="/" element={<GetStarted />} />
      <Route path="/home" element={<MainHome />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/logout" element={<Logout/>} />
    </Routes>
  );
}

export default App;
