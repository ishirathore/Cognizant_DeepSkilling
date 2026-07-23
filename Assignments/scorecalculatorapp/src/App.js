import React from "react";
import CalculateScore from "./Components/CalculateScore";

function App() {
  return (
    <div>
      <h1>Welcome to Student Management Portal</h1>
      <CalculateScore 
        name="Ishika" 
        school="GLA University" 
        total={450} 
        goal={5} 
      />
    </div>
  );
}

export default App;
