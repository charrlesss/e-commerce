import React, { useState } from "react";

export default function RatingStar({ rating }) {
  return Array.from(Array(5), (e, i) => {
    return <IconStars key={i} logic={rating !== 0 && rating < i} />;
  });
}

const IconStars = ({ logic }) => {
  const [fill, setFill] = useState(logic);
  const handleClick = () => {
    setFill((d) => !d);
  };
  return (
    <svg
      height="10px"
      width="10px"
      version="1.1"
      viewBox="0 0 53.867 53.867"
      fill={fill ? "#FCAE1E " : "black"}
      onClick={handleClick}
    >
      <polygon
        points="26.934,1.318 35.256,18.182 53.867,20.887 40.4,34.013 43.579,52.549 26.934,43.798 
          10.288,52.549 13.467,34.013 0,20.887 18.611,18.182 "
      />
    </svg>
  );
};
