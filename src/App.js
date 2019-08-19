import React from 'react';
import TodoItems from "./components/TodoItems/TodoItems"
import AddItem from "./components/AddItem/AddItem"



class App extends React.Component {

  state = {
    items:[
      {id:1,name:"muhammad",age:29},
      {id:2,name:"saleh",age:20}
    ]
  }


  deleteItem = (id) =>{
    console.log(id);
    let items = this.state.items.filter(it=> it.id !== id);
    this.setState({items});
  } 

  AddItemHandler = (item) =>{
      item.id = Math.floor((Math.random()*1000000));
      let items = this.state.items;
      items.push(item);
      this.setState({items});
      console.log(this.state.items);
  }

  render(){
    return (
      <div className="App container">
        <h1 className="text-center">To Do List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItem AddItemHandler={this.AddItemHandler}/>
      </div>
    );
  }
}

export default App;
