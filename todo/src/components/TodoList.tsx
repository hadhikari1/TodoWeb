import { useState, useEffect } from "react";
import { Todo } from "../modal/Todo";


export default function ToDoList() {
    
    const [todos, setTodos] = useState<Todo[]>([]); 
    const[item, setItem] = useState<string>('');
  

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
        <ul>
        {todos.map((item: Todo, index: number) => {
          return (
            <li key={index}>{item.todoItem}</li>
          )
        })}
        </ul>
    );
} 


