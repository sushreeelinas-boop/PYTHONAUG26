import React from "react";

function About({ children }) {
  return (
    <div className="mt-4">
      About Page
      <br />
      {children}
    </div>
  );
}

export default About;
