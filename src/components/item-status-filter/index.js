import React from 'react'

export default class extends React.Component {

    buttons = [
        {name: 'all', label: 'All'},
        {name: 'active', label: 'Active'},
        {name: 'done', label: 'Done'},
    ]

    render(){

        const {filterChange, filter} = this.props

        const buttons = this.buttons.map(({name, label})=>{
            const isActive = filter === name ? "btn btn-info" : "btn btn-outline-secondary"
            return(
                <button key={name}
                        className={isActive}
                        onClick={()=>filterChange(name)}
                        >{label}</button>
            )
        })
        return(
            <div className="btn-group">
                {buttons}
            </div>
        )
    }
}