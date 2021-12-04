import React, { useState } from "react";

const ToDoList = () => {
  const [toDo, setToDo] = useState("");
  const onchange = (e: React.FormEvent<HTMLInputElement>) => {
    const {
      currentTarget: { value },
    } = e;
    setToDo(value);
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(toDo)
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onchange} value={toDo} placeholder={"write to do"} />
        <button>Add</button>
      </form>
    </div>
  );
}

export default ToDoList;