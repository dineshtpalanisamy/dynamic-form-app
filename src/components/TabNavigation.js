import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const TabNavigation = ({ tabs, activeTab, setActiveTab }) => {
  return (
    <ul className="nav nav-tabs d-flex justify-content-center mb-4">
      {tabs.map((tab) => (
        <li className="nav-item" key={tab}>
          <button
            className={`nav-link ${activeTab === tab ? "active" : ""}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.replace(/([A-Z])/g, " $1").trim()} {/* Formats camelCase */}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TabNavigation;
