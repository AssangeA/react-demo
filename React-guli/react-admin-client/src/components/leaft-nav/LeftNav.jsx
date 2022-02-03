import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';
import * as Icon from "@ant-design/icons"
import menuList from '../../config/memuConfig';
import "./leftnav.less"


const { SubMenu } = Menu;
const iconBC = (name) => {
    return React.createElement(Icon[name], {}, {})
}

class LeftNav extends Component {

    constructor(props){
        super(props);
        this.state ={
            collapsed: "",
            openKeys: [],
        };
        this.defaultOpenMenu(menuList);
    }

      


    //设置默认打开菜单(待解决深层次递归问题)
    defaultOpenMenu=(menuList)=>{
       
        for (const menu of menuList) {
            if(menu.key===this.props.location.pathname){
                return true;
            }
            if(menu.children){
               const isOpen = this.defaultOpenMenu(menu.children)
               if(isOpen){
                this.state ={
                    collapsed: "",
                    openKeys:[menu.key],
                };
                return true
               }
            }
           
        }
       
        return false
    }
   

    onOpenChange = () => {
        return (keys)=>{
            console.log(keys);
            this.setState({ openKeys: keys})
        }
    }

    //根据menu数组生成侧边栏
    getMenuNodes = (menuList) => {
        return menuList.map(menu => {
            if (!menu.children) {
                return <Menu.Item key={menu.key} icon={iconBC(menu.icon)}>
                    <Link to={menu.key}>{menu.title}</Link>
                </Menu.Item>
            } else {
                return <SubMenu key={menu.key} icon={menu.icon ? iconBC(menu.icon) : ""} title={menu.title}>
                    {
                        this.getMenuNodes(menu.children)
                    }
                </SubMenu>
            }

        })
    }


  

    //点击事件
    onMenuClick = () => {
        return (menu) => {
            console.log(menu);
        }
    }


    render() {
        const pathname = this.props.location.pathname
        return (
            <div className="left-nav" >
                <Link className='left-nav-header' to="/">
                    <img src={require("../../assets/images/logo.png")} alt="" />
                    <h1>硅谷后台</h1>
                </Link>
                <div >
                    <Menu
                        selectedKeys={pathname}
                        onOpenChange={this.onOpenChange()}
                        openKeys={this.state.openKeys}
                        onClick={this.onMenuClick()}
                        mode="inline"
                        theme="dark"
                    >
                        {
                            this.getMenuNodes(menuList)
                        }


                        {/*
                        <Menu.Item key="home" icon={<HomeOutlined />}>
                            <Link to="/home">首页</Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
                            <Menu.Item key="category" icon={<UnorderedListOutlined />} ><Link  to="/category">品类管理</Link ></Menu.Item>
                            <Menu.Item key="product"  icon={<ToolOutlined />}><Link to="/product">商品管理</Link></Menu.Item>
                        </SubMenu>
                        
                        <Menu.Item key="user" icon={<UserOutlined />}>
                            <Link to="/user">用户管理</Link>
                        </Menu.Item>
                        <Menu.Item key="role" icon={<PieChartOutlined />}>
                            <Link to="/role">角色管理</Link>
                        </Menu.Item> */}

                    </Menu>
                </div>
            </div>

        )
    }
}

/**
 * 高阶组件:
 *  将非路由组件变为路由组件 withRouter 
 * 才能传入history/location/match
 */
export default withRouter(LeftNav);