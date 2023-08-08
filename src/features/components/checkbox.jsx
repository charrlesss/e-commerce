import React from "react";

export default function Checkbox({ check, onChange, className }) {
  return (
    <input
      type="checkbox"
      className={` cursor-pointer w-[13px] h-[13px] rounded-full ${className}`}
      checked={check}
      onChange={onChange}
    />
  );
}
