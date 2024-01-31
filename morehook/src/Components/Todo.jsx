// import React, {useReducer, useRef}  from "react";
// import Task from "./Task";
// import "./Todo.css";
// const initialState=[
//     {
//         text:"demo text",
//         isHidden: true,
//     },
// ]
// const reducerFn=(state,action)=>{
//     switch(action.type){
//         case "ADD_TASK":
//             return [...state,{
//                 text:action.payload,
//                 isHidden:false,
//             }] ;
//         case "TOGGLE_TEXT":
//         return state.map((el,i)=>{
//             return i===action.payload ?{...el,isHidden : !el.isHidden}:el;
//         });
//         default:
//             return state;
//     }
// };
// const Todo=()=>{
//     const [todos,dispatch]=useReducer(reducerFn,initialState);
//     const inputRef=useRef();

//     const focus=()=>{
//         inputRef.current.focus()
//     }

//      return(
//        <div>
//      <div>
//       <input type="text" placeholder="What are you thing to do...!"
//       style={{width:"50%" ,height:"20px" , padding:"3px 5px"}}
//       ref={inputRef}
//        onKeyDown={(e)=>{
//         if(event.key==="Enter"){
//             dispatch({type:"ADD_TASK", payload:event.target.value,})
//         }
//        }}/>
//     </div>
//     <div>
//         {
//             todos.map((el,i)=><Task key={i} task={el} dispatch={dispatch} index={i}/>)
//         }
//     </div>
//     <div>
//         <button onClick={focus} >
//               Get back to writing
//         </button>
//         </div>
//     </div>
//      );
// };
// export default Todo;

import React, { useReducer, useRef } from "react";
import Task from "./Task";
import "./Todo.css";

const initialState = [
  {
    text: "demo text",
    isHidden: true,
  },
];

const reducerFn = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return [
        ...state,
        {
          text: action.payload,
          isHidden: false,
        },
      ];
    case "TOGGLE_TEXT":
      return state.map((el, i) =>
        i === action.payload ? { ...el, isHidden: !el.isHidden } : el
      );
    default:
      return state;
  }
};

const Todo = () => {
  const [todos, dispatch] = useReducer(reducerFn, initialState);
  const inputRef = useRef();

  const focus = () => {
    inputRef.current.focus();
  };

  const clearInput = () => {
    inputRef.current.value = "";
  };

  return (
    <div className="todo-container">
      <div>
        <input
          className="todo-input"
          type="text"
          placeholder="What are you going to do...!"
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              dispatch({ type: "ADD_TASK", payload: e.target.value });
              clearInput();
            }
          }}
        />
      </div>
      <div>
        {todos.map((el, i) => (
          <Task key={i} task={el} dispatch={dispatch} index={i} />
        ))}
      </div>
      <div>
        <button className="todo-button" onClick={focus}>
          Get back to writing
        </button>
      </div>
    </div>
  );
};

export default Todo;
