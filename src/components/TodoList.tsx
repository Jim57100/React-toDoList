import React, {useState} from "react";
import { TodoForm } from './TodoForm';
import { TodoListItem } from './TodoListItem';


export const TodoList = (props :ListPropsType) => {

  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [lastIdTask, setlastIdTask] = useState(0);
  
  const addTodo: AddTodo = (
    id: number, 
    text: string, 
    description:string, 
    assigned:string, 
    priority:string, 
    complete:boolean
    ) => {
    if (text !== "") {
      const newTodos = [...todos];
      const newTodo = {
        id          : lastIdTask+1,
        text        : text,
        description : description,
        assigned    : assigned,
        priority    : priority,
        complete    : complete
      }
      newTodos.push(newTodo)
      setTodos([
        ...todos, 
        {
          id          : newTodo.id, 
          text        : newTodo.text, 
          description : newTodo.description, 
          assigned    : newTodo.assigned, 
          priority    : newTodo.priority, 
          complete    : false 
        }
      ]);
      setlastIdTask(lastIdTask + 1);
    }
  };


  const toggleComplete: ToggleComplete = selectedTodo => {
    const completedTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, complete: !todo.complete };
      }
      return todo;
    });
    setTodos(completedTodos);
  };
  

  const DeleteTodo :DeleteTodo = (id :number) => {
    const index = todos.findIndex((index) =>  index.id === id);
  
    const newTodos = [...todos]; 
    newTodos.splice(index, 1); 
    setTodos( todos => newTodos ); 
    console.log("List deleted" + id);
  }

  const [editTodo, setEditTodo] = useState<undefined | Todo>(undefined);
  

  const updateTodo: AddTodo = (id: number, text: string, description:string, assigned:string, priority:string, complete:boolean) => {
    if(text !== '') {
      const index = todos.findIndex((index) => index.id === id);
      const updatedTodo =  { 
          id, 
          text, 
          description, 
          assigned, 
          priority, 
          complete, 
      }
      const newTodos = [...todos]; 
      newTodos[index] = updatedTodo;
      setTodos(newTodos);            
      setEditTodo(undefined);
    }
  }

  
  const EditTodo :EditTodo = (id :number) => {
    const todo = todos.find((todo) =>  todo.id === id);
    if(todo) setEditTodo(todo)
  } 


  return (
    <div className="card">
      <div className="card-header">
        <div className="d-flex">
          <h2>{props.title}</h2>
          <button type="button" className="close btn btn-danger float-end" aria-label="Close" onClick={() => props.delete(props.id)}>
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <TodoForm addTodo={addTodo} editTodo={editTodo} updateTodo={updateTodo}/>
      </div>
      <div className="card-body">
      <table className="table">
          <thead>
            <tr>
              <th>Task</th>
              <th>Description</th>
              <th>Assigned</th>
              <th>Priority</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
          {todos.map((todo) => (
            <tr key={todo.text}> 
              <TodoListItem todo={todo} toggleComplete={toggleComplete} EditTodo={EditTodo} deleteTodo={DeleteTodo}/>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
};
