import React from "react";
import "../teams.css";
function TeamCard(props) {
  console.log(props);
  return (
    <div>
      <div className="flex">
        <div className="card">
          <div className="img-wrapper">
            <img className="image gray" src={props.image} alt="Avatar" />
            <div className="content fade">
              <div className="social">
                <a href={props.fb} target="_blank">
                  <img className="social-content" src="./facebook.svg" />
                </a>
                <a href={props.In} target="_blank">
                  <img className="social-content" src="./linkedIn.svg" />
                </a>
              </div>
            </div>
          </div>
          <div className="title">{props.name}</div>
        </div>
      </div>
    </div>
  );
}
export default TeamCard;
