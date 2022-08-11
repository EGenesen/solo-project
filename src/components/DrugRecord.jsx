import React, { useState } from 'react';
import './DrugRecord.scss';

const DrugRecord = ({ medName, medDose, medNotes, id, setRecords }) => {
  const handleDelete = (id) => {
    setRecords((prev) => {
      const index = prev.findIndex((ele) => ele.id === id);
     // console.log(index);
      return [ ...prev.slice(0, index), ...prev.slice(index + 1) ]
    })
  }

  const [isUpdating, setIsUpdating] = useState(false);
  const [newMedName, setNewMedName] = useState(medName);
  const [newMedDose, setNewMedDose] = useState(medDose);
  const [newMedNotes, setNewMedNotes] = useState(medNotes);

  const handleUpdateClick = () => {
    if (!isUpdating) {
      setIsUpdating(true);
      return
    }

    setRecords((prev) => {
      return prev.map((ele) => {
        if (ele.id === id) {
          return { ...ele, medName: newMedName, medDose: newMedDose, medNotes: newMedNotes };
        } else {
          return ele;
        }
      })
    });
    setIsUpdating(false);
    return;
  }

  return (
    < div className='record'>
      {
        !isUpdating && (
          <div className='record__header'>
            <h3>{ medName }</h3>
            <h6>{ medDose }</h6>
            <p>{ medNotes }</p>
          </div>
        )
      }
      {
        isUpdating && (
          <div className='record__update'>
            <label>Name</label>
            <input value={newMedName} onChange={(e) => setNewMedName(e.target.value)} />
            <label>Dose</label>

            <input onChange={(e) => setNewMedDose(e.target.value)} value={newMedDose} />
            <label>Notes</label>
            <input onChange={(e) => setNewMedNotes(e.target.value)} value={newMedNotes} />
          </div>
        )
      }

      <div className='record__buttons'>
        <button onClick={() => handleUpdateClick()} className="update">{ isUpdating ? 'Confirm' : 'Update' }</button>
        <button className="Delete" onClick={() => handleDelete(id)}>delete</button>
      </div>
    </div>
  )
}

export default DrugRecord;