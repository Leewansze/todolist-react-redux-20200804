import React, { Component } from 'react';
import InputTodolist from '../InputTodolist';
import Finshtodolist from '../finshtodolist/finshtodolist';
import { HashRouter, Route, Link } from 'react-router-dom';
import { Menu } from 'antd';

class Todomenu extends Component {

    render() {
        const { SubMenu } = Menu;
        return (
            <div>

                <HashRouter>
                    <Menu onClick={this.handleClick} mode="horizontal">
                        <Menu.Item>
                            <Link to="/">All-todolist</Link>
                        </Menu.Item>
                        <Menu.Item>
                            <Link to="/finsh-todolist">finish-todolist</Link>
                        </Menu.Item>

                    </Menu>
                    <Route exact path="/" component={InputTodolist} />
                    <Route path="/finsh-todolist" component={Finshtodolist} />
                </HashRouter>

            </div>
        )
    }

}

export default Todomenu;