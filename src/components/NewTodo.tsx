import React from "react";

import { useRef } from "react";

const NewTodo: React.FC<{ onAddTodo: (text: string) => void }> = (props) => {
  const todoTextInputRef = useRef<HTMLInputElement>(null);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const enteredText = todoTextInputRef.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    console.log("Added!");

    props.onAddTodo(enteredText);
  };

  return (
    <form className="w-180 m-8" onSubmit={submitHandler}>
      <label className="display: block font-bold mb-0.5" htmlFor="text">
        To Do List
      </label>
      <input
        className="display:block w-full font-serif text-base p-2 rounded bg-[#f7f5ef] border-[#494844] mb-2 border-b-2 border border-t-0 border-l-0 border-r-0 focus:outline-none"
        type="text"
        id="text"
        ref={todoTextInputRef}
      />
      <button className="font-serif text-base text-center text-bold bg-[#ebb002] border-[#ebb002] text-[#201d0f]  px-3 py-1 rounded cursor-pointer hover:bg-[#ebc002] hover:border-[#ebc002]">
        Add
      </button>
    </form>
  );
};

export default NewTodo;
