import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const PlayButton: React.FC<ButtonProps> = ({ className, ...props }) => {
  return (
    <button className={` ${className}`} {...props}>
      <svg
        width={80}
        height={90}
        id="play"
        viewBox="0 0 163 163"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <g fill="none">
          <g transform="translate(2.000000, 2.000000)" strokeWidth="4">
            <path
              d="M10,80 C10,118.107648 40.8923523,149 79,149 C117.107648,149 148,118.107648 148,80 C148,41.8923523 117.107648,11 79,11"
              id="lineOne"
              stroke="#fff"
            />
            <path
              d="M105.9,74.4158594 L67.2,44.2158594 C63.5,41.3158594 58,43.9158594 58,48.7158594 L58,109.015859 C58,113.715859 63.4,116.415859 67.2,113.515859 L105.9,83.3158594 C108.8,81.1158594 108.8,76.6158594 105.9,74.4158594 Z"
              id="triangle"
              stroke="#FCCD20"
            />
            <path
              d="M159,79.5 C159,35.5933624 123.406638,0 79.5,0 C35.5933624,0 0,35.5933624 0,79.5 C0,123.406638 35.5933624,159 79.5,159"
              id="lineTwo"
              stroke="#FCCD20"
            />
          </g>
        </g>
      </svg>
    </button>
  );
};

export default PlayButton;
