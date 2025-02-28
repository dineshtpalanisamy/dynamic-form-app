import React, { useEffect, useState } from "react";
import TabNavigation from "./TabNavigation";
import FormRenderer from "./FormRenderer";
import { FormConfig } from "../data/FormConfig";
import { saveToLocalStorage, getFromLocalStorage } from "../utils/localStorage";

const FormContainer = () => {
  const sections = Object.keys(FormConfig.sections);
  const [activeTab, setActiveTab] = useState(sections[0]);
  const [formData, setFormData] = useState(
    getFromLocalStorage("formData") || {}
  );

  useEffect(() => {
    saveToLocalStorage("formData", formData);
  }, [formData]);

  const handleInputChange = (name, value) => {
    setFormData((prev) => {
      const updatedData = { ...prev, [name]: value };
      saveToLocalStorage("formData", updatedData); // Immediate update
      return updatedData;
    });
  };

  return (
    <div>
      <TabNavigation
        tabs={sections}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
      />
      <FormRenderer
        section={activeTab}
        formData={formData}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default FormContainer;
