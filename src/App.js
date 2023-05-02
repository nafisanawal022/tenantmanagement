import logo from './logo.svg';
import './App.css';
import {Routes, Route, Navigate, useParams} from 'react-router-dom'
import Home from './viewpages/home'
import AdminHome from './viewpages/AdminHome'
import Login from './viewpages/login'
import AdminLogin from './viewpages/adminlogin'
import Register from './viewpages/register'
import AdminRegister from './viewpages/adminregister'
import Rent from './viewpages/rent'
import MainMenu from './viewpages/mainMenu'
import Contact from './viewpages/contact'
import AddFlat from './viewpages/addFlat'
import Update from './viewpages/update'
import RentView from './viewpages/rentview'
import store from './redux/store';
import { getAllFlats } from './redux/actions/flatsActions';

store.dispatch(getAllFlats());

function App() {
  return (
    <div className="App">
      <Routes>
      
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/adminlogin" element={<AdminLogin/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/adminregister" element={<AdminRegister/>} />
          <Route path="/rent" element={<Rent/>} />
          <Route path="/mainMenu" element={<MainMenu/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/addFlat" element={<AddFlat/>} />
          <Route path="/adminhome" element={<AdminHome/>} />
          <Route path="/update/:flatNo" element={<Update />} />
          <Route path="/rentView/:flatNo" element={<RentView />} />

          
    
      </Routes>
    </div>
  );
}

export default App;


