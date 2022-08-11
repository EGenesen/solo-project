import React, { useState } from "react";
import Form from './components/Form.jsx';
import DrugRecords from './components/DrugRecords.jsx';
import './App.scss';



const App = () => {
  const [records, setRecords] = useState([]);
  console.log(records)

    return (
    <div className="med-app">
      <div className="med-app__top">
        <div className="med-app__user">
        <h2 className="med-app__user__name">Homer Simpson</h2>
        <p className="med-app__user__details">Lorem Ipsum</p>

        </div>
        <div className="med-app__form-container">
          <Form setRecords={setRecords} />
        </div>
      </div>
      <div className="med-app__bottom">
        <DrugRecords records={records} setRecords={setRecords} />
      </div>
    </div>
  );
};

export default App;