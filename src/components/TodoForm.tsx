import React, { useState, ChangeEvent, FormEvent , useEffect, FC} from 'react';

interface TodoFormProps {
  addTodo: AddTodo,
  editTodo: undefined | Todo,
  updateTodo: Function,
}

const initialValues = {
  id: 0,
  text: "",
  description: "",
  assigned: "",
  priority: "",
  complete: false
};

export const TodoForm: FC<TodoFormProps> = ({ addTodo , editTodo, updateTodo }) => {

  const [values, setValues] = useState(initialValues);

  const reset = () => {
    setValues({id: 0, text: "", description: "", assigned: "", priority: "", complete: false} );
  };

  const handleChange = <T extends keyof Todo>(name: T, value: Todo[T]) => {
    setValues({...values, [name]: value,});
  }


  const handleSubmit = (e: FormEvent<HTMLButtonElement>,) => {
    e.preventDefault();
    if(!editTodo) {
      console.log('editTodo', editTodo); //always returns false !!
      addTodo(values.id, values.text, values.description, values.assigned, values.priority, values.complete);
      reset();
    } else {
      updateTodo(values.id, values.text, values.description, values.assigned, values.priority, values.complete);
    }
  }

  useEffect(() => {
    if(editTodo) {
      setValues(editTodo);
    } else {
      reset();
    }

  }, [setValues, editTodo])
 

  return (
    <form className="todo-form form-group">
      <input 
        type="text" 
        value={values.text} 
        className="todo-input form-control" 
        name="text" 
        id="text" 
        placeholder="task..." 
        onChange={(e) => {handleChange("text", e.target.value)} }/>
      <input 
        type="text" 
        value={values.description} 
        className="todo-input form-control m-1" 
        name="description" id="description" 
        placeholder="description..." 
        onChange={(e) => handleChange("description", e.target.value)} />
      <input 
        type="text" 
        value={values.assigned} 
        className="todo-input form-control m-1" 
        name="Assigned" id="assigned" 
        placeholder="Assigned to..." 
        onChange={(e) => handleChange("assigned", e.target.value)} />
      <select name="priority" id="" value={values.priority} onChange={(e) => handleChange("priority", e.target.value)}>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
      </select>
      <div className='d-grid gap-2 mt-1'>
        <button className="btn btn-primary" onClick={(e) => handleSubmit(e)}> 
          {" "}
          Add Todo{" "}
        </button>
      </div>
    </form>
  )
};
