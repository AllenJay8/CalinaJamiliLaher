import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../../components/Table";

const genders = [
  { gender_id: 1, gender: "Male" },
  { gender_id: 2, gender: "Female" },
  { gender_id: 3, gender: "Prefer Not to Say" },
];

const GenderList = () => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 bg-white">
      <div className="max-w-full max-h-[calc(100vh)] overflow-x-auto">
        <Table>
          <TableHeader className="sticky top-0 border-b border-gray-200 bg-blue-600 text-xs text-white">
            <TableRow>
              <TableCell isHeader className="px-5 py-3 text-center font-medium">
                No.
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Gender
              </TableCell>
              <TableCell isHeader className="px-5 py-3 text-start font-medium">
                Action
              </TableCell>
            </TableRow>
          </TableHeader>
          <TableBody className="divide-y divide-gray-100 text-sm text-gray-500">
            {genders.map((gender) => (
              <TableRow className="hover:bg-gray-100" key={gender.gender_id}>
                <TableCell className="px-4 py-3 text-center">
                  {gender.gender_id}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  {gender.gender}
                </TableCell>
                <TableCell className="px-4 py-3 text-start">
                  <div className="flex gap-4">
                    <Link
                      to="/gender/edit"
                      className="font-medium text-green-600 hover:underline"
                    >
                      Edit
                    </Link>
                    <Link
                      to="/gender/delete"
                      className="font-medium text-red-600 hover:underline"
                    >
                      Delete
                    </Link>
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

export default GenderList;