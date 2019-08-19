import React from 'react';
import './TodoItems.css';


const TodoItems = (props) =>{

    const {items,deleteItem} = props

    const showItems = items.map(item => {
        const deleteItemHandler = () => deleteItem(item.id);
        return (
            <div key={item.id}>
                <span className="name">{item.name}</span>
                <span className="age">{item.age}</span>
                <span className="action icon" onClick={deleteItemHandler}>&times;</span>
            </div>
        );
    });

    const ListItems = items.length ? showItems : (<p>There is no item to show</p>);


    return (
        <div className="ListItems">
            <span className="name title" >Name</span>
            <span className="age title">Age</span>
            <span className="action title">Action</span>
            {ListItems}
        </div>
    )

}

export default TodoItems;