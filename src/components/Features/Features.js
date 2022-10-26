import React from 'react';

const Features = ({feature}) => {
  return (
    <li className="flex">
      <span className="mr-1">
        <svg
          className="w-5 h-5 mt-px text-deep-purple-accent-400"
          stroke="currentColor"
          viewBox="0 0 52 52"
        >
          <polygon
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            points="29 13 14 29 25 29 23 39 38 23 27 23"
          />
        </svg>
      </span>
      {feature}
    </li>
  );
};

export default Features;