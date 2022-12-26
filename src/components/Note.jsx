import React from "react";
import ReactDOM from "react-dom";

function Note(props){

    function delNote(){
        props.func2(props.id)
    }

    return <div className="note">
        <h1>{props.title}</h1>
        <p>{props.desc}</p>
        <button onClick={delNote}>DELETE</button>
    </div>
}
export  default Note;