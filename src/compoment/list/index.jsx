import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
    }

    handleDelete = () =>{
        this.props.deleteList(this.props.index);
    }
    render(){
        return(
            <div>
                <label>{this.props.value}</label>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
        
    
}

export default List;