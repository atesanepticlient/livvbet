import React from "react";

const Loader = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 414 414">
      <defs>
        <linearGradient
          id="preloader-gradient"
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
        >
          <stop offset="0" className="pre-logo__color" />
          <stop offset="0.1" className="pre-logo__color" />
          <stop offset="0.2" className="pre-logo__color" />
          <stop offset="0.3" className="pre-logo__color" />
          <stop offset="0.4" className="pre-logo__color" />
          <stop offset="0.5" className="pre-logo__color" />
          <stop offset="0.6" className="pre-logo__color" />
          <stop offset="0.7" className="pre-logo__color" />
          <stop offset="0.8" className="pre-logo__color" />
          <stop offset="0.9" className="pre-logo__color" />
          <stop offset="1" className="pre-logo__color" />
        </linearGradient>
      </defs>

      <path
        id="pre-outer"
        className="pre-logo__outer"
        d="M37,88H56c36.522-46.083,93.2-73,152-73S321.478,41.917,358,88h18A209.912,209.912,0,0,0,207,1C139.342,0.678,76.6,33.18,37,88Zm0,238H56c36.522,46.083,93.2,73,152,73s113.478-26.917,150-73h18a209.911,209.911,0,0,1-169,87C139.342,413.322,76.6,380.82,37,326Z"
      />
      <path
        id="pre-inner"
        className="pre-logo__inner"
        fill="#aaa"
        d="M98,53V71a173.121,173.121,0,0,0,0,272v18A188.225,188.225,0,0,1,98,53Zm218,0V71a173.121,173.121,0,0,1,0,272v18A188.225,188.225,0,0,0,316,53Z"
      />
      <path
        id="pre-logo"
        className="pre-logo__logo"
        fill="url(#preloader-gradient)"
        d="M118.357,275.994H71.736l20.189-74.55,4.683-11.295-12.358,11.01L70.533,213.89l-0.54-37.3,48.392-40.612h37.69Zm168.4-58.033-14.889-23.016L344,135.978l-67.189,0-27.58,24.1-0.093-.144-92.8,78.143-44.632,37.914L175.292,276l47.782-38.993,16.054,24.983c5.23,6.3,13.2,14,46,14h38.593l-36.919-58.06Zm-42.55-65.635L244,152C233.147,137.6,216.4,136,207.8,136.031c-2.6-.078-4.24-0.053-4.24-0.053H158.146l37.036,57.629Z"
      />
    </svg>
  );
};

export default Loader;
