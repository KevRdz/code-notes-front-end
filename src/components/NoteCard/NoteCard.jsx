const NoteCard = (props) => {
  return ( 
    <>
      {/* <h1>Note Card</h1> */}
      <div>
        <h3>{props.note.topic}</h3>
        <p>{props.note.note}</p>
      </div>
    </>
  );
}

export default NoteCard