import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Zap, AlertCircle } from "lucide-react";

interface Insight {
  id: string;
  title: string;
  description: string;
  confidence: number;
  type: "opportunity" | "alert" | "prediction";
}

const insights: Insight[] = [
  {
    id: "1",
    title: "High Conversion Probability",
    description: "User Sarah M. likely to purchase within 2 hours",
    confidence: 94,
    type: "prediction",
  },
  {
    id: "2",
    title: "Cross-Sell Opportunity",
    description: "Recommend accessories for recently viewed items",
    confidence: 87,
    type: "opportunity",
  },
  {
    id: "3",
    title: "Engagement Drop Alert",
    description: "User Mike R. showing decreased activity",
    confidence: 76,
    type: "alert",
  },
  {
    id: "4",
    title: "Optimal Contact Time",
    description: "Next WhatsApp message best sent in 30 minutes",
    confidence: 91,
    type: "prediction",
  },
];

const typeConfig = {
  opportunity: { icon: Zap, color: "text-success", bg: "bg-success/10" },
  alert: { icon: AlertCircle, color: "text-warning", bg: "bg-warning/10" },
  prediction: { icon: TrendingUp, color: "text-primary", bg: "bg-primary/10" },
};

const PredictiveInsights = () => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50 h-[400px] overflow-auto">
      <div className="space-y-4">
        {insights.map((insight) => {
          const Icon = typeConfig[insight.type].icon;
          return (
            <div
              key={insight.id}
              className="p-4 rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 transition-all"
            >
              <div className="flex items-start gap-3 mb-2">
                <div className={`p-2 rounded-lg ${typeConfig[insight.type].bg}`}>
                  <Icon className={`w-4 h-4 ${typeConfig[insight.type].color}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-sm mb-1">{insight.title}</h4>
                  <p className="text-xs text-muted-foreground">{insight.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 mt-3">
                <div className="flex-1 h-1.5 bg-card rounded-full overflow-hidden">
                  <div
                    className="h-full bg-primary transition-all duration-500"
                    style={{ width: `${insight.confidence}%` }}
                  ></div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {insight.confidence}% confidence
                </Badge>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
};

export default PredictiveInsights;
