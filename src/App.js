import logo from './logo.svg';
import './App.css';
import myimage from './1.jpg'
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Createaccount from './Components/Createaccount';
import Deposit from './Components/Deposit';
import Fundtransfer from './Components/Fundtransfer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Notfound from './Components/Notfound';
import Nav from './Components/Nav';
import Balanceinquiry from './Components/Balanceinquiry';
import Withdraw from './Components/Withdraw';
import Pinchange from './Components/Pinchange';
import Accountsummary from './Components/Accountsummary';
import Login from './Components/Login';
import LearnMore from './Components/LearnMore';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Nav />

        <Routes>
          <Route path='' element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='createaccount' element={<Createaccount />} />
          <Route path='deposit' element={<Deposit />} />
          <Route path='fundtransfer' element={<Fundtransfer />} />
          <Route path='balanceinquiry' element={<Balanceinquiry />} />
          <Route path='withdraw' element={<Withdraw />} />
          <Route path='pinchange' element={<Pinchange />} />
          <Route path='accountsummary' element={<Accountsummary />} />
          <Route path='login' element={<Login />} />
          <Route path='learnmore' element={<LearnMore />} />
          
          <Route path='*' element={<Notfound />} />

        </Routes>
      </BrowserRouter>
      </div>
  );
}

export default App;
