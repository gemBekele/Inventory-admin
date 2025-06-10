import { Header } from "@/components/hearder";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, CreditCard, DollarSign, TrendingDown } from "lucide-react";

const metrics = [
  {
    title: "Total Companies",
    value: "125",
    change: "+ 12% vs. last month",
    icon: Users,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Active Subscriptions",
    value: "118",
    change: "+ 8% vs. last month",
    icon: CreditCard,
    color: "text-green-600",
    bgColor: "bg-green-50",
  },
  {
    title: "MRR (Monthly Recurring Revenue)",
    value: "$12,846",
    change: "+ 5% vs. last month",
    icon: DollarSign,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "Churn Rate",
    value: "2.4%",
    change: "- 0.5% vs. last month",
    icon: TrendingDown,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
];

const recentCompanies = [
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

const quickActions = [
  {
    title: "Flagged Companies",
    subtitle: "3 companies with payment issues",
    count: 3,
    color: "text-red-600",
    bgColor: "bg-red-50",
  },
  {
    title: "Unpaid Invoices",
    subtitle: "8 invoices pending payment",
    count: 8,
    color: "text-orange-600",
    bgColor: "bg-orange-50",
  },
  {
    title: "Support Tickets",
    subtitle: "12 open tickets requiring attention",
    count: 12,
    color: "text-blue-600",
    bgColor: "bg-blue-50",
  },
  {
    title: "New Signups",
    subtitle: "5 companies joined this week",
    count: 5,
    color: "text-green-600",
    bgColor: "bg-green-50",
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
        <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">
          Trial
        </Badge>
      );
    case "Overdue":
      return (
        <Badge className="bg-red-100 text-red-800 hover:bg-red-100">
          Overdue
        </Badge>
      );
    default:
      return <Badge variant="secondary">{status}</Badge>;
  }
}

export default function Dashboard() {
  return (
    <div className="bg-gray-50">
      <Header title="Dashboard" subtitle="Welcome back, Admin User" />

      <div className="p-6">
        {/* Metrics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => (
            <Card
              key={metric.title}
              className="bg-white border border-gray-200"
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-600 mb-2">
                      {metric.title}
                    </p>
                    <p className="text-3xl font-bold text-gray-900 mb-1">
                      {metric.value}
                    </p>
                    <p className="text-sm text-green-600">{metric.change}</p>
                  </div>
                  <div className={`p-3 rounded-lg ${metric.bgColor}`}>
                    <metric.icon className={`w-6 h-6 ${metric.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Recent Companies */}
          <div className="lg:col-span-2">
            <Card className="bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Recent Companies
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-0 text-xs font-medium text-gray-500 uppercase tracking-wider">
                          COMPANY
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
                      </tr>
                    </thead>
                    <tbody>
                      {recentCompanies.map((company, index) => (
                        <tr key={index} className="border-b border-gray-100">
                          <td className="py-4 px-0 font-medium text-gray-900">
                            {company.name}
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {company.plan}
                          </td>
                          <td className="py-4 px-4">
                            {getStatusBadge(company.status)}
                          </td>
                          <td className="py-4 px-4 text-gray-600">
                            {company.joined}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card className="bg-white border border-gray-200">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  Quick Actions
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 space-y-4">
                {quickActions.map((action, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg ${action.bgColor} border border-gray-100`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <p className="font-medium text-gray-900 mb-1">
                          {action.title}
                        </p>
                        <p className="text-sm text-gray-600">
                          {action.subtitle}
                        </p>
                      </div>
                      <div className={`text-2xl font-bold ${action.color}`}>
                        {action.count}
                      </div>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
