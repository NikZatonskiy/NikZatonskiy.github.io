import { useDispatch, useSelector } from 'react-redux'
import { removeAllCompletedTodos, setFilterFlag } from '../../store/slice/stackTodosSlice.jsx'

export default function DownPanel() {
  const { todos, flag } = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();
  
  const countActiveElements = todos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <div className='down-panel'>
      <span name='countActive'>{textSpan}</span>
      <div className='down-panel-button__row'>
        <button
          className={`${flag === 'all' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("all"))}
        >All</button>
        <button
          className={`${flag === 'active' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("active"))}
        >Active</button>
        <button
          className={`${flag === 'completed' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(setFilterFlag("completed"))}
        >Completed</button>
      </div>
      <button
        className='clear-completed'
        onClick={() => dispatch(removeAllCompletedTodos())}
      >Clear completed</button>
    </div>
  );
}