import { useDispatch, useSelector } from 'react-redux'
import { removeCompletedTodos, changeFlag } from '../../redux/stackTodosSlice/stackTodosSlice.jsx'


export default function DownPanel() {
  const stackTodos = useSelector(state => state.stackTodos);
  const dispatch = useDispatch();
  
  const countActiveElements = stackTodos.todos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <div className='down-panel'>
      <span name='countActive'>{textSpan}</span>
      <div className='down-panel-button__row'>
        <button
          className={`${stackTodos.flag === 'all' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(changeFlag("all"))}
        >All</button>
        <button
          className={`${stackTodos.flag === 'active' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(changeFlag("active"))}
        >Active</button>
        <button
          className={`${stackTodos.flag === 'completed' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(changeFlag("completed"))}
        >Completed</button>
      </div>
      <button
        className='clear-completed'
        onClick={() => dispatch(removeCompletedTodos())}
      >Clear completed</button>
    </div>
  );
}