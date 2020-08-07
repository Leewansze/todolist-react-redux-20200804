import React from 'react'
import { connect } from 'react-redux'
import Listitem from '../list/index'
import { List, Row, Col , Button} from 'antd';

class Finshtodolist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <Row>
                    <Col span={12} offset={6}>
                        <h1>Finish Todo List</h1>
                    </Col>
                </Row>
                <Row>
                    <Col span={12} offset={6}>
                        <div>
                            <List
                                bordered
                                dataSource={this.props.values}
                                renderItem={(item, index) => (
                                    <List.Item>
                                        <Listitem
                                            key={index}
                                            index={index}
                                            item={item}
                                            deleteList={this.props.deleteList}
                                            toggleMark={this.props.toggleMark}
                                        />
                                    </List.Item>
                                )}
                            />
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}


//TODO
const mapStateToProps = state => {
    const { values } = state.todoReducer
    return { values : values.filter((param) => { return param.status})}
}

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(Finshtodolist);
