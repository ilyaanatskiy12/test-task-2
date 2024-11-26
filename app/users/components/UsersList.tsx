import React from "react";
import { User } from "../interfaces";
import UserCard from "./UserCard";
import { fetcher } from "@/utils/fetcher";

type Props = {
  query: string;
};

const UsersList = async (props: Props) => {
  const { query } = props;
  const allUsers: User[] = await fetcher(`/users`);

  // json-server does not return the user until we pass the FULL name
  const filteredUsers = allUsers.filter((user) =>
    user.name.toLowerCase().includes(query.toLowerCase())
  );

  if (!filteredUsers.length)
    return (
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
        No Users
      </h1>
    );

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
        User List
      </h1>
      <p className="text-lg mb-8 text-gray-500 dark:text-gray-400 text-center">
        Manage all users in the system with ease.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredUsers?.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UsersList;
