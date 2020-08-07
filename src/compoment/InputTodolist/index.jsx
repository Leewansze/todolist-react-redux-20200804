import React from 'react'
import Listitem from '../list';
import { connect } from 'react-redux'
import Axios from 'axios';
import { Input, Button, PageHeader, List, Row, Col, Spin } from 'antd';
import todoApi from '../../api'


class InputTodolist extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    handleChange = (e) => {
        this.setState({
            inputValue: e.target.value
        })
        e.target.value = ''
    }

    add = () => {
        if (this.state.inputValue === '') {
            alert("输入不能为空");
            return;
        }
        todoApi.post('', {
            content: this.state.inputValue,
            status: false
        }).then((response) => {
            this.props.addList(this.state.inputValue);
            this.setState({
                inputValue: ''
            })
        })
    }


    componentDidMount() {
        todoApi.get()
            .then((response) => {
                this.props.addInitData(response.data);
            }).catch(function (error) {
                alert(error)
            })
    }


    render() {
        return (
            <>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>All Todo List</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <div>
                            <Input placeholder="todo"
                                onChange={this.handleChange}
                                value={this.state.inputValue}
                                size="large"
                                addonAfter={<Button onClick={this.add} type="primary">Add</Button>} />
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <List
                            bordered
                            dataSource={this.props.values}
                            renderItem={(item, index) => (
                                <List.Item>
                                    <Listitem
                                        key={index}
                                        item={item}
                                        deleteList={this.props.deleteList}
                                        toggleMark={this.props.toggleMark}
                                    />
                                </List.Item>
                            )}
                        />
                    </Col>
                </Row>
            </>
        )
    }


}

const mapStateToProps = state => {
    const { values } = state.todoReducer;
    const { loading } = state.loadingReducer;
    return { values, loading }
}


const mapDispatchToProps = dispatch => ({
    addList: (value) => dispatch({ type: 'addList', value: value }),
    deleteList: (id) => dispatch({ type: 'deleteList', id: id }),
    addInitData: (data) => dispatch({ type: 'addInitData', data: data }),
    toggleMark: (id) => dispatch({ type: 'toggleMark', id: id }),
})

export default connect(mapStateToProps, mapDispatchToProps)(InputTodolist);
