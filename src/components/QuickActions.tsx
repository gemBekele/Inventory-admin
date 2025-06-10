import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { QuickActionsData } from "../lib/data";

const quickActions = {
  flaggedCompanies: 3,
  unpaidInvoices: 8,
  supportTickets: 12,
  newSignups: 5,
};

interface QuickActionsProps {
  actions: typeof quickActions;
}

export default function QuickActions({ actions }: QuickActionsProps) {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-gray-800">Quick Actions</h2>
      <Card className="bg-red-50 border-red-200">
        <CardContent className="flex justify-between items-center p-4">
          <div>
            <CardTitle className="text-sm font-medium text-red-800">
              Flagged Companies
            </CardTitle>
            <p className="text-xs text-red-600">
              3 companies with payment issues
            </p>
          </div>
          <span className="text-2xl font-bold text-red-800">
            {actions.flaggedCompanies}
          </span>
        </CardContent>
      </Card>
      <Card className="bg-yellow-50 border-yellow-200">
        <CardContent className="flex justify-between items-center p-4">
          <div>
            <CardTitle className="text-sm font-medium text-yellow-800">
              Unpaid Invoices
            </CardTitle>
            <p className="text-xs text-yellow-600">
              8 invoices pending payment
            </p>
          </div>
          <span className="text-2xl font-bold text-yellow-800">
            {actions.unpaidInvoices}
          </span>
        </CardContent>
      </Card>
      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="flex justify-between items-center p-4">
          <div>
            <CardTitle className="text-sm font-medium text-blue-800">
              Support Tickets
            </CardTitle>
            <p className="text-xs text-blue-600">
              12 open tickets requiring attention
            </p>
          </div>
          <span className="text-2xl font-bold text-blue-800">
            {actions.supportTickets}
          </span>
        </CardContent>
      </Card>
      <Card className="bg-green-50 border-green-200">
        <CardContent className="flex justify-between items-center p-4">
          <div>
            <CardTitle className="text-sm font-medium text-green-800">
              New Signups
            </CardTitle>
            <p className="text-xs text-green-600">
              5 companies joined this week
            </p>
          </div>
          <span className="text-2xl font-bold text-green-800">
            {actions.newSignups}
          </span>
        </CardContent>
      </Card>
    </div>
  );
}
