import React, {useState} from 'react';
import {Menu} from 'antd';
import {Link} from 'react-router-dom'
import {MailOutlined, AppstoreOutlined,
    SettingOutlined, ShoppingOutlined,
    ShoppingCartOutlined, UserAddOutlined,
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
const {SubMenu, Item} = Menu;

const Header = () => {
    const [current, setCurrent] = useState()

    const handleClick = e => {
        console.log(e.key);
        setCurrent(e.key);
    };

    return (

    <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal">

      <Item key="home" icon={<AppstoreOutlined />}>
        <Link to="/">Home</Link>
      </Item>

        <Item key="register" icon={<UserAddOutlined />} className="float-right">
          <Link to="/register">Register</Link>
        </Item>

        <Item key="login" icon={<UserOutlined />} className="float-right">
          <Link to="/login">Login</Link>
        </Item>

            <SubMenu>
            <Item>
              <Link to="/user/history">Dashboard</Link>
            </Item>

            <Item>
              <Link to="/admin/dashboard">Dashboard</Link>
            </Item>
        </SubMenu>

    </Menu>
  );
};

export default Header;
