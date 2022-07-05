import {Routes, Route, Navigate} from 'react-router-dom';
import DashboardScreen from '../pages/DashboardScreen';
import ProfileScreen from '../pages/ProfileScreen';

function PrivateRoute({ children }) {
return (
    <Routes>
        <Route path="/" element={<DashboardScreen />}/>
        <Route path="/profile" element={<ProfileScreen />}/>
        <Route
            path="*"
            element={<Navigate to="/" replace />}
        />
    </Routes>
);
}

export default PrivateRoute;
