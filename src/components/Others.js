import React from "react";
// import "../components/styles/PrimaryDetails.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FormConfig } from "../data/FormConfig";
// import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const Others = ({ formData, handleInputChange }) => {
  //   const [salarySlip, setSalarySlip] = useState(null);
  //   const [error, setError] = useState("");

  //   // Allowed file types
  //   const allowedExtensions = ["pdf", "jpeg", "jpg", "png"];

  //   // Handle file change
  //   const handleFileChange = (e) => {
  //     const file = e.target.files[0];
  //     if (file) {
  //       const fileExtension = file.name.split(".").pop().toLowerCase();
  //       if (!allowedExtensions.includes(fileExtension)) {
  //         setError("Invalid file type. Allowed: PDF, JPEG, JPG, PNG.");
  //         setSalarySlip(null);
  //       } else {
  //         setError("");
  //         setSalarySlip(file);
  //       }
  //     }
  //   };

  return (
    <div className="container mt-2">
      <form className="container p-4 shadow rounded bg-light">
        <div className="container mt-3">
          <h3 className="mb-4">OTHER DETAILS</h3>
          <div className="row">
            {FormConfig.sections.otherDetails.map((fieldKey) => {
              const field = FormConfig.questions[fieldKey];
              return (
                <div key={fieldKey} className="col-md-6 mb-3">
                  <label className="form-label">{field.label}</label>
                  {field.type === "select" ? (
                    <select
                      className="form-select"
                      value={formData[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldKey, e.target.value)
                      }
                    >
                      <option value="">Select {field.label}</option>
                      {field.options &&
                        field.options.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      value={formData[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldKey, e.target.value)
                      }
                      className="form-control"
                      placeholder={field.label}
                    />
                  )}
                </div>
              );
            })}

            {/* Conditional Salary Slip Upload */}
            {formData.annualIncome > 50000 && (
              <div className="col-md-6 mb-3">
                <label className="form-label">Upload Salary Slip</label>
                <input
                  type="file"
                  accept=".pdf,.jpeg,.jpg,.png"
                  className="form-control"
                  onChange={(e) => {
                    handleInputChange("salarySlip", e.target.value);
                  }}
                />
              </div>
            )}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Others;
