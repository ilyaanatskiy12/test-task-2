import React from "react";
import { fetcher } from "@/utils/fetcher";
import { User } from "./interfaces";
import UsersList from "./components/UsersList";

export const revalidate = 3600;

export default async function Users() {
  const users: User[] = await fetcher("/users");

  return <UsersList users={users} />;
}
