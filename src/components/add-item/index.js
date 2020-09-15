import React from 'react'
import "./add-item.css"

export default class extends React.Component{

    state = {
        val: ''
    }

    changeValue = (e) =>{
        this.setState({
            val: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        if(this.state.val.length > 0){
            this.props.addItem(this.state.val)
            this.setState({
                val: ''
            })
        }
    }


    render(){

        let {val} = this.state

        return(
            <form className = "add" onSubmit={this.onSubmit}>
                <input className = 'add-input' 
                value={val} 
                onChange={this.changeValue}
                placeholder="What needs to be done"
                />
                <input type="submit" value="Add" className="btn btn-outline-secondary"/>
            </form>
        )
    }
}