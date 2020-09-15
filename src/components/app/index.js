import React from 'react'

import AppHeader from '../app-header'
import SearchPanel from '../search-panel'
import TodoList from '../todo-list'
import ItemStatusFilter from '../item-status-filter'
import AddItem from '../add-item'
import './app.css'

export default class extends React.Component {

  maxId = 100;

  state = {
    todoData: [
      this.createToDoItem('Drink Coffe'),
      this.createToDoItem('Create App'),
      this.createToDoItem('Rest')
    ],
    term: '',
    filter: 'all'
  }

  createToDoItem (label) {
    return{
      label,
      important: false,
      done: false,
      id: this.maxId++
    }
  }

  deletItem = (id) => {
    this.setState(({todoData})=>{
      let newState = todoData.filter((el) => el.id !== id)
      return{
        todoData: newState
      }
    })
  }

  addItem = (val) => {
    this.setState(({todoData})=>{
      let newItem = this.createToDoItem(val)
      return{
        todoData: [...todoData, newItem]
      }
    })

  }

  toggleProperty(arr,id,property){
        let idx = arr.findIndex( el => el.id === id)
        let oldItem = arr[idx]
        let newItem = {...oldItem, [property]: !oldItem[property]}
        return [
          ...arr.slice(0, idx),
          newItem,
          ...arr.slice(idx+1),
        ]
  }

  changeTerm = (term) => {
    this.setState({
      term
    })
  }

  onToggleDone = (id) => {
    this.setState(({todoData})=>{
      return{
        todoData : this.toggleProperty(todoData,id,'done')
      }
    })
  }

  onToggleImportant = (id) => {
    this.setState(({todoData})=>{
      return{
        todoData : this.toggleProperty(todoData,id,'important')
      }
    })
  }

  search = (items, term) => {
    if(term.length === 0){
      return items
    }
    return items.filter(el => el.label.toLowerCase().indexOf(term.toLowerCase()) > -1)
  }

  filter = (items, filter) => {
    switch(filter){
      case 'all':
        return items
      case 'active':
        return items.filter(el => !el.done)
      case 'done':
        return items.filter(el => el.done)
      default:
        return items
    }
  }

  filterChange = (filter) => {
    this.setState({
      filter
    })
  }

  render(){

    const {todoData, term, filter} = this.state
    const doneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.filter(el => !el.done).length

    const visibleItems = this.filter(this.search(todoData, term), filter)

    return(
      <div className='todo-app'>
      <AppHeader todo={todoCount} done={doneCount}/>
        <div className='flex-group'>
          <SearchPanel changeTerm={(term)=>this.changeTerm(term)}/>
          <ItemStatusFilter filterChange={(filter)=>{this.filterChange(filter)}} filter={filter}/>
        </div>
      <TodoList 
      todos = {visibleItems}
      onDeleted={(id)=>{this.deletItem(id)}}
      onToggleDone={(id)=>{this.onToggleDone(id)}}
      onToggleImportant={(id)=>{this.onToggleImportant(id)}}
      />
      <AddItem addItem={(val)=>this.addItem(val)}/>
    </div>
    )
  }
}