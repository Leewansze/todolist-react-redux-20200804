import React from 'react'
import List from '../list';
import { connect } from 'react-redux'

class Input extends React.Component {
    constructor(props) {
        super(props)
    }

    add = () => {
        let inputValue = document.getElementById('inputNumber').value;
        this.props.addList(inputValue);
        document.getElementById('inputNumber').value = '';
    }
    render() {

        const initArray = [...Array(this.props.listSize).keys()]

        return (
            <>
                <div>
                    <input id="inputNumber"></input>
                    <button onClick={this.add}>add</button>
                </div>
                {
                    initArray.map(key => <List key={key} value={this.props.inputValue}/>)
                }
            </>
        )
    }


}

const mapStateToProps = state => {
    const { listSize , inputValue} = state
    return { listSize  , inputValue}
}


const mapDispatchToProps = dispatch => ({
    addList : (value) => dispatch({type: 'addList',payload : value})
})

export default connect(mapStateToProps, mapDispatchToProps)(Input);
