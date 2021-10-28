import React, { useState } from "react";
import { FaStar } from "react-icons/fa";

const createArray = (length) => [...Array(length)];

const Star = ({
  selected = false,
  onSelect = (f) => f,
  onLeaveSelection = (f) => f,
  onConfirm = (f) => f,
}) => (
  <FaStar
    color={selected ? "red" : "gray"}
    onClick={onConfirm}
    onMouseOver={onSelect}
    onMouseLeave={onLeaveSelection}
  />
);

export default function StarRating({ style = {}, totalStarts = 5, ...props }) {
  const [selectedStars, setSelectedStars] = useState(3);
  const [confirmedSelection, setConfirmedSelection] = useState(0);
  return (
    <div style={{ padding: "5px", ...style }} {...props}>
      {createArray(totalStarts).map((n, i) => (
        <Star
          key={i}
          selected={selectedStars > i}
          onSelect={() => setSelectedStars(i + 1)}
          onConfirm={() => setConfirmedSelection(selectedStars)}
          onLeaveSelection={() =>
            confirmedSelection
              ? setSelectedStars(confirmedSelection)
              : setSelectedStars(0)
          }
        />
      ))}
      <p>
        {selectedStars} of {totalStarts} Stars
      </p>
    </div>
  );
}
