import "../components/Kcard.css";
import React from "react";
import { useState } from "react";

const KCard = ({ dramaIndex }) => {
  const [isVu, setIsVu] = useState(dramaIndex.isVu);
  const handleClickisVu = () => {
    setIsVu(!isVu);
  };
  const isVuClass = isVu ? "isVu" : "notIsVu";

  return (
    <div className="card">
      <div>
        <h1>{dramaIndex.dramaName}</h1>
      </div>
      <img
        className="screen"
        src={dramaIndex.dramaImage}
        alt={dramaIndex.dramaName}
      />
      <div className="text-container" >
        <p>{dramaIndex.dramaSynopsis}</p>
      </div>

      <button onClick={handleClickisVu} className={isVuClass}>
        vu
      </button>
    </div>
  );
};

export default KCard;
