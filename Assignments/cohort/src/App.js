import React from "react";
import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <h1>My Academy Cohorts Dashboard</h1>
      <CohortDetails 
        name="React Cohort" 
        status="ongoing" 
        startDate="01-07-2026" 
        endDate="30-09-2026" 
      />
      <CohortDetails 
        name="Java Cohort" 
        status="completed" 
        startDate="01-04-2026" 
        endDate="30-06-2026" 
      />
    </div>
  );
}

export default App;
