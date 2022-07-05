import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link, useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {isLogin, setUser} from "../redux/AuthReducer";

const PrivateHeader = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const logOut = () => {
        console.log("logOut");
        dispatch(isLogin(false));
        dispatch(setUser({}));
        navigate("/");
    }

    return(
        <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
            <Menu.Item key="home" icon={<HomeOutlined />}>
                <Link to="/">Home</Link>
            </Menu.Item>
            <Menu.Item key="signup">
                <Link to="/profile">Profile</Link>
            </Menu.Item>
            <Menu.Item key="about" onClick={logOut}>
                <Link to="/logout">Logout</Link>
            </Menu.Item>
        </Menu>
    );
}

export default PrivateHeader;
