import React, {Component} from 'react';
import Button from '../Stateless/Button';


export default function Task (props :TaskPropsType) {

    const {id, text, description, assignedTo, priority} = props;
  
    return (
    
      <li key={props.id}>
        <div className="card shadow-sm p-1 mb-5 bg-white rounded">
          <div className="card-body">
            <div className="card-title">
              <label className={props.completed ? "todo-row completed": "todo-row"}>
                <input type="checkbox" onChange={() => props.toggleComplete(props.id)} checked={props.completed}/>
                {props.text}
                </label>
            </div>
            <div className="card-text text-left">
              <ul>
                <li>description : {props.description}</li>
                <li>assigned to : {props.assignedTo}</li>
                <li>priority lvl: {props.priority}</li>
                <li>
                  <Button type="" color="warning" clic={() => props.update(props.id, props.text, props.description, props.assignedTo, props.priority)}>M</Button>
                  <Button type="" color="danger" clic={() => props.delete(props.id)}>X</Button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </li>
 
    );
  };



