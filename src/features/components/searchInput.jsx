import { useState } from "react";

export default function SearchInput() {
  const [isMyInputFocused, setIsMyInputFocused] = useState(false);
  return (
    <div className=" flex items-center">
      <div
        className={`${
          isMyInputFocused ? "border-t-2  border-l-2 border-b-2" : ""
        } h-[35px] px-1 flex items-center border-t border-b border-l border-indigo-800 `}
        style={{
          borderTopLeftRadius: "3px",
          borderBottomLeftRadius: "3px",
        }}
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 -0.5 21 21"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g
            id="Page-1"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="Dribbble-Light-Preview"
              transform="translate(-299.000000, -280.000000)"
              fill="#000000"
            >
              <g id="icons" transform="translate(56.000000, 160.000000)">
                <path
                  d="M264,138.586 L262.5153,140 L258.06015,135.758 L259.54485,134.343 L264,138.586 Z M251.4,134 C247.9266,134 245.1,131.309 245.1,128 C245.1,124.692 247.9266,122 251.4,122 C254.8734,122 257.7,124.692 257.7,128 C257.7,131.309 254.8734,134 251.4,134 L251.4,134 Z M251.4,120 C246.7611,120 243,123.582 243,128 C243,132.418 246.7611,136 251.4,136 C256.0389,136 259.8,132.418 259.8,128 C259.8,123.582 256.0389,120 251.4,120 L251.4,120 Z"
                  id="search_left-[#1504]"
                ></path>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <input
        placeholder="Search.."
        onBlur={() => setIsMyInputFocused(false)}
        onFocus={() => setIsMyInputFocused(true)}
        className="text-sm px-3 group w-full h-[35px]  outline-none border-t border-b border-r border-indigo-800 focus:border-t-2  focus:border-r-2 focus:border-b-2"
        style={{
          borderTopRightRadius: "3px",
          borderBottomRightRadius: "3px",
        }}
      />
    </div>
  );
}
