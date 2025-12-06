import { TrendingUp, Users, Zap, Target } from "lucide-react";
import { Card } from "@/components/ui/card";

const metrics = [
  {
    label: "Active Sessions",
    value: "2,847",
    change: "+12.5%",
    icon: Users,
    color: "text-primary",
  },
  {
    label: "Context Accuracy",
    value: "98.4%",
    change: "+2.1%",
    icon: Target,
    color: "text-success",
  },
  {
    label: "Prediction Score",
    value: "94.2%",
    change: "+5.8%",
    icon: TrendingUp,
    color: "text-accent",
  },
  {
    label: "Avg Response Time",
    value: "142ms",
    change: "-18.3%",
    icon: Zap,
    color: "text-warning",
  },
];

const MetricsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric) => (
        <Card
          key={metric.label}
          className="p-6 bg-gradient-card border-border/50 hover:card-glow transition-all duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`p-3 rounded-xl bg-card ${metric.color}`}>
              <metric.icon className="w-5 h-5" />
            </div>
            <span className="text-sm text-success font-medium">{metric.change}</span>
          </div>
          <div>
            <p className="text-3xl font-bold mb-1">{metric.value}</p>
            <p className="text-sm text-muted-foreground">{metric.label}</p>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default MetricsGrid;
