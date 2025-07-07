import { useDispatch, useSelector } from "react-redux";
import {
  addTodo,
  appendNewValueForCreate,
} from "../../store/slice/stackTodosSlice";
import { sxTodoFormInput } from "./style";
import { Box, TextField } from "@mui/material";

export default function TodoForm() {
  const inputNewTodo = useSelector((state) => state.stackTodos.inputNewTodo);
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputNewTodo.trim()) return;
    dispatch(addTodo(inputNewTodo));
  };

  return (
    <Box
      component="form"
      autoComplete="off"
      className="todo_form"
      sx={{ width: "100%" }}
      onSubmit={handleSubmit}
    >
      <TextField
        type="text"
        className="todo_input"
        sx={sxTodoFormInput}
        placeholder="What needs to be done?"
        value={inputNewTodo}
        variant="filled"
        onChange={(event) =>
          dispatch(appendNewValueForCreate(event.target.value))
        }
      />
    </Box>
  );
}
