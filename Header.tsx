import { Brain, Activity } from "lucide-react";

const Header = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-xl sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Brain className="w-8 h-8 text-primary" />
              <div className="absolute inset-0 blur-xl bg-primary/20 rounded-full"></div>
            </div>
            <div>
              <h1 className="text-2xl font-bold gradient-text">Unified Memory Graph</h1>
              <p className="text-sm text-muted-foreground">Agentic AI System</p>
            </div>
          </div>
          
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 border border-success/20">
            <Activity className="w-4 h-4 text-success animate-pulse" />
            <span className="text-sm font-medium text-success">System Active</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
