import React, { useEffect, useState } from 'react';
import './App.css';
import { Todo } from './modal/Todo';

const URL = "http://localhost:8080/todo"

function App() {

  const[item, setItem] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setItem(event.target.value);
  };

  const onClick = () => {
    const data = {
      todoItem: item,
    };
    fetch(`${URL}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((r) => r.json()).then((todo: Todo) => {
      setTodos([todo, ...todos]);
      setItem('');
    });
  }

  useEffect(() => {
    fetch(`${URL}`)
    .then(response => response.json())
    .then((r: Todo[]) => setTodos(r));
  },[])

  return (
    <div className="App">
      <h1>What are your plans?</h1>
      <div>
        <input type="text" value={item} onChange={handleChange} />
        <button onClick={onClick}>Add</button>
      </div>
    
      <ul>
      {todos.map((item: Todo, index: number) => {
        return (
          <li key={index}>{item.todoItem}</li>
        )
      })}
      </ul>
    </div>
  );
}

export default App;
