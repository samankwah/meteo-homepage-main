import React from "react";

const AlertBanner = ({ message }) => (
  <div className="bg-red-500 text-white p-4 text-center">
    <p className="font-bold">Weather Alert: {message}</p>
  </div>
);

export default AlertBanner;
