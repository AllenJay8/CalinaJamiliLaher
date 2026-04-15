import type { FC } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

interface UserListProps {
  onAddUser: () => void;
}

interface User {
  user_id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  suffix_name: string;
  gender: string;
  address: string;
}

const users: User[] = [
  {
    user_id: 1,
    first_name: "John",
    middle_name: "",
    last_name: "Doe",
    suffix_name: "",
    gender: "Male",
    address: "Roxas City",
  },
  {
    user_id: 2,
    first_name: "Mikha",
    middle_name: "Bini",
    last_name: "Lim",
    suffix_name: "",
    gender: "Female",
    address: "Iloilo City",
  },
  {
    user_id: 3,
    first_name: "Johnathan",
    middle_name: "Baba Yaga",
    last_name: "Wick",
    suffix_name: "Jr.",
    gender: "Prefer Not to Say",
    address: "Lawaan",
  },
];

const UserList: FC<UserListProps> = ({ onAddUser }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
        <Table>
          <caption className="mb-4">
            <div className="border-b border-gray-100">
              <div className="flex justify-end p-4">
                <button
                  type="button"
                  className="cursor-pointer rounded-lg bg-blue-600 px-4 py-2 font-medium text-white shadow-lg transition hover:bg-blue-700"
                  onClick={onAddUser}
                >
                  Add User
                </button>
              </div>
            </div>
          </caption>
          <TableHeader className="sticky top-0 border-b border-gray-200 bg-blue-600 text-xs text-white">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 text-center font-medium">
                No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                First Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Middle Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Last Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Suffix Name
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Gender
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Address
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Action
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 text-sm text-gray-500">
            {users.map((user) => (
              <TableRow className="hover:bg-gray-100" key={user.user_id}>
                <TableCell className="px-4 py-3 text-center">
                  {user.user_id}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.first_name}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.middle_name}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.last_name}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.suffix_name}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.gender}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {user.address}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex gap-4">
                    <button
                      type="button"
                      className="cursor-pointer font-medium text-green-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      type="button"
                      className="cursor-pointer font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default UserList;