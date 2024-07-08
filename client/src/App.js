
import React from 'react';
import Signup from './Signup';
import Login from './Login';
import Nav from './Nav';
import Profile from './Profile';
import Home from './Home';
import Properties from './Properties';
import Search from './Search';
import Book from './Book';
import Bookapprove from './Bookapprove';
import Details from './Details';
import Owner from './Owner';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'

import Status from './Status';
function App() {
  return (
    <div >
  
      
       <Router>

        <Routes>
          <Route  path='/' element={<Signup/>}/>
          <Route path='/signin' element={<Login/>}/>
          <Route path='/profile' element={<Profile/>}/>
          <Route path='/home' element={<Home/>}/>
          <Route path='/properties' element={<Properties/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/book/:id/:checkindate/:checkoutdate' element={<Book/>}/>
          <Route path='/book/approve' element={<Bookapprove/>}/>
          <Route path='/book/status' element={<Status/>}/>
          <Route path='/profile/:id' element={<Details/>}/>
          <Route path='/ownerprofile/:id' element={<Owner/>}/>
          
        </Routes>
      </Router> 
    </div>
  );
}

export default App;
