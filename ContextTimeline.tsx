import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Clock, Smartphone, MessageCircle, Monitor } from "lucide-react";

interface TimelineEvent {
  id: string;
  action: string;
  channel: string;
  timestamp: string;
  context: string;
}

const events: TimelineEvent[] = [
  {
    id: "1",
    action: "Viewed product: Winter Jacket",
    channel: "app",
    timestamp: "2 min ago",
    context: "High purchase intent detected",
  },
  {
    id: "2",
    action: "Asked about sizing options",
    channel: "whatsapp",
    timestamp: "5 min ago",
    context: "Preference for medium size noted",
  },
  {
    id: "3",
    action: "Scanned loyalty QR code",
    channel: "kiosk",
    timestamp: "1 hour ago",
    context: "In-store visit confirmed",
  },
  {
    id: "4",
    action: "Added items to wishlist",
    channel: "app",
    timestamp: "3 hours ago",
    context: "Interest in winter collection",
  },
];

const channelIcons = {
  app: Smartphone,
  whatsapp: MessageCircle,
  kiosk: Monitor,
};

interface Props {
  userId: string | null;
}

const ContextTimeline = ({ userId }: Props) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50">
      <ScrollArea className="h-[400px] pr-4">
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent"></div>

          <div className="space-y-6">
            {events.map((event) => {
              const Icon = channelIcons[event.channel as keyof typeof channelIcons];
              return (
                <div key={event.id} className="relative pl-14">
                  {/* Timeline dot */}
                  <div className="absolute left-4 top-2 w-5 h-5 rounded-full bg-primary border-4 border-background shadow-glow"></div>

                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-primary" />
                      <p className="font-medium">{event.action}</p>
                    </div>
                    <p className="text-sm text-accent">{event.context}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      <span>{event.timestamp}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </ScrollArea>
    </Card>
  );
};

export default ContextTimeline;
