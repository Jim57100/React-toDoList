import React, {Component, useState, useEffect} from 'react';


interface Props {
  id :number,
  text :string,
  description :string,
  assignedTo :string,
  priority :string,
  confirmUpdate :Function;

}

const FormUpdate = (props :Props) => {

  const [updatedTask, setupdatedTask] = useState({textUpdated : "", descriptionUpdated : "", assignedToUpdated : "", priorityUpdated : "0"});

  useEffect(() => {
    setupdatedTask({
      textUpdated : props.text,
      descriptionUpdated : props.description,
      assignedToUpdated : props.assignedTo,
      priorityUpdated : props.priority,
      })
  }, []);
  

  const handleConfirmUpdate = () => {
    props.confirmUpdate(
      props.id,
      textUpdated,
      descriptionUpdated,
      assignedToUpdated,
      priorityUpdated
    );
  }

    return (
      <>
        <li>
          <form>
            <div className="card shadow-sm p-1 mb-5 bg-white rounded">
              <div className="card-body">
                <div className="card-title">
                  <input type="text" value={textUpdated} onChange={(e)=> setupdatedTask({textUpdated:
                  e.target.value})}/>
                </div>
                <div className="card-text text-left">
                  <ul>
                    <li><input type="text" value={descriptionUpdated} onChange={(e)=>
                      setupdatedTask({descriptionUpdated: e.target.value})} /></li>
                    <li><input type="text" value={assignedToUpdated} onChange={(e)=>
                      setupdatedTask({assignedToUpdated: e.target.value})} /></li>
                    <li><input type="text" value={priorityUpdated} onChange={(e)=>
                      setupdatedTask({priorityUpdated: e.target.value})} /></li>
                    <li>
                      <button className='btn btn-success' type="submit" onClick={handleConfirmUpdate}>Confirm</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </form>
        </li>
      </>
    );
  

}

export default FormUpdate;