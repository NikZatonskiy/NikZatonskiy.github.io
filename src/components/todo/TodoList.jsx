import TodoElement from "./TodoElement.jsx";
import { List } from "@mui/material";
import { sxList } from "./style.js";
import { useSelector } from "react-redux";

export default function TodoList() {
  const filteredTodos = useSelector((state) => state.stackTodos.filteredTodos);

  if (!filteredTodos) {
    return <p>Пусто</p>;
  }

  return (
    <List sx={sxList}>
      {filteredTodos.map((value) => (
        <TodoElement elementTodo={value} key={value.id} />
      ))}
    </List>
  );
}
