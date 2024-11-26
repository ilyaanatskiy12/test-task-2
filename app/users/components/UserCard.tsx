import React from "react";
import Link from "next/link";
import Tooltip from "@/ui/components/Tooltip/Tooltip";
import { User } from "../interfaces";
import Button from "@/ui/components/Button/Button";
import DetailItem from "@/ui/components/DetailItem/DetailItem";

type Props = {
  user: User;
};

const UserCard = (props: Props) => {
  const { user } = props;
  return (
    <div
      key={user.id}
      className="bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition"
    >
      <h2 className="text-2xl font-bold mb-2">{user.name}</h2>
      <DetailItem label="Email" value={user.email} />
      <DetailItem label="Role" value={user.role} />

      <div className="flex justify-between">
        <Button>
          <Link href={`/users/${user.id}`}>Open</Link>
        </Button>

        <Tooltip text="Delete is currently unavailable">
          <Button disabled>Delete</Button>
        </Tooltip>
      </div>
    </div>
  );
};

export default UserCard;
