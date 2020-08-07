import React from 'react'
import Axios from 'axios';
import { Button, Radio, Row, Col, Spin } from 'antd';
import todoApi from '../../api';
class Listitem extends React.Component {
    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        todoApi.delete(`/${this.props.item.id}`)
            .then((response) => {
                this.props.deleteList(this.props.item.id);
            });
        
    }

    handleMark = () => {
        todoApi.put(`/${this.props.item.id}`, { status: !this.props.item.status })
            .then((response) => {
                this.props.toggleMark(this.props.item.id);
            })
        
    }
    render() {
        return (
            <div>
                <label onClick={this.handleMark}
                    style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>{this.props.item.content}</label>
                <Button onClick={this.handleDelete} type="primary">Delete</Button>
            </div>
        )
    }
}

export default Listitem;