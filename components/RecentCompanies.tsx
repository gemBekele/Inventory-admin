import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./ui/table";
import { Badge } from "./ui/badge";
import { Company } from "@/lib/data";

interface RecentCompaniesProps {
  companies: Company[];
}

export default function RecentCompanies({ companies }: RecentCompaniesProps) {
  return (
    <div className="bg-white shadow-sm rounded-lg p-6">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">
        Recent Companies
      </h2>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Company</TableHead>
            <TableHead>Plan</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Joined</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {companies.map((company, index) => (
            <TableRow key={index}>
              <TableCell>{company.name}</TableCell>
              <TableCell>{company.plan}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    company.status === "Active"
                      ? "success"
                      : company.status === "Trial"
                      ? "warning"
                      : "destructive"
                  }
                >
                  {company.status}
                </Badge>
              </TableCell>
              <TableCell>{company.joined}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
