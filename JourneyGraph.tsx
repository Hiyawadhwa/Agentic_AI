import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Props {
  selectedUser: string | null;
}

const JourneyGraph = ({ selectedUser }: Props) => {
  return (
    <Card className="p-6 bg-gradient-card border-border/50 min-h-[400px]">
      <div className="relative h-full flex items-center justify-center">
        {/* Central Node */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            <div className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-glow">
              <div className="w-28 h-28 rounded-full bg-card flex items-center justify-center">
                <span className="text-lg font-bold">
                  {selectedUser || "User"}
                </span>
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-primary/20 animate-ping"></div>
          </div>
        </div>

        {/* Context Nodes */}
        <div className="absolute top-20 left-1/4">
          <ContextNode label="App Browsing" type="app" />
        </div>
        <div className="absolute top-20 right-1/4">
          <ContextNode label="WhatsApp Chat" type="whatsapp" />
        </div>
        <div className="absolute bottom-20 left-1/3">
          <ContextNode label="Kiosk Visit" type="kiosk" />
        </div>
        <div className="absolute bottom-20 right-1/3">
          <ContextNode label="Previous Orders" type="history" />
        </div>

        {/* Connection Lines */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none">
          <defs>
            <linearGradient id="line-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="hsl(200 100% 50%)" stopOpacity="0.3" />
              <stop offset="100%" stopColor="hsl(180 100% 45%)" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <line x1="50%" y1="50%" x2="25%" y2="25%" stroke="url(#line-gradient)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="75%" y2="25%" stroke="url(#line-gradient)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="33%" y2="75%" stroke="url(#line-gradient)" strokeWidth="2" />
          <line x1="50%" y1="50%" x2="67%" y2="75%" stroke="url(#line-gradient)" strokeWidth="2" />
        </svg>
      </div>
    </Card>
  );
};

const ContextNode = ({ label, type }: { label: string; type: string }) => {
  return (
    <div className="relative group cursor-pointer">
      <div className="w-20 h-20 rounded-full bg-card border-2 border-primary/30 flex items-center justify-center hover:border-primary transition-all hover:scale-110">
        <Badge variant="outline" className="text-xs">
          {type}
        </Badge>
      </div>
      <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
        <span className="text-xs text-muted-foreground">{label}</span>
      </div>
    </div>
  );
};

export default JourneyGraph;
