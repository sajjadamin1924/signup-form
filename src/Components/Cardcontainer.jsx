import React from "react";
import Card from "./Card";

const Cardcontainer = ({ filteredCards }) => {
  return (
    <div className="w-3/4 bg-white p-4 rounded-xl">
      <div>
        <p className="px-4 text-xl font-bold">
          {filteredCards.length} Modules available in English
        </p>
      </div>
      <div className="w-full max-h-[800px] overflow-y-auto no-scrollbar mt-6">
        <div className="grid grid-flow-row grid-rows-1 grid-cols-3 gap-6 mt-2 px-4">
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
