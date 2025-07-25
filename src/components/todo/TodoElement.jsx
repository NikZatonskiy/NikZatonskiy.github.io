import { useDispatch } from "react-redux";
import {
  removeTodo,
  setSelectedTodo,
  updateTodoStatus,
} from "../../store/slice/stackTodosSlice";
import { Box, Button, Checkbox, ListItem, InputLabel } from "@mui/material";
import {
  sxCustomCheckbox,
  sxCustomCheckmark,
  sxDeleteButton,
  sxListDiv,
  sxSpan,
  sxTodoInputLabel,
  sxTodoListItem,
} from "./style";

export default function TodoElement({ elementTodo }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      is-complete={elementTodo.completed.toString()}
      className={elementTodo.completed ? "complete-li" : "active-li"}
      sx={sxTodoListItem}
    >
      <Box component="div" className="list-div" sx={sxListDiv}>
        <InputLabel sx={sxTodoInputLabel}>
          <Checkbox
            checked={elementTodo.completed}
            onChange={() => {
              dispatch(updateTodoStatus(elementTodo));
            }}
            sx={sxCustomCheckbox}
          />
          <Box className="custom-checkmark" sx={sxCustomCheckmark} />
        </InputLabel>
        <Box
          component="span"
          onDoubleClick={(event) =>
            dispatch(
              setSelectedTodo({
                id: elementTodo.id,
                value: event.target?.innerText,
              })
            )
          }
          sx={sxSpan}
        >
          {elementTodo.title}
        </Box>
        <Button
          className="delete-button"
          onClick={() => dispatch(removeTodo(elementTodo.id))}
          sx={sxDeleteButton}
        >
          Удалить
        </Button>
      </Box>
    </ListItem>
  );
}
