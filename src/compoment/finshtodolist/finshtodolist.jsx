import React from 'react'
import { connect } from 'react-redux'
import List from '../list/index'

class Finshtodolist extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <>
                <h1>Finish Todo List</h1>
                <div>
                    {
                        this.props.values.map((item, index) => {
                            if (item.status) {
                                return <List key={index} item={item}
                                index = {index}
                                onMark={this.props.onMark}
                                unMark={this.props.unMark}/>
                            }
                        })
                    }
                </div>
            </>
        )
    }
}



const mapStateToProps = state => {
    const { values } = state
    return { values }
}

const mapDispatchToProps = dispatch => ({
    onMark: (index) => dispatch({ type: 'onMark', index: index }),
    unMark: (index) => dispatch({ type: 'unMark', index: index })
})

export default connect(mapStateToProps,mapDispatchToProps)(Finshtodolist);
