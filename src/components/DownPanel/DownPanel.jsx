import { useDispatch, useSelector } from 'react-redux'
import { removeAllCompletedTodos, setFilterFlag } from '../../store/slice/stackTodosSlice.jsx'
import { Box, Button } from '@mui/material';
import { sxClearCompleted, sxDivDownPanel, sxDownPanelFilterButton, sxDownPanelButtonRow } from './sxDownPanel.js';

export default function DownPanel() {
  const { todos, flag } = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();
  
  const countActiveElements = todos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <Box
      component='div'
      className='down-panel'
      sx={sxDivDownPanel}
    >
      <Box
        component='span'
        name='countActive'
        sx={{ color: 'rgb(101, 101, 101)' }}
      >{textSpan}</Box>
      <Box
        component='div'
        className='down-panel-button__row'
        sx={sxDownPanelButtonRow}
      >
        <Button
          className={`${flag === 'all' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("all"))}
          sx={sxDownPanelFilterButton}
        >All</Button>
        <Button
          className={`${flag === 'active' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("active"))}
          sx={sxDownPanelFilterButton}
        >Active</Button>
        <Button
          className={`${flag === 'completed' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("completed"))}
          sx={sxDownPanelFilterButton}
        >Completed</Button>
      </Box>
      <Button
        className='clear-completed'
        onClick={() => dispatch(removeAllCompletedTodos())}
        sx={sxClearCompleted}
      >Clear completed</Button>
    </Box>
  );
}