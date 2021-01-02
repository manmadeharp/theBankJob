import React, {useState} from 'react'
import {Layout, Menu} from 'antd';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined, UploadOutlined, UserOutlined, VideoCameraOutlined, UserAddOutlined
} from '@ant-design/icons';
import {useDispatch, useSelector} from "react-redux";
import firebase from "firebase";
import {Link, useHistory} from 'react-router-dom'

const {Header, Content, Footer, Sider} = Layout;
const {SubMenu, Item} = Menu;

const Template = (props) => {
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
        <Layout>
            <Sider
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={broken => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <a href={"/"}>
                    <div className="logo">The Bank Project</div>
                </a>
                {/*<Menu.Item ></Menu.Item>*/}
                <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                    <Menu.Item key="1" icon={<UserOutlined/>}>
                        nav 1
                    </Menu.Item>
                    <Menu.Item key="2" icon={<VideoCameraOutlined/>}>
                        nav 2
                    </Menu.Item>
                    <Menu.Item key="3" icon={<UploadOutlined/>}>
                        nav 3
                    </Menu.Item>
                    <Menu.Item key="4" icon={<UserOutlined/>}>
                        nav 4
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Header className="site-layout-sub-header-background" style={{padding: 0}}>
                    <Menu theme="dark" mode="horizontal">
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
                            <SubMenu key="SubMenu" icon={<UserOutlined/>} title="User"
                                     className="float-right">
                                <Menu.ItemGroup>
                                    <Menu.Item key="setting:1">Profile Settings</Menu.Item>
                                    <Menu.Item key="setting:2" onClick={logout}>Logout</Menu.Item>
                                </Menu.ItemGroup>
                            </SubMenu>
                        )}
                    </Menu>
                </Header>
                <Content style={{margin: '24px 16px 0'}}>
                    <div className="site-layout-background" style={{padding: 24}}>
                        {/*hello*/}
                        {props.text}
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    );

}

export default Template