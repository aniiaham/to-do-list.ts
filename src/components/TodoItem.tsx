import React from "react";

const TodoItem: React.FC<{text: string}> = (props) => {
    return <li className="m-1 shadow p-2 bg-[#f7f5ef]">{props.text}</li>
};

export default TodoItem;