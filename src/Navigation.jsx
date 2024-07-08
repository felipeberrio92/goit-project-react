import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProtectedRoute from './utils/ProtectedRoute';
import Header from './components/header/Header';
//import App from './components/App';
import Login from './components/loginPage/Login';
import Registration from './components/resgitrationPage/Registration';
import Home from './components/homePage/Home';
import UserHome from './components/userHome/UserHome';

export default function Navigation() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/goit-project-react/" element={<Home />} />
        <Route path="/goit-project-react/login" element={<Login />} />
        <Route
          path="/goit-project-react/registration"
          element={<Registration />}
        />
        <Route
          path="/goit-project-react/user-home"
          element={<ProtectedRoute element={UserHome} />}
        />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
