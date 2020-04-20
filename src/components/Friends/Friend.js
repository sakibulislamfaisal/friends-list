import React from "react";
import "./Friend.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const Friend = (props) => {
  //console.log(props.friend);
  //console.log(props.handleAddFriend);
  const { id, name, salary, image, email, age, occupation } = props.friend;
  return (
    <div className="friend">
      <div>
        <img src={image} alt="" />
      </div>
      <div className="friend-info">
        <strong>Email : {email}</strong>
        <br />
        <strong>Name :{name}</strong>
        <br />
        <strong>Age :{age}</strong>
        <br />
        <strong>Occupation :{occupation}</strong>
        <br />
        <strong>Salary :${salary}</strong>
        <br />
        <button
          className="btn btn-success"
          onClick={() => props.handleAddFriend(props.friend)}
        >
          <FontAwesomeIcon className="icon" icon={faUserFriends} />
          Add To Friend
        </button>
      </div>
    </div>
  );
};

export default Friend;
