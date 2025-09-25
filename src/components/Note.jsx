import React from "react";
import { useState } from "react";

function Note(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [editNote, setEditNote] = useState({
    title: props.title,
    content: props.content
  });

  function handleDelete() {
    props.onDelete(props.id);
  }
  function handleEdit() {
    setIsEditing(true);
  }

    function handleChange(event) {
    const { name, value } = event.target;
    setEditNote(prev => ({
      ...prev,
      [name]: value
    }));
  }

  function handleSave() {
    props.onUpdate(props.id, editNote);
    setIsEditing(false);
  }

  function handleCancel() {
    setEditNote({ title: props.title, content: props.content });
    setIsEditing(false);
  }

  return (
    <div className="note">
      {isEditing ? (
        <>
          <input
            name="title"
            value={editNote.title}
            onChange={handleChange}
          />
          <textarea
            name="content"
            value={editNote.content}
            onChange={handleChange}
            rows="3"
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </>
      ) : (
        <>
          <h1>{props.title}</h1>
          <p>{props.content}</p>
          <button onClick={handleEdit}>EDIT</button>
          <button onClick={handleDelete}>DELETE</button>
        </>
      )}
    </div>
  );
}

export default Note;
