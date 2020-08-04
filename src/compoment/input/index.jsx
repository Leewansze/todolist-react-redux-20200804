import React from 'react'
import List from '../list';
import { connect } from 'react-redux'

class Input extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            inputValue : ''
        }
    }

    add = () => {
        let inputValue = document.getElementById('inputNumber').value;
        if (inputValue === '') {
            alert("输入不能为空");
        }
        console.log(inputValue)
        this.props.addList(inputValue);
        document.getElementById('inputNumber').value = '';

    }


    render() {
        return (
            <>
                <div>
                    <input id="inputNumber"></input>
                    <button onClick={this.add}>add</button>
                </div>
                {
                    this.props.values.map((item,index) => <List key={index} index={index} value={item} deleteList={this.props.deleteList} />)
                }
            </>
        )
    }


}

const mapStateToProps = state => {
    const { values } = state
    return { values : values }
}


const mapDispatchToProps = dispatch => ({
    addList: (value) => dispatch({ type: 'addList', value : value }),
    deleteList: (index) => dispatch({ type: 'deleteList', index : index})
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
