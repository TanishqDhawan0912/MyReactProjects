export function TodoItem({id, name, completed, toggleTodo, removetodo}) {
  console.log("jhntjhn",name);
  return (
    <li className="list-item">
      <label className="list-item-label">
        <input
          checked={completed}
          type="checkbox"
          data-list-item-checkbox
          onChange={(e) => toggleTodo(id, e.target.checked)}
        />
        <span>{name}</span>
      </label>
      <button onClick={() => removetodo(id)}>
        Delete
      </button>
    </li>
  );
}
