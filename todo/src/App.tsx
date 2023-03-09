import React, { useEffect, useState } from 'react';
import './App.css';
import { Todo } from './modal/Todo';
import { URL, getService, postService } from './Util/Common';
import AddButton from './partial/AddButton';
import InputBox from './partial/InputBox';



function App() {

  const[item, setItem] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]); 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setItem(event.target.value);
  };

  const onClick = async () => {
    const data = {
      todoItem: item,
    };
    const todo = await postService(URL, data);
    setTodos([todo, ...todos]);
    setItem('');
  }

  useEffect(() => {
    getService(URL).then(response => setTodos(response));
  },[])

  return (
    <div className="App">
      <h1 className='header'>What are your plans?</h1>
      <div>
        <InputBox onChange = {handleChange} value ={item} type={`text`}/>
        <AddButton onClick={onClick}/>
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
