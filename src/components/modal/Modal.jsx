import { useDispatch, useSelector } from "react-redux";
import { updateTodo, appendNewValueForUpdate, clearSelectedTodo } from '../../store/slice/stackTodosSlice.jsx'
import { Box } from '@mui/material';
import { sxModalBackground, sxModalWindow, sxTextarea } from "./style.js";

export default function Modal() {
  const selectedTodo = useSelector(state => state.stackTodos.selectedTodo);
  const dispatch = useDispatch();

  const closeModal = (event, isKeydown = false) => {
    event.stopPropagation();

    if ((event.target?.type == "textarea" || event.target?.className == 'modal-window MuiBox-root css-1kgfgt1') && !isKeydown) {
      return;
    };

    dispatch(clearSelectedTodo());
  };

  return (
    <Box
      component='div'
      className='modal-background'
      style={{display: selectedTodo?.id != null ? "flex" : "none"}}
      onClick={closeModal}
      sx={sxModalBackground}
    >
      <Box
        component='div'
        className='modal-window'
        sx={sxModalWindow}
      >
        <Box
          component='textarea'
          value={selectedTodo?.value}
          onChange={(event) => dispatch(appendNewValueForUpdate(event.target.value))}
          onKeyDown={(event) => {
            if (event.key === "Enter" && selectedTodo.value.trim()) {
              dispatch(updateTodo({todoId: selectedTodo.id, newTodoValue: selectedTodo.value}));
              closeModal(event, true);
            }
          }}
          sx={sxTextarea}
          />
      </Box>
    </Box>
  );
};
