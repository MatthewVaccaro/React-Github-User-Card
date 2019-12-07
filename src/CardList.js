import React from "react";
import Card from "./Card";

const CardList = props => {
  return (
    <div>
      {props.data.followers
        ? props.data.followers.map(cv => {
            return <Card data={cv} key={cv.id} />;
          })
        : ""}
    </div>
  );
};

export default CardList;

// {props.data
//     ? props.data.map(cv => {
//         return <Todo item={cv} key={cv.id} toggle={props.toggle} />;
//       })
//     : "No Items"}
