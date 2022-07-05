import { HomeOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import {Link} from "react-router-dom";

const PublicHeader = () => (
  <Menu mode="horizontal" defaultSelectedKeys={['mail']}>
    <Menu.Item key="home" icon={<HomeOutlined />}>
        <Link to="/">Login</Link>
    </Menu.Item>
    <Menu.Item key="signup">
        <Link to="/register">Signup</Link>
    </Menu.Item>
    <Menu.Item key="about">
        <Link to="/about">About</Link>
    </Menu.Item>
  </Menu>
);

export default PublicHeader;