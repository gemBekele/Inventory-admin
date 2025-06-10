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

const admins = [
  {
    name: "Jane Smith",
    email: "jane@invtrackpro.com",
    role: "Super Admin",
    status: "Active",
    lastActive: "Today, 12:45 PM",
  },
  {
    name: "Robert Johnson",
    email: "robert@invtrackpro.com",
    role: "Support Admin",
    status: "Active",
    lastActive: "Today, 10:30 AM",
  },
  {
    name: "Emily Davis",
    email: "emily@invtrackpro.com",
    role: "Billing Admin",
    status: "Active",
    lastActive: "Yesterday, 3:20 PM",
  },
  {
    name: "Michael Brown",
    email: "michael@invtrackpro.com",
    role: "Support Admin",
    status: "Active",
    lastActive: "Yesterday, 1:05 PM",
  },
  {
    name: "Patricia Miller",
    email: "patricia@invtrackpro.com",
    role: "Billing Admin",
    status: "Active",
    lastActive: "Apr 27, 2025, 5:10 PM",
  },
  {
    name: "James Wilson",
    email: "james@invtrackpro.com",
    role: "Super Admin",
    status: "Inactive",
    lastActive: "Apr 24, 2025, 9:45 AM",
  },
  {
    name: "Linda Martinez",
    email: "linda@invtrackpro.com",
    role: "Support Admin",
    status: "Active",
    lastActive: "Apr 23, 2025, 2:30 PM",
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
    case "Inactive":
      return (
        <Badge className="bg-gray-100 text-gray-800 hover:bg-gray-100">
          Inactive
        </Badge>
      );
    case "Super Admin":
      return (
        <Badge className="bg-purple-100 text-purple-800 hover:bg-gray-100">
          Inactive
        </Badge>
      );
    case "Billing Admin":
      return (
        <Badge className="bg-green-100 text-green-800 hover:bg-gray-100">
          Inactive
        </Badge>
      );
    case "Support Admin":
      return (
        <Badge className="bg-blue-100 text-blue-800 hover:bg-gray-100">
          Inactive
        </Badge>
      );

    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function AdminManagement() {
  return (
    <div className="bg-gray-50">
      <Header title="Admin Management" subtitle="Welcome back, Admin User" />

      <div className="p-6">
        <div className="bg-white border border-gray-200 rounded-md">
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">
                Admin Users
              </h2>
              <div className="flex items-center space-x-4">
                <Input placeholder="Search admins..." className="w-64" />
                <Button className="bg-gray-900 hover:bg-gray-800">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Admin
                </Button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ADMIN
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ROLE
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      STATUS
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      LAST ACTIVE
                    </th>
                    <th className="text-left py-3 px-4 text-xs font-medium text-gray-500 uppercase tracking-wider">
                      ACTIONS
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {admins.map((admin, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-100 hover:bg-gray-50"
                    >
                      <td className="py-2 px-4">
                        <div>
                          <div className="font-medium text-gray-900">
                            {admin.name}
                          </div>
                          <div className="text-sm text-gray-500">
                            {admin.email}
                          </div>
                        </div>
                      </td>
                      <td className="py-2 px-4 text-gray-600">
                        {getStatusBadge(admin.role)}
                      </td>
                      <td className="py-2 px-4">
                        {getStatusBadge(admin.status)}
                      </td>
                      <td className="py-2 px-4 text-gray-600">
                        {admin.lastActive}
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
                            <DropdownMenuItem>Edit Admin</DropdownMenuItem>
                            <DropdownMenuItem>Deactivate</DropdownMenuItem>
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

            <div className="flex items-center justify-between mt-6">
              <div className="text-sm text-gray-600">
                Showing 1 to 7 of 7 entries
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
                    size="lg"
                    className="h-8 w-8"
                    disabled
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>
                  <span className="text-sm text-gray-600">Page 1 of 1</span>
                  <Button
                    variant="outline"
                    size="lg"
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
