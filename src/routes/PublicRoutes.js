import {Routes, Route, Navigate} from 'react-router-dom';
import App from '../App';
import AboutScreen from '../pages/AboutScreen';
import SignupScreen from '../pages/SingupScreen';
import LoginScreen from "../pages/LoginScreen";

function PublicRoute({ children }) {
return (
    <Routes>
        <Route path="/" element={<LoginScreen />}/>
        <Route path="/register" element={<SignupScreen />}/>
        <Route path="/about" element={<AboutScreen />}/>
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
    </Routes>
);
}

export default PublicRoute;
