import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
    }

    handleDelete = () =>{
        this.props.deleteList(this.props.index);
        
    }

    handleMark = () =>{
        console.log(this.props.item)
        if(!this.props.item.status){
            this.props.onMark(this.props.index);
        }else{
            this.props.unMark(this.props.index);
        }
    }
    render(){
        return(
            <div>
                <label onClick={this.handleMark} style={{ textDecorationLine:  this.props.item.status ? 'line-through' : 'none' }}>{this.props.item.content}</label>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
        
    
}

export default List;