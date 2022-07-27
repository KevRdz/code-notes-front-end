import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from './AddNote.module.css'

const AddNote = (props) => {
  const navigate = useNavigate()

  const [formData, setFromData] = useState({
    topic: '',
    note: '',
  })

  const handleSubmit = async e => {
    e.preventDefault()
    try {
      props.handleAddNote(formData)
      navigate('/')
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    setFromData({ ...formData, [e.target.name]: e.target.value})
  }

  const {topic, note} = formData

  const isFormInvalid = () => {
    return !(topic && note)
  }

  return ( 
    <>
      <h1>Add A Note</h1>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="topic-input">
            Topic:
          </label>
          <input 
            type="text"
            name="topic"
            value={topic}
            onChange={handleChange}
            required
          />
        </div>
        <div className={styles.textArea}>
          <label htmlFor="note">
            Note:
          </label>
          <textarea 
            name="note" 
            id="" 
            cols="30" 
            rows="10" 
            placeholder="Write your note here" 
            value={note} 
            onChange={handleChange}></textarea>
        </div>
        <div>
          <button 
            type="submit"
            // disabled={isFormInvalid}
          >
            Add Note
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNote