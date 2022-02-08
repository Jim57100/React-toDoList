import React, {Component, FC, FormEvent, ReactElement} from 'react';
import './App.css';
import NewListForm from './Statefull/newListForm';
import List from './Stateless/List';


const App :FC = () => {

  const state = {
    lists: [
      {
        key: 0, 
        id: 0, 
        title: ''
      }
    ],
    newTitle   : '',
    lastIdList : 0,
    filterText :'',
  }
  
  const handleDeleteList = (id :number) => {
    const listsIndexTab = state.lists.findIndex(index => {
      return index.id === id;            //retourne l'index du tableau
    });
    //Principe d'immutabilité :
    const newLists = [...state.lists]; //copie du tableau
    newLists.splice(listsIndexTab, 1);      //découpe la ligne souhaité dans le tableau copié
    setState({ lists : newLists });    //fusion du nouveau tableau avec l'ancien
    console.log('deleted'+id);
  }

  const handleOnCreate = (key:number, id :number, title :string) => {
    
    const listIndexTab = state.lists.findIndex(index => {
      return index.id === id;
    });

    const newList = {
      key : state.lastIdList + 1,
      id  : state.lastIdList + 1,
      title : title,
    };

    const newArrayLists = [...state.lists];
    newArrayLists.push(newList);
    
    setState({ 
      lists: newArrayLists,
      lastIdList: state.lastIdList + 1,
    });
    
    console.log('Liste créée !');
  }
  
  return (
  
    <div className="container-fluid p-3 h-100">
      <NewListForm onCreate={handleOnCreate} />
      <div className="lists row p-3">
        
        {state.lists.map((list) => { 
          return ( 
            <ul key={list.id}>
              <List 
                key={list.id} 
                id={list.id} 
                title={list.title} 
                delete={handleDeleteList}
              />    
            </ul>
          );
        })}
        

      </div>
    </div>

  )
}

export default App;