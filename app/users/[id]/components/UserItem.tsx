import React from "react";
import { User } from "../../interfaces";

type Props = {
  user: User;
};

const UserItem = (props: Props) => {
  const { user } = props;
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">User Details</h1>
      <div>
        <p className="text-lg">
          <strong>Name:</strong> {user.name}
        </p>
        <p className="text-lg">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-lg">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="text-lg">
          <strong>ID:</strong> {user.id}
        </p>
      </div>
    </div>
  );
};

export default UserItem;
