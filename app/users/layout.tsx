import Link from "next/link";

const UsersLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <nav className="bg-blue-500 p-4">
        <ul className="flex space-x-4">
          <li>
            <Link className="hover:underline" href="/users">
              Users
            </Link>
          </li>
        </ul>
      </nav>
      <main className="p-4">{children}</main>
    </div>
  );
};
export default UsersLayout;
