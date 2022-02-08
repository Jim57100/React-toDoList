import React, {Component, useState, FC, FormEvent, ChangeEvent} from 'react';


export default function NewListForm (onCreate :Function) {

  const [listTitle, setlistTitle] = useState({});
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setlistTitle({...listTitle, listTitle: e.target.value});
  };

  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    onCreate( useState(listTitle) ); //?????
    setlistTitle( {listTitle: ""} ),
  };
  
  // const { onCreate, filterText, onhandleFilterTextChange } = props;
  
  return (

    <div className="row">
      <form className="form-group">
        <div className="col-4 p-1">
            <label htmlFor="new_title" style={{color: 'white'}}>
              Créez une nouvelle liste :
            </label>
            <input 
              type="text" 
              id="new_title" 
              className="form-control"
              value={listTitle}
              onChange={handleChange}
            />
            <button 
              className='btn btn-primary' 
              onClick={handleClick}
            >Créer</button>
        </div>
        <div className="col-4 p-1">
        {/* <label htmlFor="filter" style={{color: 'white'}}>filter :</label> */}
        {/* <input 
          type="text" 
          id="filter" 
          className="form-control" 
          value={filterText} 
          onChange={() => onhandleFilterTextChange}
        /> */}
        </div>
      </form>
    </div>
  );

}

