import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoList = ({ list, remove }) => {
  const [parent, enableAnimations] = useAutoAnimate();

  return (
    <>
      {list?.length > 0 ? (
        <ul className="todo-list" ref={parent}>
          {list.map((todo, index) => (
            <div className="todo">
              <li key={index}> {todo} </li>
              <button className="delete-button" onClick={() => remove(todo)}>
                Delete
              </button>
            </div>
          ))}
        </ul>
      ) : (
        <div className="empty">
          <p> No task found</p>
        </div>
      )}
    </>
  );
};

export default TodoList;
