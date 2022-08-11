import React from 'react';
import DrugRecord from './DrugRecord.jsx';
import './DrugRecords.scss';

const DrugRecords = ({ records, setRecords }) => {
  return (
    <div className="records-container">
      {records.map((record) => (
        <DrugRecord {...record} setRecords={setRecords} />
      ))}
    </div>
  );
};

export default DrugRecords;