import React from 'react'
class List extends React.Component{
    constructor(props){
        super(props)
    }

    handleDelete = () =>{
        this.props.deleteList(this.props.index);
        
    }

    handleMark = () =>{
        if(this.props.item.status == false){
            this.props.onMark(this.props.index);
        }else{
            this.props.unMark(this.props.index);
        }
        
        console.log(this.props.item.status)
    }
    render(){
        // let style={ textDecorationLine: item.status ? 'line-through' : 'none' }
        return(
            <div>
                <label onClick={this.handleMark} style={{ textDecorationLine:  this.props.item.status ? 'line-through' : 'none' }}>{this.props.item.value}</label>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }
        
    
}

export default List;