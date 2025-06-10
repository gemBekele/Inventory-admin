import MetricCard from "@/components/MetricCard";
// import RecentCompanies from "@/components/RecentCompanies";
import QuickActions from "@/components/QuickActions";
import { metrics, quickActions } from "@/lib/data";
import { Building2, CreditCard, DollarSign, TrendingDown } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

export default function HomePage() {
  const companies = [
    {
      name: "Acme Corp",
      plan: "Enterprise",
      status: "Active",
      joined: "Apr 28, 2025",
    },
    {
      name: "Globex Inc",
      plan: "Premium",
      status: "Active",
      joined: "Apr 26, 2025",
    },
    {
      name: "Wayne Enterprises",
      plan: "Starter",
      status: "Trial",
      joined: "Apr 24, 2025",
    },
    {
      name: "Stark Industries",
      plan: "Basic",
      status: "Overdue",
      joined: "Apr 20, 2025",
    },
    {
      name: "Umbrella Corp",
      plan: "Enterprise",
      status: "Active",
      joined: "Apr 18, 2025",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <MetricCard
          title="Total Companies"
          value={metrics.totalCompanies}
          change={metrics.totalCompaniesChange}
          icon={Building2}
        />
        <MetricCard
          title="Active Subscriptions"
          value={metrics.activeSubscriptions}
          change={metrics.activeSubscriptionsChange}
          icon={CreditCard}
        />
        <MetricCard
          title="MRR (Monthly Recurring Revenue)"
          value={`$${metrics.mrr.toLocaleString()}`}
          change={metrics.mrrChange}
          icon={DollarSign}
        />
        <MetricCard
          title="Churn Rate"
          value={`${metrics.churnRate}%`}
          change={metrics.churnRateChange}
          icon={TrendingDown}
        />
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
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
                            ? "default" // Use default and style with class
                            : company.status === "Trial"
                            ? "outline" // Use outline and style with class
                            : "destructive" // Use destructive for Overdue
                        }
                        className={
                          company.status === "Active"
                            ? "bg-green-100 text-green-800 hover:bg-green-100"
                            : company.status === "Trial"
                            ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
                            : "bg-red-100 text-red-800 hover:bg-red-100"
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
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
