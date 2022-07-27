import NoteCard from '../../components/NoteCard/NoteCard'
import styles from './NoteList.module.css'

function NoteList(props) {
  return (
    <>
      <h1>Notes</h1>
      <div className={styles.container}>
        {props.notes.map(note =>
            <NoteCard key={note._id} note={note}/>
        )}
      </div>
    </>
  )
}

export default NoteList