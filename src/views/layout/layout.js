import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './layout.css';
import { Layout, Menu, Icon } from 'antd';
import TableExample from '../tableExample/table';
import Home from '../home/home';
import EchartsDemo from '../chart/echartsDemo';
const { Header, Sider, Content } = Layout;
const SubMenu = Menu.SubMenu;

export default class MainLayout extends React.Component {
  state = {
    collapsed: false,
  };
  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  render() {
    return (
      <Layout className="root-layout">
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            
            <Menu.Item key="1">
              <Link to="/">
                <Icon type="home" />
                <span className="nav-text">
                  Exhibition
                </span>
              </Link>
            </Menu.Item>
            
            <Menu.Item key="2">
              <Link to="/table">
                <Icon type="table" />
                <span className="nav-text">
                  Table
                </span>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link to="/echarts">
                <Icon type="pie-chart" />
                <span className="nav-text">
                ECharts
                </span>
              </Link>
            </Menu.Item>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>Navigation Two</span></span>}>
              <Menu.Item key="5">Option 5</Menu.Item>
              <Menu.Item key="6">Option 6</Menu.Item>
              <SubMenu key="sub3" title="Submenu">
                <Menu.Item key="7">Option 7</Menu.Item>
                <Menu.Item key="8">Option 8</Menu.Item>
              </SubMenu>
          </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Header className="root-header">
            <Icon
              className="trigger"
              type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
              onClick={this.toggle}
            />
          </Header>
          <Content className="root-content">
            {/* 子路由的Route不需要再用Router标签包裹 */}
            <Switch>
              <Route path="/" exact component={Home}></Route>
              <Route path="/table" exact component={TableExample}></Route>
              <Route path="/echarts" exact component={EchartsDemo}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}
