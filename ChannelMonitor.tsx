import { Smartphone, MessageCircle, Monitor, Smile, Frown, Meh } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ChannelActivity {
  id: string;
  user: string;
  channel: "app" | "whatsapp" | "kiosk";
  message: string;
  emotion: "positive" | "neutral" | "negative";
  timestamp: string;
}

const activities: ChannelActivity[] = [
  {
    id: "1",
    user: "Sarah M.",
    channel: "app",
    message: "Browsing winter collection",
    emotion: "positive",
    timestamp: "2s ago",
  },
  {
    id: "2",
    user: "John D.",
    channel: "whatsapp",
    message: "Asked about order status",
    emotion: "neutral",
    timestamp: "5s ago",
  },
  {
    id: "3",
    user: "Emma L.",
    channel: "kiosk",
    message: "Scanning items at store",
    emotion: "positive",
    timestamp: "12s ago",
  },
  {
    id: "4",
    user: "Mike R.",
    channel: "app",
    message: "Cart abandonment detected",
    emotion: "negative",
    timestamp: "18s ago",
  },
  {
    id: "5",
    user: "Lisa K.",
    channel: "whatsapp",
    message: "Requesting product recommendations",
    emotion: "positive",
    timestamp: "24s ago",
  },
];

const channelConfig = {
  app: { icon: Smartphone, color: "text-primary", bg: "bg-primary/10" },
  whatsapp: { icon: MessageCircle, color: "text-success", bg: "bg-success/10" },
  kiosk: { icon: Monitor, color: "text-accent", bg: "bg-accent/10" },
};

const emotionConfig = {
  positive: { icon: Smile, color: "text-success" },
  neutral: { icon: Meh, color: "text-warning" },
  negative: { icon: Frown, color: "text-destructive" },
};

interface Props {
  onUserSelect: (userId: string) => void;
}

const ChannelMonitor = ({ onUserSelect }: Props) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <ScrollArea className="h-[400px] pr-4">
        <div className="space-y-4">
          {activities.map((activity) => {
            const ChannelIcon = channelConfig[activity.channel].icon;
            const EmotionIcon = emotionConfig[activity.emotion].icon;

            return (
              <div
                key={activity.id}
                onClick={() => onUserSelect(activity.user)}
                className="flex items-start gap-4 p-4 rounded-lg bg-card/50 border border-border/30 hover:border-primary/50 hover:bg-card transition-all cursor-pointer group"
              >
                <div className={`p-2 rounded-lg ${channelConfig[activity.channel].bg}`}>
                  <ChannelIcon className={`w-5 h-5 ${channelConfig[activity.channel].color}`} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="font-semibold group-hover:text-primary transition-colors">
                      {activity.user}
                    </p>
                    <Badge variant="outline" className="text-xs">
                      {activity.channel}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{activity.message}</p>
                </div>

                <div className="flex flex-col items-end gap-2">
                  <EmotionIcon className={`w-5 h-5 ${emotionConfig[activity.emotion].color}`} />
                  <span className="text-xs text-muted-foreground">{activity.timestamp}</span>
                </div>
              </div>
            );
          })}
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ChannelMonitor;
