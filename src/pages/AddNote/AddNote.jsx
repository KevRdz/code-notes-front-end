import { useState } from "react";

const AddNote = (props) => {
  return ( 
    <>
      <h1>Add A Note</h1>
      <form autoComplete="off">
        <div>
          <label htmlFor="">
            Note Topic:
          </label>
          <input 
            type="text"
            name="topic"
            required
          />
        </div>
        <div>
          <label htmlFor="">
            Importance:
          </label>
          <select name="Importance" id="">
            <option value="Select">Select</option>
            <option value="Imp">Important</option>
            <option value="Norm">Normal</option>
          </select>
        </div>
        <div>
          <label htmlFor="">
            Note:
          </label>
          <textarea name="" id="" cols="30" rows="10" placeholder="Write your note here"></textarea>
        </div>
      </form>
    </>
  );
}

export default AddNote