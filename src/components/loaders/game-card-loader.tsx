import React from "react";
import { GameLoader } from "../GameCards";

const GameCardLoader = ({ length = 10 }: { length: number }) => {
  const array = Array.from({ length });

  return (
    <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
      {array.map((_, i) => (
        <GameLoader key={i} />
      ))}
    </div>
  );
};

export default GameCardLoader;
