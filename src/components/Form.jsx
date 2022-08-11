import React, { useState, useRef, useId } from 'react';
import './Form.scss';

const Form = ({ setRecords }) => {
  const [medName, setMedName] = useState('');
  const [medDose, setMedDose] = useState('');
  const [medNotes, setMedNotes] = useState('');
  const formRef = useRef(null);

  function handleSubmit(e) {
    e.preventDefault();
    const id = "id" + Math.random().toString(16).slice(2)
    setRecords((prev) => [...prev, { id, medName, medDose, medNotes }]);
    setMedName('');
    setMedDose('');
    setMedNotes('');
    formRef.current.reset();
  }

  return (
    <form ref={formRef} className="med-app__form" onSubmit={handleSubmit}>
      <label htmlFor="med-name">Drug Name:</label>
      <input onChange={(e) => setMedName(e.target.value)} id="med-name" type="text"/>
      <label htmlFor="med-dose">Dose:</label>
      <input onChange={(e) => setMedDose(e.target.value)} id="med-dose" type="text"/>
      <label htmlFor="med-notes">Notes:</label>
      <input onChange={(e) => setMedNotes(e.target.value)} id="med-notes" type="text"/>
      <button type="submit">Add</button>
    </form>
  )
}

export default Form;