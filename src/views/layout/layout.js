import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import './layout.css';
import { Layout, Menu, Icon } from 'antd';
import TableExample from '../tableExample/table';
import Home from '../home/home';
import EchartsDemo from '../chart/echartsDemo';
const { Header, Sider, Content } = Layout;

export default class SiderDemo extends React.Component {
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
              <Link to="/home">
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
            <Switch>
              <Route path="/table" component={TableExample}></Route>
              <Route path="/echarts" component={EchartsDemo}></Route>
              {/* when none of the above match, <NoMatch> will be rendered */}
              <Route component={Home}></Route>
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

// ReactDOM.render(<SiderDemo />, mountNode);