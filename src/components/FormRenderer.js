import React from "react";
import PrimaryDetails from "./PrimaryDetails";
import Others from "./Others";
import Address from "./Address";
import Member from "./Member";

const FormRenderer = ({ section, formData, handleInputChange }) => {
  switch (section) {
    case "primaryDetails":
      return (
        <PrimaryDetails
          formData={formData}
          handleInputChange={handleInputChange}
        />
      );
    case "otherDetails":
      return (
        <Others formData={formData} handleInputChange={handleInputChange} />
      );
    case "addressDetails":
      return (
        <Address formData={formData} handleInputChange={handleInputChange} />
      );
    case "membersAllocation":
      return (
        <Member formData={formData} handleInputChange={handleInputChange} />
      );
    default:
      return <div>Select a section</div>;
  }
};

export default FormRenderer;
