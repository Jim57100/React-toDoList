import React, {Component} from 'react';
import Tasks from '../Statefull/Tasks';
import Button from './Button';


const List = (props :ListPropsType) => {

    return (
      <li key={props.id}>
        <div className="list col-3 m-3 p-3 border shadow p-3 mb-5 bg-white rounded">
        <Button type="submit" color="success" clic={ () => {props.delete(props.id)} }>X</Button>
          <h2>{props.title}</h2>
          <hr />
          <div className="row">
            <div className="col-12">
              <Tasks />          
            </div>
          </div>
        </div>
    </li>
    );
  
  
}

export default List;