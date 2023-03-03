import React from "react";

const TodoItem: React.FC<{text: string; onRemoveTodo: () => void}> = (props) => {
    return <li className="m-1 shadow p-2 bg-[#f7f5ef]" onClick={props.onRemoveTodo}>{props.text}</li>    
};

export default TodoItem;