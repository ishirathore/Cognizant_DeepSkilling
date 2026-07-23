import React, { useState } from "react";

function CurrencyConvertor() {
  const [rupees, setRupees] = useState("");
  const [euro, setEuro] = useState("");

  const handleSubmit = () => {
    const converted = (parseFloat(rupees) / 90).toFixed(2); // assume 1 Euro = 90 INR
    setEuro(converted);
  };

  return (
    <div>
      <h2>Currency Convertor</h2>
      <input
        type="number"
        value={rupees}
        onChange={(e) => setRupees(e.target.value)}
        placeholder="Enter Rupees"
      />
      <button onClick={handleSubmit}>Convert</button>
      {euro && <p>{rupees} INR = {euro} EUR</p>}
    </div>
  );
}

export default CurrencyConvertor;
