import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { FixedSizeList as List } from "react-window";
import { selectUser } from "../features/usersSlice";
import "./UserList.css";

const UserItem = ({ index, style, data }) => {
  const dispatch = useDispatch();
  const user = data[index];

  return (
    <div
      key={user.id}
      onClick={() => dispatch(selectUser(user))}
      style={style}
      className="user-item"
    >
      {user.name} {user.surname}
    </div>
  );
};

const UserList = () => {
  const users = useSelector((state) => state.users.users);
  const [listHeight, setListHeight] = useState(window.innerHeight - 100);

  useEffect(() => {
    const handleResize = () => {
      setListHeight(window.innerHeight - 100);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="user-list-container">
      <List
        height={listHeight}
        itemCount={users.length}
        itemSize={40}
        width={300}
        itemData={users}
      >
        {UserItem}
      </List>
    </div>
  );
};

export default UserList;
