import { useDispatch } from 'react-redux'
import { changeFlag } from '../../redux/filterTodosSlice/filterTodosSlice.jsx'


export default function DownPanel({ stackTodos, changeStack }) {
  const dispatch = useDispatch();

  const countActiveElements = stackTodos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <div className='down-panel'>
      <span name='countActive'>{textSpan}</span>
      <div className='down-panel-button__row'>
        <button className='down-panel-button' onClick={() => dispatch(changeFlag("all"))}>all</button>
        <button className='down-panel-button' onClick={() => dispatch(changeFlag("active"))}>active</button>
        <button className='down-panel-button' onClick={() => dispatch(changeFlag("completed"))}>completed</button>
      </div>
      <button
        id='todo_remove_completed_id'
        onClick={() => changeStack(stackTodos.filter(item => !item.isComplete))}
      >
        Clear completed
      </button>
    </div>
  );
}