import React from 'react'
import Axios from 'axios';
class List extends React.Component {
    constructor(props) {
        super(props)
    }

    handleDelete = () => {


        Axios.delete('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.item.id)
        .then(function(response){
            console.log(response)
        });

        this.props.deleteList(this.props.index);

    }

    handleMark = () => {
        console.log(this.props.item)
        if (!this.props.item.status) {
            Axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.item.id, {status : true})
            .then(function(response){
                console.log(response);
            })

            this.props.onMark(this.props.index);
        } else {
            Axios.put('https://5e9ec500fb467500166c4658.mockapi.io/todos/'+this.props.item.id, {status : false})
            .then(function(response){
                console.log(response);
            })
            this.props.unMark(this.props.index);
        }
    }
    render() {
        return (
            <div>
                <label onClick={this.handleMark} style={{ textDecorationLine: this.props.item.status ? 'line-through' : 'none' }}>{this.props.item.content}</label>
                <button onClick={this.handleDelete}>X</button>
            </div>
        )
    }


}

export default List;