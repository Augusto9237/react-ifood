import React from "react";

import "./style.css";

export default function Button({ children, onclick }) {
  return (
    <button className="button-container" onClick={onclick}>
      {children}
    </button>
  );
}
