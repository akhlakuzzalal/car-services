import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage/HomePage';
import LogIn from './components/LogIn/LogIn';
import Header from './components/Header/Header';
import Registration from './components/Registration/Ragistration';
import Footer from './components/Footer/Footer';
import NotFound from './components/NotFound/NotFound';
import AuthProvider from './firebase/AuthProvider';
import Services from './components/Services/Services';
import Pay from './components/Payment/Pay';
import AllUsers from './components/AllUsers/AllUsers';

function App() {
  return (
    <div className="">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Routes>
            <Route path='/home' element={<HomePage />}></Route>
            <Route exact path='/' element={<HomePage />}></Route>
            <Route path='/login' element={<LogIn />}></Route>
            <Route path='/register' element={<Registration />}></Route>
            <Route path='/services' element={<Services />}></Route>
            <Route path='/allusers' element={<AllUsers />}></Route>
            <Route path='/pay/:price' element={<Pay />}></Route>
            <Route path='*' element={<NotFound />}></Route>
          </Routes>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
