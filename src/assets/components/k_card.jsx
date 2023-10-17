import "../components/Kcard.css";
import React from "react";
import { useState } from "react";

const KCard = ({ dramaIndex }) => {
  const [isVu, setIsVu] = useState(dramaIndex.isVu);
  const handleClickisVu = () => {
    setIsVu(!isVu);
  };
  const [text, setText] = useState(dramaIndex.text);
  const handleClicktext = () => {
    setText(!text);
  };

  const isVuClass = isVu ? "isVu" : "notIsVu";
  const aVoir = isVu ? "à voir" : "vu";
  const cardClass = text ? "card" : "card1";

  return (
    <div className={cardClass}>
      <div>
        <h1 className="policeTitle">{dramaIndex.dramaName}</h1>
      </div>
      <img
        className="screen"
        src={dramaIndex.dramaImage}
        alt={dramaIndex.dramaName}
      />
      <div className="text-container">
        <p onClick={handleClicktext}>{dramaIndex.dramaSynopsis}</p>
      </div>

      <button onClick={handleClickisVu} className={isVuClass}>
        {aVoir}
      </button>
    </div>
  );
};

export default KCard;
