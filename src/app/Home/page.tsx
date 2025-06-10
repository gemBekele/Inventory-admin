import MetricCard from "@/components/MetricCard";
import RecentCompanies from "@/components/RecentCompanies";
import QuickActions from "@/components/QuickActions";
import { metrics, Company, quickActions } from "@/lib/data";
import { Building2, CreditCard, DollarSign, TrendingDown } from "lucide-react";

export default function HomePage() {
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
          <RecentCompanies companies={Company} />
        </div>
        <div>
          <QuickActions actions={quickActions} />
        </div>
      </div>
    </div>
  );
}
