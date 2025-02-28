import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import "../components/styles/PrimaryDetails.css";
import { FormConfig } from "../data/FormConfig";

const PrimaryDetails = ({ formData, handleInputChange }) => {
  return (
    <div className="container mt-2">
      <form className="container p-4 shadow rounded bg-light">
        <h3 className="mb-4">PRIMARY DETAILS</h3>
        <div className="row g-3">
          {FormConfig.sections.primaryDetails.map((fieldKey) => {
            const field = FormConfig.questions[fieldKey];

            return (
              <div className="col-md-6" key={fieldKey}>
                <label className="form-label">{field.label}</label>
                {field.type === "radio" ? (
                  <div className="d-flex gap-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        name={fieldKey}
                        className="form-check-input"
                        id={`${fieldKey}-male`} // Fixed JSX syntax
                        value="Male"
                        checked={formData[fieldKey] === "Male"}
                        onChange={(e) =>
                          handleInputChange(fieldKey, e.target.value)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${fieldKey}-male`} // Fixed JSX syntax
                      >
                        Male
                      </label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        name={fieldKey}
                        className="form-check-input"
                        id={`${fieldKey}-female`} // Fixed JSX syntax
                        value="Female"
                        checked={formData[fieldKey] === "Female"}
                        onChange={(e) =>
                          handleInputChange(fieldKey, e.target.value)
                        }
                      />
                      <label
                        className="form-check-label"
                        htmlFor={`${fieldKey}-female`} // Fixed JSX syntax
                      >
                        Female
                      </label>
                    </div>
                  </div>
                ) : (
                  <input
                    type={field.type}
                    value={formData[fieldKey] || ""}
                    onChange={(e) =>
                      handleInputChange(fieldKey, e.target.value)
                    }
                    className="form-control"
                    id={fieldKey}
                    placeholder={field.label}
                  />
                )}
              </div>
            );
          })}
        </div>
      </form>
    </div>
  );
};

export default PrimaryDetails;
