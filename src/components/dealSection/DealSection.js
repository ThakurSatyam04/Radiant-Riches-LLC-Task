import React from "react";
import './DealSection.css'
import DealCards from "./Dealcards/DealCards";

const DealSection = () => {
  return (
    <>
      <div className="deal-container">
        <h1>Related deals you might like for</h1>
        <DealCards/>
      </div>
    </>
  );
};

export default DealSection;
