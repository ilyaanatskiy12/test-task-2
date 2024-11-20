import React from "react";
import { fetcher } from "@/utils/fetcher";
import { User } from "../interfaces";
import UserItem from "./components/UserItem";

type Params = {
  id: string;
};

type Props = {
  params: Promise<Params>;
};

const Page = async (props: Props) => {
  const { params } = props;
  const { id } = await params;
  const user: User = await fetcher(`/users/${id}`);

  return <UserItem user={user} />;
};

export default Page;