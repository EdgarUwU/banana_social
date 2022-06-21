import './css/App.css';
import Login from './pages/login.jsx';
import Signup from './pages/signup.jsx';
import Navbar from './components/navbar.jsx';
import Home from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import Profile from './pages/profile.jsx';
import NotFound from './components/notfound.jsx';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path='/profile' element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
