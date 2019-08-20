import React, {Component} from 'react';
import {Menu, Icon} from 'antd';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import HomePage from '../../pages/home/home-page';
import AboutPage from "../../pages/about/about-page";
import TodoPage from "../../pages/todo/todo-page";

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
          <Menu.Item key="todo">
            <Link to="/todo"><Icon type="todo"/>Todo</Link>
          </Menu.Item>
        </Menu>

        <Route exact path="/" component={HomePage}/>
        <Route exact path="/about" component={AboutPage}/>
        <Route exact path="/todo" component={TodoPage}/>
      </Router>
    );
  }
}

export default Navbar;
