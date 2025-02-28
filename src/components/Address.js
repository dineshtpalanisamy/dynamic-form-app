import React, { useState } from "react";
import { Form, Row, Col } from "react-bootstrap";
import { FormConfig } from "../data/FormConfig";

const Address = ({ formData, handleInputChange }) => {
  const [selectedState, setSelectedState] = useState("");

  // Get districts dynamically from FormConfig based on selected state
  const districtOptions = selectedState
    ? FormConfig.questions.district.options[selectedState] || []
    : [];

  return (
    <div className="container mt-2">
      <form className="container p-4 shadow rounded bg-light">
        <h3 className="mb-4">ADDRESS DETAILS</h3>

        <Row>
          {FormConfig.sections.addressDetails.map((fieldKey) => {
            const field = FormConfig.questions[fieldKey];
            return (
              <Col md={6} key={fieldKey} className="mb-3">
                <Form.Group controlId={fieldKey}>
                  <Form.Label>{field.label}</Form.Label>
                  {field.type === "select" ? (
                    <Form.Select
                      value={formData[fieldKey] || ""}
                      onChange={(e) => {
                        handleInputChange(fieldKey, e.target.value);
                        if (fieldKey === "state")
                          setSelectedState(e.target.value);
                      }}
                    >
                      <option value="">Select {field.label}</option>
                      {fieldKey === "state"
                        ? field.options.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))
                        : fieldKey === "district"
                        ? districtOptions.map((option, index) => (
                            <option key={index} value={option}>
                              {option}
                            </option>
                          ))
                        : null}
                    </Form.Select>
                  ) : (
                    <Form.Control
                      type={field.type}
                      placeholder={`Enter ${field.label}`} // Fixed JSX syntax
                      value={formData[fieldKey] || ""}
                      onChange={(e) =>
                        handleInputChange(fieldKey, e.target.value)
                      }
                    />
                  )}
                </Form.Group>
              </Col>
            );
          })}
        </Row>
      </form>
    </div>
  );
};

export default Address;
