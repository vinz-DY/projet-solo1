import "../components/Kcard.css";
import React from "react";

const KCard = ({dramaIndex}) => {
  return (
    <div className="card">
      <div>
        <h1>{dramaIndex.dramaName}</h1>
      </div>
      <img className="screen" src={dramaIndex.dramaImage} alt={dramaIndex.dramaName} />
      <div>
        <p>
          {dramaIndex.dramaSynopsis}
        </p>
        <button className="check" >vu</button>
      </div>
    </div>
  );
};

export default KCard;

//ok 
