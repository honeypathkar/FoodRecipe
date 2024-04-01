import React from "react";
import spinner from "./Images/loading.gif";

export default function Spinner() {
  return (
    <div className="spinner-container">
      <img src={spinner} alt="spinner" className="spinner-img" />
      <style jsx="true">{`
        .spinner-container {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 70vh;
        }

        .spinner-img {
          max-width: 100%
          height: auto; /* Adjust size as needed */
        }

        @media (max-width: 500px) {
          .spinner-img {
            width: 50%; /* Adjust size for smaller screens */
            height: 25%; /* Adjust size for smaller screens */
          }
        }
      `}</style>
    </div>
  );
}
