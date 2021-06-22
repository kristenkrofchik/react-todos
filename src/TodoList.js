import React, { useState } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import { v4 as uuid } from "uuid";

function TodoList() {
    const [items, setItems] = useState([]);

    const addItem = item => {
        let newItem = { ...item, id: uuid() };
        setItems(items => [...items, newItem]);
      };
    
    const removeItem = id => {
        setItems(items => items.filter(item => item.id !== id));
      }

    const renderItems = () => {
        return (
          <ul>
            {items.map(item => (
              <Todo
                id={item.id}
                name={item.name}
                removeItem={removeItem}/>
            ))}
          </ul>
        );
      };

    return (
        <div className="TodoList">
          <NewTodoForm addItem={addItem} />
          {renderItems()}
        </div>
      );
}

export default TodoList;