"use client";

import React from "react";
import { User } from "../../interfaces";
import Avatar from "@/ui/components/Avatar/Avatar";
import Tooltip from "@/ui/components/Tooltip/Tooltip";
import Button from "@/ui/components/Button/Button";
import { useRouter } from "next/navigation";
import DetailItem from "@/ui/components/DetailItem/DetailItem";

type Props = {
  user: User;
};

const UserItem = (props: Props) => {
  const { user } = props;
  const { back } = useRouter();

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-6 text-gray-900 dark:text-gray-100 text-center">
        User Details
      </h1>
      <div className="max-w-md mx-auto bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition">
        <div className="flex items-center gap-4 mb-4">
          <Avatar name={user.name} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            {user.name}
          </h2>
        </div>
        <div className="space-y-3">
          <DetailItem label="Email" value={user.email} />
          <DetailItem label="Role" value={user.role} />
          <DetailItem label="ID" value={user.id} />
        </div>
        <div className="mt-6 flex justify-center gap-4">
          <Button onClick={back}>Go Back</Button>
          <Tooltip text="Editing user is not available yet">
            <Button disabled>Edit User</Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
};

export default UserItem;
