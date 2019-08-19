import React from 'react';
import './AddItem.css';


class AddItem extends React.Component {

  state = {
      name:"",
      age:0
  }

  handleChange = (e) =>{
    console.log(e.target.id);
    this.setState({
        [e.target.id]:e.target.value
    });

  }
  handleSubmit  = e =>{
    e.preventDefault();
    this.props.AddItemHandler(this.state);
    this.setState({
        name:"",
        age:0
    });
  }


  render(){
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <input id="name" value={this.state.name} type="text" placeholder="Enter Name ..." onChange={this.handleChange} />
            <input id="age" value={this.state.age} type="number" placeholder="Enter age ..." onChange={this.handleChange} />
            <input id="submit" type="submit" value="add"/>
        </form>
      </div>
    );
  }
}

export default AddItem;
