import React, { useState } from "react";
import fakeData from "../../dummydata/fakeData";
import "./Allfriends.css";
import Friend from "../Friends/Friend";
import Request from "../Request/Request";

const Allfriends = () => {
  //console.log(fakeData);
  const allFriend = fakeData.slice(0, 11);
  const [friend, setFriend] = useState(allFriend);
  const [request, setRequest] = useState([]);

  const handleAddFriend = (friend) => {
    //console.log("friend added", friend);
    const newRequest = [...request, friend];
    setRequest(newRequest);
  };

  return (
    <div className="friend-list-container">
      <div className="friend-list">
        <h1 style={{ marginLeft: "330px" }}>All Friends List:</h1>
        <br />
        {friend.map((friend) => (
          <Friend
            key={friend.id}
            friend={friend}
            handleAddFriend={handleAddFriend}
          ></Friend>
        ))}
      </div>

      <div className="friend-request">
        <Request request={request}></Request>
      </div>
    </div>
  );
};

export default Allfriends;
