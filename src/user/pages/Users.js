import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Renan da Silva",
      image:
        "https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png",
      places: 5
    }
  ];

  return <UsersList items={USERS} />;
};

export default Users;
