// BatterySwapDetails.js

import React from "react";

const BatterySwapDetails = ({ data }) => {
  const { name, openingHours, contact } = data;
  
  return (
    <div className="flex-1">
      <p className="text-lg font-semibold text-black-900 dark:text-black">{name}</p>
      <p className="mt-2 text-black-900 dark:text-black"><strong>Opening Hours:</strong> {openingHours}</p>
      <p className="mt-2 text-black-900 dark:text-black"><strong>Contact:</strong> {contact}</p>
    </div>
  );
};

export default BatterySwapDetails;
