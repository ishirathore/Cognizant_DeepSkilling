import React from "react";

function OfficeSpace() {
  // Single office object
  const office = {
    name: "Tech Hub",
    rent: 55000,
    address: "Sector 62, Noida",
    image: "https://via.placeholder.com/300x200" // sample image
  };

  // List of offices
  const offices = [
    { name: "Startup Garage", rent: 45000, address: "Koramangala, Bangalore" },
    { name: "Corporate Tower", rent: 75000, address: "Cyber City, Gurgaon" },
    { name: "Innovation Lab", rent: 60000, address: "Hitech City, Hyderabad" }
  ];

  return (
    <div>
      {/* Heading */}
      <h1>Office Space Rental App</h1>

      {/* Image */}
      <img src={office.image} alt="Office Space" />

      {/* Single Office Details */}
      <h2>{office.name}</h2>
      <p style={{ color: office.rent < 60000 ? "red" : "green" }}>
        Rent: {office.rent}
      </p>
      <p>Address: {office.address}</p>

      {/* List of Offices */}
      <h2>Available Offices</h2>
      {offices.map((o, index) => (
        <div key={index}>
          <h3>{o.name}</h3>
          <p style={{ color: o.rent < 60000 ? "red" : "green" }}>
            Rent: {o.rent}
          </p>
          <p>{o.address}</p>
        </div>
      ))}
    </div>
  );
}

export default OfficeSpace;
