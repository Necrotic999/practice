"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";

type Props = {};

const TodoList = (props: Props) => {
  const [todos, setTodos] = useState([]);
  return (
    <section>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo, idx) => {
          return <li key={idx}>{todo}</li>;
        })}
      </ul>
      <Button className="cursor-pointer">Add todo</Button>
    </section>
  );
};

export default TodoList;
