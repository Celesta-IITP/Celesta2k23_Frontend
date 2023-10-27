import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const TeamCard = ({ property1, className }) => {
  return (
    <div className={`team-card ${property1} ${className}`}>
      <img className="image" alt="Image" src={property1 === "name-and-title" ? "image-6344228.png" : "image.png"} />
      <div className="kirtan-jain">
        {property1 === "default" && <>Kirtan Jain</>}

        {property1 === "name-and-title" && (
          <>
            <div className="text-wrapper">Kirtan Jain</div>
            <div className="div">Media and Public Relations</div>
          </>
        )}
      </div>
    </div>
  );
};

TeamCard.propTypes = {
  property1: PropTypes.oneOf(["name-and-title", "default"]),
};
