import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value : this.props.value
        }
    }

    handleDelete = () =>{
        this.props.deleteList()
    }
    render(){
        return(
            <div>
                <label>{this.state.value}</label>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
        
    
}

export default List;