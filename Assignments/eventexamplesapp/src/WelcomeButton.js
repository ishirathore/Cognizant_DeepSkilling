import React from "react";

function WelcomeButton() {
  const sayMessage = (msg) => {
    alert("Message: " + msg);
  };

  return (
    <div>
      <button onClick={() => sayMessage("Welcome")}>Say Welcome</button>
    </div>
  );
}

export default WelcomeButton;
