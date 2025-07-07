import { useDispatch } from "react-redux";
import { updateTodoStatus, removeTodo, setSelectedTodo } from "../../store/slice/stackTodosSlice";
import { Box, Button, Checkbox, ListItem, InputLabel } from '@mui/material';
import { sxCustomCheckbox, sxCustomCheckmark, sxDeleteButton, sxListDiv, sxSpan, sxTodoInputLabel, sxTodoListItem } from "./sxTodo";

export default function TodoElement({ elementTodo }) {
  const dispatch = useDispatch();

  return (
    <ListItem
      is-complete={elementTodo.isComplete.toString()}
      className={elementTodo.isComplete ? "complete-li" : "active-li"}
      sx={sxTodoListItem}
    >
      <Box
        component='div'
        className='list-div'
        sx={sxListDiv}
      >
        <InputLabel sx={sxTodoInputLabel}>
          <Checkbox 
            checked={elementTodo.isComplete} 
            onChange={() => dispatch(updateTodoStatus(elementTodo.id))}
            sx={sxCustomCheckbox}
          />
          <Box className="custom-checkmark" sx={sxCustomCheckmark}/>
        </InputLabel>
        <Box
          component='span'
          onDoubleClick={(event) => dispatch(setSelectedTodo({id: elementTodo.id, value: event.target?.innerText}))}
          sx={sxSpan}
        >{elementTodo.value}</Box>
        <Button
          className="delete-button"
          onClick={() => dispatch(removeTodo(elementTodo.id))}
          sx={sxDeleteButton}
        >Удалить</Button>
      </Box>
    </ListItem>
  );
}
