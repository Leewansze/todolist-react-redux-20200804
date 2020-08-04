import React from 'react'
import List from '../list';
import { connect } from 'react-redux'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue: ''
        }
    }

    add = () => {
        let inputValue = document.getElementById('inputNumber').value;
        if (inputValue === '') {
            alert("输入不能为空");
        }
        this.props.addList(inputValue);
        document.getElementById('inputNumber').value = '';
        console.log(this.props.values)
    }


    render() {
        return (
            <>
                <div>
                    <input id="inputNumber"></input>
                    <button onClick={this.add}>add</button>
                </div>
                {
                    this.props.values.map((item, index) => <List 
                    key={index} 
                    index={index} 
                    item={item}
                    deleteList={this.props.deleteList} 
                    onMark={this.props.onMark}
                    unMark={this.props.unMark}
                    />)
                }
            </>
        )
    }


}

const mapStateToProps = state => {
    const { values } = state
    return { values: values }
}


const mapDispatchToProps = dispatch => ({
    addList: (value) => dispatch({ type: 'addList', value: value }),
    deleteList: (index) => dispatch({ type: 'deleteList', index: index }),
    onMark: (index) => dispatch({ type: 'onMark', index: index }),
    unMark: (index) => dispatch({ type: 'unMark', index: index })
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
