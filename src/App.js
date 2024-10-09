import './App.css';
//import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import User from './Components/UserComponent/user';
//import Login from './Components/LoginComponent/login';
// import VerifyOtp from './Components/VerifyOtpComponent/VerifyOtp';
// import ChangePassword from './Components/ChangePasswordComponent/ChangePassword';
// import ForgotPassword from './Components/ForgotPasswordComponent/ForgotPassword';
import FileUpload from './Components/UploadComponent/upload';
function App() {
  return (
    <>
      <FileUpload />

      {/* <Router>
      <Routes>
        <Route path='/' element={<Login/>} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />
        <Route path="/change-password" element={<ChangePassword />} />
      </Routes>
    </Router> */}

      </>
  );
}

export default App;
