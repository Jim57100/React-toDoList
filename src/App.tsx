import React, { useState } from 'react';
import './App.css';
import NewListForm from './components/NewListForm';
import { TodoList } from './components/TodoList';

function App() {
  
  const [board, setBoard] = useState<Array<TodoList>>([{id: 1, title: 'To Do'}]);
  const [lastIdList, setlastIdList] = useState(1);


  const handleCreateList = (title :string) => {
    const newList = {
      id: lastIdList + 1,
      title: title,
    };
    const newBoard = [...board];
    newBoard.push(newList);
    setBoard(newBoard); 
    setlastIdList(lastIdList + 1);
    console.log("List created" + newList.id);
  }

  
  const handleDeleteList = (id: number) => {
    const index = board.findIndex((index) => {
      return index.id === id;
    });
  
    const newBoard = [...board]; 
    newBoard.splice(index, 1); 
    setBoard( board => newBoard ); 
    console.log("List deleted" + id);
  };


  return ( 
    <>
    <header>
      <h1>
        Todo App
      </h1>
      </header>
      <div className="container">
        <NewListForm onCreate={handleCreateList}/>
      <div className="row mt-3">
        <div className="col-12 d-flex">
            {board.map(list => (
              <div className="m-2" key={list.id}>  
                <TodoList id={list.id} title={list.title} delete={handleDeleteList}/>
              </div>
            ))}
        </div>
      </div>
    </div>
    </>
  );
};

export default App;

