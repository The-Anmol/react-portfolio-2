import React from "react";

export default function Input({ type, placeholder, state, setState }) {
  return (
    <input
      className="p-3 bg-gray-700 rounded-lg outline-none focus:border-b focus:valid:border-b-green-400 focus:invalid:border-b-red-400"
      type={type}
      placeholder={placeholder}
      value={state}
      onChange={setState}
    />
  );
}
