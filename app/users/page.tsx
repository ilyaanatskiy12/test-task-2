import React from "react";
import UsersList from "./components/UsersList";
import Search from "./components/Search";

export const revalidate = 3600;

type Props = {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
};

export default async function Users(props: Props) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";

  return (
    <>
      <Search />
      <UsersList query={query} />
    </>
  );
}
