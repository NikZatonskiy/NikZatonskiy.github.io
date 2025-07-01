export default function DownPanel({ stackTodos, changeStack, setFilter }) {
  const countActiveElements = stackTodos.filter(item => item.isComplete == false);
  const textSpan = `${countActiveElements.length} items left`

  return (
    <div className='down-panel'>
      <span name='countActive'>{textSpan}</span>
      <div className='down-panel-button__row'>
        <button className='down-panel-button' onClick={() => setFilter("all")}>all</button>
        <button className='down-panel-button' onClick={() => setFilter("active")}>active</button>
        <button className='down-panel-button' onClick={() => setFilter("completed")}>completed</button>
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