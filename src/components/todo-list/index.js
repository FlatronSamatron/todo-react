import React from 'react'
import TodoListItem from '../todo-list-item'
import './todo-list.css'

export default ({todos,onDeleted,onToggleDone,onToggleImportant}) => {

    const elements = todos.map(({id,label,important, done}) => {

        return (
            <li key={id} className="list-group-item">
                <TodoListItem
                    label={label}
                    important={important}
                    done={done}
                    onDeleted={()=>{onDeleted(id)}}
                    onToggleDone={()=>onToggleDone(id)}
                    onToggleImportant={()=>onToggleImportant(id)}
                />
            </li>
        )
    })
  
    return (
      <ul className="list-group todo-list">
        {elements}
      </ul>
    )
  }