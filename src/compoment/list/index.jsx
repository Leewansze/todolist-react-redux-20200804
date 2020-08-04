import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : this.props.value
        }
    }
    render(){
        return(
            <div>
                <label>{this.state.value}</label>
                <button>X</button>
            </div>
        )
    }
        
    
}

export default List;