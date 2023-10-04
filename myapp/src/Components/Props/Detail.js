import React from "react";

const Detail = ({ userName, age }) => {
  return (
    <div>
      <h2>Good Morning {userName}</h2>
      <p>Welcome to this Event</p>
      <p>Your Age is {age}</p>
    </div>
  );
};

export default Detail;
