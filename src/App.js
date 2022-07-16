import React,{useState} from 'react';
import { List } from './components/List/List';
import { ListItem } from './components/ListItem/ListItem';
import './App.scss';
function App() {
  
const[head, setHead] = useState()

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
     <input onChange={(evt) => setHead(evt.target.value)} type="text" placeholder="ToDo text"/>
     
     <List>
    
      {todos.map((todo) =>(
        <ListItem text={head} id={todo.id}/>
      ))}
     </List>
    </div>
  );
}

export default App;
