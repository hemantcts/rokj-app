import React, { useEffect, useState } from 'react';


const RepeaterField = ({ onAddCandidate, candidates }) => {
  const [fields, setFields] = useState([{ name: "", dob: "" }]);

  useEffect(() => {
    setFields(candidates)
  },[candidates])

  const handleAddField = (e) => {
    e.preventDefault();
    if (fields.length >= 4) {
      return;
    }
    setFields([...fields, { name: '', dob: '' }]);
    // console.log(fields)
  };

  const handleRemoveField = (index, e) => {
    e.preventDefault();
    if (fields.length === 1) {
      return;
    }
    const newFields = [...fields];
    newFields.splice(index, 1);
    setFields(newFields);
    // console.log(fields)
  };

  const handleChange = (index, e) => {
    const { name, value } = e.target;
    const newFields = [...fields];
    newFields[index][name] = value;
    setFields(newFields);
    // console.log(newFields[index]);
    onAddCandidate(newFields);
  };

  return (
    <div className="repeater-container">
      <h2>Candidates Information</h2>
      {fields.map((field, index) => (
        <React.Fragment key={index}>
          {index !== 0 && <hr />} 
          <div className="repeater-field row align-items-center">
            <div className="col-md-5">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={field.name}
                onChange={(e) => handleChange(index, e)}
                className="form-control"
              />
            </div>
            <div className="col-md-5">
              <input
                type="date"
                name="dob"
                value={field.dob}
                onChange={(e) => handleChange(index, e)}
                className="form-control"
              />
            </div>
            {index !== 0 && (
              <div className="col-auto">
                <button onClick={(e) => handleRemoveField(index, e)} className="btn btn-danger">Remove</button>
              </div>
            )}
          </div>
        </React.Fragment>
      ))}
      {fields.length < 4 && ( 
        <div className="form-group">
          <button className="btn btn-primary add-button" onClick={handleAddField}>Add Field</button>
        </div>
      )}
    </div>
  );
};

export default RepeaterField;
