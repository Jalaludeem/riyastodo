import './App.css';
import InputArea from './components/InputArea';

import React, { useState } from "react";
import ToDoItem from './components/ToDoItem';
function App() {
  const [items, setItems] = useState([]);

  const addItems = (inputText) =>{
    setItems((PrevItems)=>{
return[...PrevItems,inputText];
    });
  };
  console.log(items);
  const deleteItem = (id) =>{
    setItems((PrevItems)=>{
      return PrevItems.filter((item,index) =>{
        return index !== id;
      });
      
    });
  };
  return (
    <div className="container">
      <div className="heading">
        <h1>todo list</h1>
      </div>
      <InputArea addItems={addItems}/>
      <div>
        <ul>
           { items.map((item,index)=>{
              return <ToDoItem key={index} text={item} deleteItem={deleteItem} id={index} />;
              
  })}
          
        
        
        </ul>
      </div>
    </div>
  );
}

export default App;
//const [items, setItems] = useState([]);