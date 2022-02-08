import React, {Component, FormEvent, FC, useState} from 'react';
import Button from '../Stateless/Button';


interface Props {
  addTask :AddTask,
}

export default function FormTask :FC<Props> ({ addTask }) {   

  const [newTask, setnewTask] = useState({text: '', description: '', assignedTo: '', priority: '0'});
  
  const onSubmit = (e :FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    addTask(newTask.text, newTask.description, newTask.assignedTo, newTask.priority);
    setnewTask({ text : '', description: '', assignedTo: '', priority: '0',
    })
  }

    return (

      <>
        <form>
          <div className="col-5 m-1">
            <label htmlFor="task">new task</label>
            <input type="text" id="task" className="form-control" value={newTask.text} onChange={(e) => useState({text: e.target.value})} />
          </div>
          <div className="col-4 m-1">
            <label htmlFor="description">description</label>
            <input type="text" id="description" className="form-control" value={newTask.description} onChange={(e) => useState({description: e.target.value})} />
          </div>
          <div className="col-4 m-1">
            <label htmlFor="assignedTo">assigned to</label>
            <input type="text" id="assignedTo" className="form-control" value={newTask.assignedTo} onChange={(e) => useState({assignedTo: e.target.value})} />
          </div>
          <div className="col-3 m-1">
            <label htmlFor="task">priority</label>
            <select className="mb-3" name="task" id="task" value={newTask.priority} onChange={(e) => useState({priority: e.target.value})}>
              <option value="0">0</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
            </select>
          </div>
        </form>
        <Button type="submit" color="success" clic={onSubmit}>Envoyer</Button>
      </>

    );
}

