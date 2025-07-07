import TodoElement from "./TodoElement.jsx";
import { List } from "@mui/material";
import { sxList } from "./style.js";
import axios from "axios";
import { useState, useEffect } from "react";

export default function TodoList() {
  const [todosList, setTodosList] = useState(null);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((response) => setTodosList(response.data));
  }, []);

  if (!todosList) {
    return <p>Пусто</p>;
  }

  return (
    <List sx={sxList}>
      {todosList.map((value) => (
        <TodoElement elementTodo={value} key={value.id} />
      ))}
    </List>
  );
}
