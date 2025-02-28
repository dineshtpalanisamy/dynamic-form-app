import React, { useEffect, useState } from "react";
import { FormConfig } from "../data/FormConfig";

const Member = ({ formData, handleInputChange }) => {
  const [error, setError] = useState("");
  const [isMaxReached, setIsMaxReached] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedValue = value ? parseInt(value, 10) : "";
    const updatedFormData = { ...formData, [name]: updatedValue };

    // Calculate total percentage
    const total = FormConfig.sections.membersAllocation.reduce(
      (acc, key) => acc + (updatedFormData[key] || 0),
      0
    );

    if (total > 100) {
      setError("Total allocation cannot exceed 100%.");
    } else if (total === 100) {
      setError("");
      setIsMaxReached(true);
    } else {
      setError("Total allocation must be exactly 100%.");
      setIsMaxReached(false);
    }

    handleInputChange(name, updatedValue);
  };

  useEffect(() => {
    const total = FormConfig.sections.membersAllocation.reduce(
      (acc, key) => acc + (formData[key] || 0),
      0
    );
    setIsMaxReached(total === 100);
  }, [formData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!error) {
      alert("Form submitted successfully!");
    }
  };

  return (
    <div className="container mt-2">
      <form className="container p-4 shadow rounded bg-light">
        <h3 className="mb-4">MEMBER ALLOCATION</h3>
        <form onSubmit={handleSubmit}>
          {FormConfig.sections.membersAllocation.map((fieldKey) => (
            <div key={fieldKey} className="mb-3">
              <label className="form-label">
                {FormConfig.questions[fieldKey].label}
              </label>
              <input
                type="number"
                className="form-control"
                name={fieldKey}
                value={formData[fieldKey] || ""}
                onChange={handleChange}
                min="0"
                max="100"
                placeholder="Enter percentage"
                disabled={isMaxReached && !formData[fieldKey]}
              />
            </div>
          ))}
          {error && <p className="text-danger">{error}</p>}
          <button type="submit" className="btn btn-primary" disabled={error}>
            Submit
          </button>
        </form>
      </form>
    </div>
  );
};

export default Member;
