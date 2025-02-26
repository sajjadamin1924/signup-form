import React from "react";
import Card from "./Card";

const Cardcontainer = () => {
  return (
    <div className="w-3/4 bg-white p-6 rounded-xl">
      <div>
        <h1 className="px-4 text-2xl">28 Modules in English</h1>
      </div>
      <div className="w-full max-h-[800px] overflow-y-auto ">
        <div className="grid grid-flow-row grid-rows-1 grid-cols-4 gap-6 mt-4 px-6  ">
          {filteredCards.length > 0 ? (
            filteredCards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                button1={card.button1}
                time={card.time}
                button2={card.button2}
              />
            ))
          ) : (
            <p className="text-3xl">No Data</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cardcontainer;
