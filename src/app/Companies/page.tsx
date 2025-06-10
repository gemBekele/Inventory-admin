import { Header } from "@/components/hearder";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const companies = [
  {
    name: "Acme Corporation",
    email: "john@acme.com",
    owner: "John Smith",
    plan: "Premium",
    status: "Active",
    joined: "Apr 28, 2025",
  },
  {
    name: "Globex Inc",
    email: "sarah@globex.com",
    owner: "Sarah Johnson",
    plan: "Premium",
    status: "Active",
    joined: "Apr 26, 2025",
  },
  {
    name: "Wayne Enterprises",
    email: "thomas@wayne.com",
    owner: "Thomas Wayne",
    plan: "Premium",
    status: "Trial",
    joined: "Apr 24, 2025",
  },
  {
    name: "Stark Industries",
    email: "tony@stark.com",
    owner: "Tony Stark",
    plan: "Premium",
    status: "Overdue",
    joined: "Apr 20, 2025",
  },
  {
    name: "Umbrella Corp",
    email: "albert@umbrella.com",
    owner: "Albert Wesker",
    plan: "Premium",
    status: "Active",
    joined: "Apr 18, 2025",
  },
  {
    name: "Cyberdyne Systems",
    email: "miles@cyberdyne.com",
    owner: "Miles Dyson",
    plan: "Premium",
    status: "Suspended",
    joined: "Apr 15, 2025",
  },
  {
    name: "Initech",
    email: "bill@initech.com",
    owner: "Bill Lumbergh",
    plan: "Premium",
    status: "Active",
    joined: "Apr 12, 2025",
  },
  {
    name: "LexCorp",
    email: "lex@lexcorp.com",
    owner: "Lex Luthor",
    plan: "Premium",
    status: "Active",
    joined: "Apr 10, 2025",
  },
  {
    name: "Oscorp Industries",
    email: "norman@oscorp.com",
    owner: "Norman Osborn",
    plan: "Premium",
    status: "Trial",
    joined: "Apr 8, 2025",
  },
  {
    name: "Massive Dynamic",
    email: "nina@massive.com",
    owner: "Nina Sharp",
    plan: "Premium",
    status: "Active",
    joined: "Apr 5, 2025",
  },
];

function getStatusBadge(status: string) {
  switch (status) {
    case "Active":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-green-100">
          Active
        </Badge>
      );
    case "Trial":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">
          Trial
        </Badge>
      );
    case "Overdue":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Overdue
        </Badge>
      );
    case "Suspended":
      return (
        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
          Suspended
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function Companies() {
  return (
    <div className="bg-gray-50">
      <Header title="Company Management" subtitle="Welcome back, Admin User" />

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-md">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                All Companies
              </h2>
              <div className="flex items-center space-x-4">
                <Input placeholder="Search companies..." className="w-64" />
                <Button className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Company
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      COMPANY
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      OWNER
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      PLAN
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      JOINED
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {companies.map((company, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-2 px-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {company.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {company.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-gray-900">
                        {company.owner}
                      </td>
                      <td className="py-2 px-4 text-gray-600">
                        {company.plan}
                      </td>
                      <td className="py-2 px-4">
                        {getStatusBadge(company.status)}
                      </td>
                      <td className="py-2 px-4 text-gray-600">
                        {company.joined}
                      </td>
                      <td className="py-2 px-4">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem>View Details</DropdownMenuItem>
                            <DropdownMenuItem>Edit Company</DropdownMenuItem>
                            <DropdownMenuItem>Suspend</DropdownMenuItem>
                            <DropdownMenuItem className="text-red-600">
                              Delete
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing 1 to 10 of 10 entries
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-600">10 / page</span>
                  <Select defaultValue="10">
                    <SelectTrigger className="w-20 h-8">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="10">10</SelectItem>
                      <SelectItem value="25">25</SelectItem>
                      <SelectItem value="50">50</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex items-center space-x-2">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    disabled
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-gray-600">Page 1 of 1</span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-8 w-8"
                    disabled
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
