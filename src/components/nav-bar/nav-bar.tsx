import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from '../../pages/home/home';
import About from "../../pages/about/about";

const {SubMenu} = Menu;

class Navbar extends Component {
  state = {
    current: 'mail',
  };

  handleClick = (e: any) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  };

  render() {
    return (
      <Router>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
          <Menu.Item key="app">
            <Link to="/"><Icon type="home"/> Home</Link>
          </Menu.Item>
          <Menu.Item key="about">
            <Link to="/about"><Icon type="question"/>About</Link>
          </Menu.Item>
          <SubMenu
            title={
              <span className="submenu-title-wrapper">
              <Icon type="setting"/>
              Navigation Three - Submenu
            </span>
            }
          >
            <Menu.ItemGroup title="Item 1">
              <Menu.Item key="setting:1">Option 1</Menu.Item>
              <Menu.Item key="setting:2">Option 2</Menu.Item>
            </Menu.ItemGroup>
            <Menu.ItemGroup title="Item 2">
              <Menu.Item key="setting:3">Option 3</Menu.Item>
              <Menu.Item key="setting:4">Option 4</Menu.Item>
            </Menu.ItemGroup>
          </SubMenu>
          <Menu.Item key="alipay">
            <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
              Navigation Four - Link
            </a>
          </Menu.Item>
        </Menu>

        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
      </Router>
    );
  }
}

export default Navbar;
