import { useState } from "react";
import Header from "@/components/Header";
import MetricsGrid from "@/components/MetricsGrid";
import ChannelMonitor from "@/components/ChannelMonitor";
import JourneyGraph from "@/components/JourneyGraph";
import ContextTimeline from "@/components/ContextTimeline";
import EmotionTracker from "@/components/EmotionTracker";
import PredictiveInsights from "@/components/PredictiveInsights";

const Index = () => {
  const [selectedUser, setSelectedUser] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-8 space-y-8">
        {/* Key Metrics */}
        <section>
          <h2 className="text-2xl font-bold mb-6 gradient-text">System Overview</h2>
          <MetricsGrid />
        </section>

        {/* Channel Activity & Predictions */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 gradient-text">Live Channel Activity</h2>
            <ChannelMonitor onUserSelect={setSelectedUser} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Predictive Insights</h2>
            <PredictiveInsights />
          </div>
        </div>

        {/* Journey Visualization */}
        <section>
          <h2 className="text-2xl font-bold mb-6 gradient-text">Unified Memory Graph</h2>
          <JourneyGraph selectedUser={selectedUser} />
        </section>

        {/* Context & Emotion Tracking */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Context Timeline</h2>
            <ContextTimeline userId={selectedUser} />
          </div>
          
          <div>
            <h2 className="text-2xl font-bold mb-6 gradient-text">Emotion Analysis</h2>
            <EmotionTracker userId={selectedUser} />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
