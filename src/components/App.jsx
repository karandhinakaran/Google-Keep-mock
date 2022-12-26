import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./createArea";

function App() {

    const [notes,addNotes] = useState([]);

    function addNote(note) {
        addNotes(prevState=>{
            return [...prevState,note];
        })


    }

    function deleteNote(id){
        addNotes(()=>{
            return notes.filter((item,index)=>{
                return index!==id;
            })
        })
    }

    return (
        <div>
            <Header />
            <CreateArea func1={addNote} />
            {notes.map((noteItem,index)=>(
                <Note id={index} key={index} func2={deleteNote} title={noteItem.title} desc={noteItem.content}/>
            ))}
            <Footer />
        </div>
    );
}

export default App;
