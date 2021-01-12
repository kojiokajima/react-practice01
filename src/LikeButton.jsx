import React, { useState, useEffect } from "react";

const LikeButton = (props) => {
  const [count, counter] = useState(0);
  const [limit, release] = useState(true);

  const countUp = () => {
    counter(count + 1);
  };

  useEffect(() => {
    document.getElementById("counter").addEventListener("click", countUp);
    if (count >= 10) {
      counter(0);
    }
    return () => {
      document.getElementById("counter").removeEventListener("click", countUp);
    };
  }, [limit]);

  return (
    <>
      <button id={"counter"}>Likes: {count}</button>
      <button onClick={() => release(!limit)}>wanna press like more</button>
    </>
  );
};

export default LikeButton;
