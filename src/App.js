import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [formData, setFormData] = useState([]);

  const handleAddField = () => {
    setFormData([...formData, { name: "", type: "string", nestedFields: [] }]);
  };

  const handleDeleteField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleEditFieldName = (index, name) => {
    const updatedFormData = [...formData];
    updatedFormData[index].name = name;
    setFormData(updatedFormData);
  };

  const handleEditFieldType = (index, type) => {
    const updatedFormData = [...formData];
    updatedFormData[index].type = type;
    setFormData(updatedFormData);
  };

  const handleAddNestedField = (index) => {
    const updatedFormData = [...formData];
    updatedFormData[index].nestedFields.push({
      name: "",
      type: "string",
      nestedFields: []
    });
    setFormData(updatedFormData);
  };

  const handleDeleteNestedField = (parentIndex, index) => {
    const updatedFormData = [...formData];
    updatedFormData[parentIndex].nestedFields.splice(index, 1);
    setFormData(updatedFormData);
  };

  const handleEditNestedFieldName = (parentIndex, index, name) => {
    const updatedFormData = [...formData];
    updatedFormData[parentIndex].nestedFields[index].name = name;
    setFormData(updatedFormData);
  };

  const handleEditNestedFieldType = (parentIndex, index, type) => {
    const updatedFormData = [...formData];
    updatedFormData[parentIndex].nestedFields[index].type = type;
    setFormData(updatedFormData);
  };

  const handleSave = () => {
    console.log(formData);
  };

  return (
    <div className="form-container">
      <h1>Form name & Type</h1>
      <button className="add-button" onClick={handleAddField}>
        +
      </button>
      {formData.map((field, index) => (
        <div key={index} className="form-field">
          <div className="field-actions">
            <button
              className="delete-button"
              onClick={() => handleDeleteField(index)}
            >
              Delete
            </button>
          </div>
          <div className="field-inputs">
            <input
              className="field-name"
              type="text"
              value={field.name}
              onChange={(e) => handleEditFieldName(index, e.target.value)}
              placeholder="Field Name"
            />
            <select
              className="field-type"
              value={field.type}
              onChange={(e) => handleEditFieldType(index, e.target.value)}
            >
              <option value="string">String</option>
              <option value="number">Number</option>
              <option value="boolean">Boolean</option>
              <option value="object">Object</option>
            </select>
            {field.type === "object" && (
              <button
                className="add-nested-button"
                onClick={() => handleAddNestedField(index)}
              >
                +
              </button>
            )}
            {field.type === "object" &&
              field.nestedFields.map((nestedField, nestedIndex) => (
                <div
                  key={nestedIndex}
                  style={{ margin: "20px" }}
                  className="nested-field"
                >
                  <div className="field-actions">
                    <button
                      className="delete-nested-button"
                      onClick={() =>
                        handleDeleteNestedField(index, nestedIndex)
                      }
                    >
                      Delete
                    </button>
                  </div>
                  <div className="field-inputs">
                    <input
                      className="nested-field-name"
                      type="text"
                      value={nestedField.name}
                      onChange={(e) =>
                        handleEditNestedFieldName(
                          index,
                          nestedIndex,
                          e.target.value
                        )
                      }
                      placeholder="Nested Field Name"
                    />
                    <select
                      className="nested-field-type"
                      value={nestedField.type}
                      onChange={(e) =>
                        handleEditNestedFieldType(
                          index,
                          nestedIndex,
                          e.target.value
                        )
                      }
                    >
                      <option value="string">String</option>
                      <option value="number">Number</option>
                      <option value="boolean">Boolean</option>
                      <option value="object">Object</option>
                    </select>
                  </div>
                </div>
              ))}
          </div>
        </div>
      ))}
      <button className="save-button" onClick={handleSave}>
        Print data in console..
      </button>
    </div>
  );
};
export default App;
