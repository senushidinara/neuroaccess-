import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Brain, Activity, Zap, TrendingUp, AlertCircle, CheckCircle } from "lucide-react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from "recharts";

interface CognitiveData {
  timestamp: string;
  attention: number;
  engagement: number;
  cognitiveLoad: number;
  gammaActivity: number;
}

const CognitiveDashboard = () => {
  const [cognitiveData, setCognitiveData] = useState<CognitiveData[]>([]);
  const [currentMetrics, setCurrentMetrics] = useState({
    attention: 0,
    engagement: 0,
    cognitiveLoad: 0,
    gammaActivity: 0,
  });

  // Simulate real-time EEG data
  useEffect(() => {
    const generateRealisticData = (baseValue: number, variance: number, time: number): number => {
      const noise = (Math.random() - 0.5) * variance;
      const trend = Math.sin(time / 10) * 0.1;
      return Math.max(0, Math.min(1, baseValue + noise + trend));
    };

    const interval = setInterval(() => {
      const now = new Date();
      const timeValue = Date.now() / 1000;
      
      const newData: CognitiveData = {
        timestamp: now.toLocaleTimeString(),
        attention: generateRealisticData(0.75, 0.15, timeValue),
        engagement: generateRealisticData(0.82, 0.12, timeValue + 5),
        cognitiveLoad: generateRealisticData(0.65, 0.18, timeValue + 10),
        gammaActivity: generateRealisticData(0.78, 0.14, timeValue + 15),
      };

      setCognitiveData(prev => [...prev.slice(-29), newData]);
      setCurrentMetrics({
        attention: newData.attention,
        engagement: newData.engagement,
        cognitiveLoad: newData.cognitiveLoad,
        gammaActivity: newData.gammaActivity,
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const getStatusColor = (value: number): string => {
    if (value > 0.7) return "text-success";
    if (value > 0.4) return "text-warning";
    return "text-destructive";
  };

  const getStatusIcon = (value: number) => {
    if (value > 0.7) return <CheckCircle className="w-5 h-5 text-success" />;
    if (value > 0.4) return <AlertCircle className="w-5 h-5 text-warning" />;
    return <AlertCircle className="w-5 h-5 text-destructive" />;
  };

  const MetricCard = ({ 
    title, 
    value, 
    icon: Icon, 
    color 
  }: { 
    title: string; 
    value: number; 
    icon: any; 
    color: string;
  }) => (
    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`p-3 rounded-lg bg-${color}/10 group-hover:bg-${color}/20 transition-all`}>
            <Icon className={`w-6 h-6 text-${color}`} />
          </div>
          <div>
            <p className="text-sm text-muted-foreground font-medium">{title}</p>
            <div className="flex items-center gap-2 mt-1">
              {getStatusIcon(value)}
            </div>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-end gap-2">
          <span className={`text-4xl font-bold ${getStatusColor(value)}`}>
            {(value * 100).toFixed(1)}%
          </span>
          <TrendingUp className={`w-5 h-5 mb-2 ${getStatusColor(value)}`} />
        </div>
        
        <div className="relative h-2 bg-muted rounded-full overflow-hidden">
          <div 
            className={`absolute inset-y-0 left-0 bg-gradient-to-r from-${color} to-${color}/70 transition-all duration-300 rounded-full`}
            style={{ width: `${value * 100}%` }}
          />
        </div>
      </div>
    </Card>
  );

  return (
    <section id="dashboard" className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
            Real-Time Cognitive Monitoring
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Live gamma band EEG analysis with explainable AI insights
          </p>
        </div>

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard 
            title="Attention Level" 
            value={currentMetrics.attention} 
            icon={Brain} 
            color="primary"
          />
          <MetricCard 
            title="Engagement Score" 
            value={currentMetrics.engagement} 
            icon={Activity} 
            color="success"
          />
          <MetricCard 
            title="Cognitive Load" 
            value={currentMetrics.cognitiveLoad} 
            icon={Zap} 
            color="warning"
          />
          <MetricCard 
            title="Gamma Activity" 
            value={currentMetrics.gammaActivity} 
            icon={TrendingUp} 
            color="secondary"
          />
        </div>

        {/* Real-time Chart */}
        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <Activity className="w-5 h-5 text-primary" />
            Live EEG Signal Analysis
          </h3>
          
          <ResponsiveContainer width="100%" height={350}>
            <AreaChart data={cognitiveData}>
              <defs>
                <linearGradient id="attentionGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--primary))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--primary))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="engagementGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--success))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--success))" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="loadGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="hsl(var(--warning))" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="hsl(var(--warning))" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="timestamp" 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                stroke="hsl(var(--muted-foreground))"
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                domain={[0, 1]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))', 
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
                formatter={(value: number) => `${(value * 100).toFixed(1)}%`}
              />
              <Legend />
              <Area 
                type="monotone" 
                dataKey="attention" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                fill="url(#attentionGradient)"
                name="Attention"
              />
              <Area 
                type="monotone" 
                dataKey="engagement" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                fill="url(#engagementGradient)"
                name="Engagement"
              />
              <Area 
                type="monotone" 
                dataKey="cognitiveLoad" 
                stroke="hsl(var(--warning))" 
                strokeWidth={2}
                fill="url(#loadGradient)"
                name="Cognitive Load"
              />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        {/* XAI Insights */}
        <Card className="mt-8 p-6 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <Brain className="w-5 h-5 text-secondary" />
            Explainable AI Insights
          </h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg bg-primary/10 border border-primary/20">
              <p className="font-medium text-primary mb-2">Gamma Band Analysis</p>
              <p className="text-sm text-muted-foreground">
                Elevated gamma power (30-100Hz) in frontal cortex indicates {currentMetrics.attention > 0.7 ? 'high' : 'moderate'} cognitive engagement. 
                Gamma oscillations are associated with attention, working memory, and conscious perception.
              </p>
            </div>
            
            <div className="p-4 rounded-lg bg-success/10 border border-success/20">
              <p className="font-medium text-success mb-2">Adaptive Learning Recommendation</p>
              <p className="text-sm text-muted-foreground">
                {currentMetrics.cognitiveLoad > 0.7 
                  ? "High cognitive load detected. Consider breaking down complex concepts into smaller chunks or taking a short break."
                  : currentMetrics.attention < 0.5
                  ? "Attention levels are low. Interactive activities or movement breaks may help re-engage the learner."
                  : "Optimal learning state detected. This is a good time for introducing new challenging concepts."}
              </p>
            </div>

            <div className="p-4 rounded-lg bg-secondary/10 border border-secondary/20">
              <p className="font-medium text-secondary mb-2">Neural Signature Pattern</p>
              <p className="text-sm text-muted-foreground">
                Current EEG patterns show {currentMetrics.gammaActivity > 0.7 ? 'strong' : 'moderate'} cortical synchronization, 
                suggesting effective information processing and integration across brain regions.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default CognitiveDashboard;
