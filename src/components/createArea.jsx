import React, { useState } from "react";

function CreateArea(props) {
    const [cont,changeCont] = useState({
        title:"",
        content:""
    });
    function updateText(event){
        var {name,value} = event.target;
        changeCont((prevState)=>{
            return{
                ...prevState,
                [name]: value
            }
        })
    }

    function submitNote(event){
      props.func1(cont);
      changeCont({title:"",
      content:""});
      event.preventDefault();
    }

  return (
    <div>
      <form>
        <input name="title" placeholder="Title"  onChange={updateText} value={cont.title}/>
        <textarea name="content" placeholder="Take a note..." rows="3"  onChange={updateText} value={cont.content}/>  
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
