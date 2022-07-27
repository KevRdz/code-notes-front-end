import { useState, useRef, useEffect } from "react";
import styles from './AddNote.module.css'

const AddNote = (props) => {
  const [validForm, setValidForm] = useState(false)
  const formElement = useRef()
  
  const [formData, setFromData] = useState({
    topic: '',
    importance: '',
    note: '',
  })
  
  useEffect(() => {
    formElement.current.checkValidity() ? setValidForm(true) : setValidForm(false)
  }, [formData])

  const handleSubmit = evt => {
    evt.preventDefault()
    props.handleAddNote(formData)
  }


  const handleChange = evt => {
    setFromData({ ...formData, [evt.target.name]: evt.target.value})
  }
  return ( 
    <>
      <h1>Add A Note</h1>
      <form autoComplete="off" ref={formElement} onSubmit={handleSubmit}>
        <div>
          <label htmlFor="topic-input">
            Note Topic:
          </label>
          <input 
            type="text"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="importance">
            Importance:
          </label>
          <select name="importance" value={formData.importance} onChange={handleChange}>
            <option value="Select">Select</option>
            <option value="Imp">Important</option>
            <option value="Norm">Normal</option>
          </select>
        </div>
        <div className={styles.textArea}>
          <label htmlFor="note">
            Note:
          </label>
          <textarea name="note" id="" cols="30" rows="10" placeholder="Write your note here" value={formData.note} onChange={handleChange}></textarea>
        </div>
        <div>
          <label htmlFor="photo-upload" className={styles.label}>
            Upload Photo of notes:
          </label>
          <input
            type="file"
            id="photo-upload"
            name="photo"
          />
        </div>
        <div>
          <button 
            type="submit"
            disabled={!validForm}
          >
            Add Note
          </button>
        </div>
      </form>
    </>
  );
}

export default AddNote