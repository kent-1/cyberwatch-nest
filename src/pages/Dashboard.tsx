import { MetricCard } from "@/components/dashboard/MetricCard";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { mockCases, mockAlerts } from "@/data/mockData";
import { 
  FolderOpen, 
  AlertTriangle, 
  Clock, 
  CheckCircle, 
  TrendingUp,
  Activity,
  Users,
  Shield
} from "lucide-react";

export default function Dashboard() {
  // Calculate metrics
  const totalCases = mockCases.length;
  const openCases = mockCases.filter(c => c.status === "open").length;
  const inProgressCases = mockCases.filter(c => c.status === "in-progress").length;
  const closedCases = mockCases.filter(c => c.status === "closed").length;
  
  const totalAlerts = mockAlerts.length;
  const newAlerts = mockAlerts.filter(a => a.status === "new").length;
  const criticalAlerts = mockAlerts.filter(a => a.severity === "critical").length;
  const highAlerts = mockAlerts.filter(a => a.severity === "high").length;

  const recentCases = mockCases.slice(0, 3);
  const recentAlerts = mockAlerts.slice(0, 5);

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Security Operations Dashboard</h1>
        <p className="text-muted-foreground">Monitor and manage security incidents in real-time</p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <MetricCard
          title="Total Cases"
          value={totalCases}
          icon={FolderOpen}
          trend={{ value: "+12% from last week", isPositive: true }}
        />
        <MetricCard
          title="Open Cases"
          value={openCases}
          icon={Clock}
          trend={{ value: "-5% from yesterday", isPositive: true }}
        />
        <MetricCard
          title="New Alerts"
          value={newAlerts}
          icon={AlertTriangle}
          trend={{ value: "+23% from last hour", isPositive: false }}
        />
        <MetricCard
          title="Resolution Rate"
          value="94%"
          icon={CheckCircle}
          trend={{ value: "+2% this month", isPositive: true }}
        />
      </div>

      {/* Alert Summary */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="border-critical/20 bg-critical/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Shield className="h-4 w-4" />
              Critical Alerts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-critical">{criticalAlerts}</div>
          </CardContent>
        </Card>

        <Card className="border-high/20 bg-high/5">
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <TrendingUp className="h-4 w-4" />
              High Priority
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-high">{highAlerts}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Activity className="h-4 w-4" />
              Cases In Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-warning">{inProgressCases}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground flex items-center gap-2">
              <Users className="h-4 w-4" />
              Active Analysts
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-info">8</div>
          </CardContent>
        </Card>
      </div>

      {/* Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Cases */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FolderOpen className="h-5 w-5" />
              Recent Cases
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentCases.map((case_) => (
              <div key={case_.id} className="flex items-start justify-between p-3 rounded-lg border bg-card/50">
                <div className="space-y-1 flex-1">
                  <h4 className="font-medium text-sm text-foreground">{case_.title}</h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">{case_.description}</p>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={case_.severity} />
                    <StatusBadge status={case_.status} />
                    <Badge variant="outline" className="text-xs">{case_.assignee}</Badge>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Alerts */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertTriangle className="h-5 w-5" />
              Recent Alerts
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {recentAlerts.map((alert) => (
              <div key={alert.id} className="flex items-start justify-between p-3 rounded-lg border bg-card/50">
                <div className="space-y-1 flex-1">
                  <h4 className="font-medium text-sm text-foreground">{alert.title}</h4>
                  <p className="text-xs text-muted-foreground">{alert.source}</p>
                  <div className="flex items-center gap-2">
                    <StatusBadge status={alert.severity} />
                    <StatusBadge status={alert.status} />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}