import React, { useEffect } from 'react';
import todo_icon from '../assets/todo_icon.png';
import TodoItems from './TodoItems';
import { useRef, useState } from 'react';

const Todo = () => {

  const [todoList, setTodoList] = useState(localStorage.getItem("todos") ? JSON.parse(localStorage.getItem("todos")) : []);

  const inputRef = useRef();

  const addTask = () => {
    const inputText = inputRef.current.value.trim();

    // Fix: Correct the condition to check if input is empty
    if (inputText === "") {
      return null;
    }

    const newTodo = {
      id: Date.now(),
      text: inputText,
      isCompleted: false, // Use consistent property name
    };
    setTodoList((prev) => [...prev, newTodo]);
    inputRef.current.value = '';
  };

  const deleteTask = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const toggleTask = (id) => {
    setTodoList((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          // Fix: Use correct property name for consistency
          return { ...todo, isCompleted: !todo.isCompleted };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
  }, [todoList]);

  return (
    <div className='bg-white place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl'>
      {/* ----- title ------- */}
      <div className='flex items-center mt-7 gap-2'>
        <img className='w-8' src={todo_icon} alt="" />
        <h1 className='text-3xl font-semibold'> Mael's To-Do List</h1>
      </div>

      {/* ----- input box ------- */}
      <div className='flex items-center my-7 bg-gray-200 rounded-full'>
        <input
          ref={inputRef}
          type="text"
          className='bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600'
          placeholder='Add a task'
        />
        <button
          onClick={addTask}
          className='border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer'>
          Add +
        </button>
      </div>

      {/* ----- todo list ------- */}
      <div>
        {todoList.map((item) => {
          return (
            <TodoItems
              key={item.id} // Fix: Use unique id as the key
              text={item.text}
              id={item.id}
              isComplete={item.isCompleted} // Fix: Correct prop to match state name
              deleteTask={deleteTask}
              toggleTask={toggleTask}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;
