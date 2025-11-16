import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { TrendingUp, Users, Clock, Target } from "lucide-react";

const AdvancedAnalytics = () => {
  // Weekly performance data
  const weeklyData = [
    { day: "Mon", attention: 0.82, engagement: 0.78, load: 0.65 },
    { day: "Tue", attention: 0.75, engagement: 0.72, load: 0.70 },
    { day: "Wed", attention: 0.88, engagement: 0.85, load: 0.62 },
    { day: "Thu", attention: 0.79, engagement: 0.81, load: 0.68 },
    { day: "Fri", attention: 0.85, engagement: 0.83, load: 0.64 },
  ];

  // Cognitive profile comparison
  const cognitiveProfile = [
    { metric: "Attention", current: 0.82, baseline: 0.75 },
    { metric: "Memory", current: 0.78, baseline: 0.72 },
    { metric: "Processing", current: 0.85, baseline: 0.80 },
    { metric: "Focus", current: 0.88, baseline: 0.78 },
    { metric: "Engagement", current: 0.83, baseline: 0.77 },
  ];

  // Subject performance
  const subjectData = [
    { subject: "Math", score: 0.88 },
    { subject: "Science", score: 0.82 },
    { subject: "Language", score: 0.91 },
    { subject: "History", score: 0.76 },
    { subject: "Art", score: 0.94 },
  ];

  const stats = [
    { icon: Users, label: "Total Students", value: "24", change: "+3 this month" },
    { icon: Clock, label: "Total Hours", value: "1,247", change: "+124 this week" },
    { icon: Target, label: "Avg Performance", value: "84.2%", change: "+5.3% improvement" },
    { icon: TrendingUp, label: "Success Rate", value: "91.5%", change: "+2.8% increase" },
  ];

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Advanced Analytics</h2>
          <p className="text-muted-foreground">Deep insights into cognitive performance patterns</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-3xl font-bold mb-1">{stat.value}</p>
                <p className="text-xs text-success">{stat.change}</p>
              </Card>
            );
          })}
        </div>

        {/* Analytics Tabs */}
        <Tabs defaultValue="weekly" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3 lg:w-auto">
            <TabsTrigger value="weekly">Weekly Trends</TabsTrigger>
            <TabsTrigger value="profile">Cognitive Profile</TabsTrigger>
            <TabsTrigger value="subjects">Subject Performance</TabsTrigger>
          </TabsList>

          <TabsContent value="weekly" className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-6">Weekly Performance Trends</h3>
              <ResponsiveContainer width="100%" height={350}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis 
                    dataKey="day" 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <YAxis 
                    stroke="hsl(var(--muted-foreground))"
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'hsl(var(--card))', 
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px'
                    }}
                    formatter={(value: number) => `${(value * 100).toFixed(0)}%`}
                  />
                  <Legend />
                  <Bar dataKey="attention" fill="hsl(var(--primary))" name="Attention" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="engagement" fill="hsl(var(--success))" name="Engagement" radius={[8, 8, 0, 0]} />
                  <Bar dataKey="load" fill="hsl(var(--warning))" name="Cognitive Load" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-6">Cognitive Profile vs Baseline</h3>
              <ResponsiveContainer width="100%" height={400}>
                <RadarChart data={cognitiveProfile}>
                  <PolarGrid stroke="hsl(var(--border))" />
                  <PolarAngleAxis 
                    dataKey="metric" 
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <PolarRadiusAxis 
                    angle={90} 
                    domain={[0, 1]}
                    tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  />
                  <Radar 
                    name="Current" 
                    dataKey="current" 
                    stroke="hsl(var(--primary))" 
                    fill="hsl(var(--primary))" 
                    fillOpacity={0.3} 
                  />
                  <Radar 
                    name="Baseline" 
                    dataKey="baseline" 
                    stroke="hsl(var(--muted-foreground))" 
                    fill="hsl(var(--muted-foreground))" 
                    fillOpacity={0.1} 
                  />
                  <Legend />
                </RadarChart>
              </ResponsiveContainer>
              <div className="mt-6 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-primary">Insight:</strong> Current cognitive performance shows 
                  significant improvement across all metrics compared to baseline measurements. Focus and 
                  language processing show the highest gains.
                </p>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="subjects" className="space-y-4">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border">
              <h3 className="text-xl font-semibold mb-6">Performance by Subject</h3>
              <div className="space-y-4">
                {subjectData.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{item.subject}</span>
                      <span className="text-sm font-semibold text-primary">
                        {(item.score * 100).toFixed(0)}%
                      </span>
                    </div>
                    <div className="h-3 bg-muted rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-primary to-secondary transition-all duration-500"
                        style={{ width: `${item.score * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 rounded-lg bg-success/5 border border-success/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-success">Recommendation:</strong> Student shows exceptional 
                  performance in creative subjects (Art, Language). Consider enrichment activities in 
                  these areas while providing additional support in History.
                </p>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default AdvancedAnalytics;
