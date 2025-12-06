import { Card } from "@/components/ui/card";
import { Smile, Meh, Frown } from "lucide-react";

interface EmotionData {
  emotion: string;
  percentage: number;
  color: string;
  icon: any;
}

const emotionData: EmotionData[] = [
  { emotion: "Positive", percentage: 68, color: "bg-success", icon: Smile },
  { emotion: "Neutral", percentage: 24, color: "bg-warning", icon: Meh },
  { emotion: "Negative", percentage: 8, color: "bg-destructive", icon: Frown },
];

interface Props {
  userId: string | null;
}

const EmotionTracker = ({ userId }: Props) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50 h-[400px] flex flex-col">
      <div className="mb-6">
        <p className="text-sm text-muted-foreground mb-2">Overall Sentiment</p>
        <div className="flex items-center gap-3">
          <div className="text-4xl font-bold gradient-text">94.2</div>
          <div className="text-sm">
            <div className="text-success">↑ 5.3%</div>
            <div className="text-muted-foreground">vs last week</div>
          </div>
        </div>
      </div>

      <div className="space-y-6 flex-1">
        {emotionData.map((data) => {
          const Icon = data.icon;
          return (
            <div key={data.emotion} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon className="w-5 h-5" />
                  <span className="font-medium">{data.emotion}</span>
                </div>
                <span className="text-sm font-bold">{data.percentage}%</span>
              </div>
              <div className="h-2 bg-card rounded-full overflow-hidden">
                <div
                  className={`h-full ${data.color} transition-all duration-500`}
                  style={{ width: `${data.percentage}%` }}
                ></div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-6 pt-6 border-t border-border/50">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <p className="text-2xl font-bold text-success">847</p>
            <p className="text-xs text-muted-foreground">Happy Interactions</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-warning">302</p>
            <p className="text-xs text-muted-foreground">Neutral</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-destructive">94</p>
            <p className="text-xs text-muted-foreground">Needs Attention</p>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default EmotionTracker;
