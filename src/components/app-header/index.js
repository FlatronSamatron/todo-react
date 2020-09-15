import React from 'react'
import './app-header.css'

export default ({todo,done}) => {
    return(
      <div className="app-header d-flex">
        <h1>My Todo List</h1>
        <h2>{todo} more todo, {done} done</h2>
      </div>
    )
  }