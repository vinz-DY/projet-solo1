import React from "react";
import K_card from "./k_card"; 

const DramaList = ({dramasItem}) => {
  return (
    <div className="drama-list">
      {dramasItem.map((dramaIndex) => (
        <K_card key={dramaIndex.dramaName} dramaIndex ={dramaIndex}
          
        />
      ))}
    </div>
  );
};

export default DramaList;

//ok 
