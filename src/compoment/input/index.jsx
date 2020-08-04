import React from 'react'
import List from '../list';
class Input extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <>
            <div>
                <input></input>
                <button>add</button>
            </div>
            <List />
            </>
        )
    }
        
    
}

export default Input;