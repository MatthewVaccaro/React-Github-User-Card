import React from "react";

const Card = props => {
  return (
    <div className="userCard">
      <img src={props.data.avatar_url} />
      <div className="usercontent">
        <h2>{props.data.login}</h2>
        <p>Followers: {props.data.followers}</p>
      </div>
    </div>
  );
};

export default Card;
