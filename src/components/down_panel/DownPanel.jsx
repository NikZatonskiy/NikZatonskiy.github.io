import { useDispatch, useSelector } from 'react-redux'
// import { changeFlag } from '../../redux/filterTodosSlice/filterTodosSlice.jsx'
import { removeCompletedTodos, changeFlag } from '../../redux/stackTodosSlice/stackTodosSlice.jsx'


export default function DownPanel() {
  const filterFlag = useSelector(state => state.stackTodos.flag);
  const stackTodos = useSelector(state => state.stackTodos.todos);
  const dispatch = useDispatch();
  
  const countActiveElements = stackTodos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <div className='down-panel'>
      <span name='countActive'>{textSpan}</span>
      <div className='down-panel-button__row'>
        <button
          className={`${filterFlag === 'all' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(changeFlag("all"))}
        >All</button>
        <button
          className={`${filterFlag === 'active' ? 'current-' : ''}down-panel-button`}
          onClick={() => dispatch(changeFlag("active"))}
        >Active</button>
        <button
          className={`${filterFlag === 'completed' ? 'current-' : ''}down-panel-button`}
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