import React, {useState} from 'react';
import {Menu} from 'antd';
import {Link, useHistory} from 'react-router-dom'
import {
    MailOutlined, AppstoreOutlined,
    SettingOutlined, ShoppingOutlined,
    ShoppingCartOutlined, UserAddOutlined,
    UserOutlined, LogoutOutlined
} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase";

const {SubMenu, Item} = Menu;

const Header = () => {
    const [current, setCurrent] = useState("home");
    let dispatch = useDispatch()
    let {user} = useSelector((state) => ({...state}));
    let history = useHistory();
    const logout = () => {
        firebase.auth().signOut();
        dispatch({
            type: "logOff",
            payload: null,
        });
        history.push("/login");
    };
    const handleClick = (e) => {
        // console.log(e.key); this handles the click event for each button clicked, e is the current event of click
        setCurrent(e.key); // this sets the current button clicked, if home is clicked then css shows the on clicked design
    };

    return (

        <Menu onClick={handleClick} selectedKeys={[current]} mode="horizontal" style={{borderBottom: "0"}}>

            <Item key="home" icon={<AppstoreOutlined/>}>
                <Link to="/">Home</Link>
            </Item>
            {!user && (
                <Item key="register" icon={<UserAddOutlined/>} className="float-right">
                    <Link to="/register">Register</Link>
                </Item>
            )}
            {!user && (
                <Item key="login" icon={<UserOutlined/>} className="float-right">
                    <Link to="/login">Login</Link>
                </Item>
            )}
            {user && (
                <SubMenu
                    icon={<SettingOutlined/>}
                    title={user.email && user.email.split("@")[0]}
                    className="float-right"
                >
                    {user && user.role === "admin" && (
                        <Item>
                            <Link to="/admin/dashboard">Dashboard</Link>
                        </Item>
                    )}
                    {user && user.role === "user" && (
                        <Item>
                            <Link to="/user/dashboard">Dashboard</Link>
                        </Item>
                    )}
                    <Item icon={<LogoutOutlined/>} onClick={logout}>
                        Logout
                    </Item>
                </SubMenu>
            )}
        </Menu>
    );
};

export default Header;
