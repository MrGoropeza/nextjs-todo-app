import { Checkbox } from "@/components/shadcn/Checkbox";
import { Input } from "@/components/shadcn/Input";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/shadcn/Pagination";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/shadcn/Table";

export default function Home() {
  return (
    <main className="grid grid-cols-[auto_1fr_auto] gap-3 p-10">
      <Input placeholder="Search..." />

      <Table containerClassName="col-[1_/_3]">
        <TableCaption>Your To Do&apos;s</TableCaption>

        <TableHeader>
          <TableRow>
            <TableHead>
              <Checkbox />
            </TableHead>
            <TableHead>To Do</TableHead>
            <TableHead>Title</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>TODO-0001</TableCell>
            <TableCell>Title 1</TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <Pagination className="row-[3] col-[1_/_3]">
        <PaginationContent>
          <PaginationPrevious />

          <PaginationLink href="#">1</PaginationLink>

          <PaginationLink href="#" isActive>
            2
          </PaginationLink>

          <PaginationLink href="#">3</PaginationLink>

          <PaginationEllipsis />

          <PaginationNext />
        </PaginationContent>
      </Pagination>
    </main>
  );
}
