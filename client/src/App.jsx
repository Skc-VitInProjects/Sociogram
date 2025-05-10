import React from 'react';
import {Route , Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';

//using routers to , move from one page to another

const App = () => {
  return (
    <div className = "bg-[#121212] bg-contain">
        <Routes>
          <Route path = '/' element = {<HomePage />}/>
          <Route path = '/login' element = {<LoginPage />}/>
          <Route path = '/profile' element = {<ProfilePage />}/>

        </Routes>
    </div>
  ) ;
}

export default App;
