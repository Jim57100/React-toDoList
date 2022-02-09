import React, { ChangeEvent, FC, FormEvent, useState } from "react";

interface Props {
  onCreate: Function,
}

export default function NewListForm  ({onCreate}: Props) {

  const [title, setTitle] = useState("");

  const handleChange = (e :ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setTitle(e.target.value);
  }
  

  const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    onCreate(title);
  }

  return (
    <form className='form-group d-flex'>
      <input type="text" className='form-control' value={title} onChange={handleChange}/>
      <button className='btn btn-primary' onClick={handleSubmit}>Add List</button>
    </form>
  )
}