import { useState } from 'react';
import UserSelector from './components/UserSelector';
import './App.css'
import LeaderBoard from './components/LeaderBoard';
import AddUser from './components/AddUser';
import { Route, Routes } from 'react-router-dom';
import History from './components/History';
import Navbar from './assets/Navbar';
import Footer from './assets/Footer';

function App() {
  return (
    <div className='app'>
      <Navbar></Navbar>
      <Routes>
        <Route path="/select" element={<UserSelector></UserSelector>} ></Route>

        <Route path="/leader" element={<LeaderBoard></LeaderBoard>}></Route>

        <Route path="/newUser" element={<AddUser></AddUser>} ></Route>


        <Route path="/history" element={<History></History>} ></Route>
      </Routes>
      <Footer></Footer>
    </div>
  )
}

export default App
