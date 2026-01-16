import React from "react";

const Cocktails = () => {
  return (
    <div id="cocktails" className="text-white h-[500px] bg-black z-10">
      <div className="">
        <button
          type="button"
          className="bg-white text-black p-2 border rounded-2xl"
        >
          Best Cocktails
        </button>
        <h1>Where every detail matters -from muddle to garnish</h1>
      </div>
      <div>
        <p>
          Every cocktail we serve is a reflection of our obsession with detail —
          from the first muddle to the final garnish. That care is what turns a
          simple drink into something truly memorable.
        </p>
        <h1>4.5/5</h1>
        <p>More that +12000 customers</p>
      </div>
    </div>
  );
};

export default Cocktails;
