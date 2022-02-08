import React, {useState} from 'react';
import Task from './Task';
import FormUpdate from './FormUpdate';
import FormTask from './FormTask';


const toggleComplete :ToggleComplete = (id) => {
 tasks.map(task => {
   if (task.id === id) {
     console.log(task.text + 'completed !');
     return {...task, completed: !task.completed}
   }
 })
}

export default function Tasks () {

  const [tasks, setTasks] = useState([]);
  const [isAdded, setIsAdded] = useState(false);
  const [lastIdTask, setLastIdTask] = useState(tasks.id)

  const handleShowForm = () => setIsAdded(
    { isAdded: !state.isAdded }
  );


  const handleCreateTask = (id: number, text :string, description :string, assignedTo :string, priority :string,  completed :boolean) => {
    
    setTasks({
      id : lastIdTask + 1,
      text        : text, 
      description : description, 
      assignedTo  : assignedTo, 
      priority    : priority, 
      completed   : completed,
    }
    );

    //Principe d'immutabilité
    const newTasksList = [...tasks];
    newTasksList.push(newTask);
    setState(
      {
        tasks      : newTasksList,
        lastIdTask : state.lastIdTask + 1,
      }
    )

    handleShowForm();
  }


  const handleUpdate = (id :number, text :string, description :string, assignedTo :string, priority :string) => {

    const index = state.tasks.findIndex(
      task => {
      return task.id === id;
      }
    );

    const newUpdatedTask :Task = {id, text, description, assignedTo, priority, completed: state.tasks[index].completed}

    const newTasks  = [...state.tasks];
    newTasks[index] = newUpdatedTask;

    setState({
      tasks           : newTasks,
      idTaskToUpdate  : 0,
    })
  }


  const handleDeleteTask = (id :number) => {
    const tasksIndexTab = state.tasks.findIndex(index => {
      return index.id === id;            //retourne l'index du tableau
    });
    //Principe d'immutabilité :
    const newTasks = [...state.tasks]; //copie du tableau
    newTasks.splice(tasksIndexTab, 1);      //découpe la ligne souhaité dans le tableau copié
    
    setState({tasks:newTasks});        //fusion du nouveau tableau avec l'ancien
    console.log('deleted'+id);
  }

    return (
      <>
        <div className="row d-flex flex-column">
          {isAdded ? <FormTask addTask={handleCreateTask} /> : null}
          <button className='btn btn-primary w-100' type="submit" onClick={handleShowForm}>{ isAdded ? "Fermer l'ajout" : "Ajouter"}</button>
        </div>
        
        {tasks.map(
          task => {
            if(task.id !== idTaskToUpdate) {
              return (
                <ul key={task.id}>
                  <Task task = {task} delete = {handleDeleteTask} update = {handleUpdate} />
                </ul>
              );
            } else {
              return (
              <ul key={task.id}>
                <FormUpdate
                  id            = {tasks.id} 
                  text          = {tasks.text} 
                  description   = {tasks.description} 
                  assignedTo    = {tasks.assignedTo} 
                  priority      = {tasks.priority} 
                  confirmUpdate = {handleUpdate} />;
              </ul>
              );
            }
          }
        )}
      </>
    );
  
}
