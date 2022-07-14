import React,{useState} from 'react';
import { List } from './components/List/List';
import { ListItem } from './components/ListItem/ListItem';
import './App.scss';
function App() {
  
 const todos = [
  {
    id: 1,
    text: "homework",
    isComplated: false,
   },
   {
    id: 2,
    text: "homework2",
    isComplated: false,
   },
   {
    id: 3,
    text: "homework3",
    isComplated: false,
   },
 ]

  return (
    <div>
     <input type="text" placeholder="ToDo text"/>
     <List>
      {todos.map((todo) =>(
        <ListItem text={todo.text} id={todo.id}/>
      ))}
     </List>
    </div>
  );
}

export default App;
