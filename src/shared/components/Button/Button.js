import React from "react";

const defaultLabel = "default label";

export default function Button({ onClick, label }) {
  return <button onClick={onClick}>{label || defaultLabel}</button>;
}
