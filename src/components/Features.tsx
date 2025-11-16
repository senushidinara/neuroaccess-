import { Card } from "@/components/ui/card";
import { Brain, Activity, Sparkles, Globe, Shield, Zap } from "lucide-react";

const Features = () => {
  const colorMap: Record<string, { bg: string; text: string; border: string }> = {
    primary: { bg: "hsl(var(--primary) / 0.1)", text: "hsl(var(--primary))", border: "hsl(var(--primary) / 0.5)" },
    success: { bg: "hsl(var(--success) / 0.1)", text: "hsl(var(--success))", border: "hsl(var(--success) / 0.5)" },
    secondary: { bg: "hsl(var(--secondary) / 0.1)", text: "hsl(var(--secondary))", border: "hsl(var(--secondary) / 0.5)" },
    accent: { bg: "hsl(var(--accent) / 0.1)", text: "hsl(var(--accent))", border: "hsl(var(--accent) / 0.5)" },
    warning: { bg: "hsl(var(--warning) / 0.1)", text: "hsl(var(--warning))", border: "hsl(var(--warning) / 0.5)" },
  };

  const features = [
    {
      icon: Brain,
      title: "Real-Time Cognitive Detection",
      description: "Advanced gamma band EEG analysis detects attention, stress, and engagement states in under 200ms",
      color: "primary",
    },
    {
      icon: Activity,
      title: "Adaptive Learning Engine",
      description: "AI personalizes educational content based on real-time cognitive metrics and learning patterns",
      color: "success",
    },
    {
      icon: Sparkles,
      title: "Explainable AI Dashboard",
      description: "SHAP and LRP-powered insights help teachers understand exactly why a student may be struggling",
      color: "secondary",
    },
    {
      icon: Globe,
      title: "Offline-First Design",
      description: "Works completely offline with 50MB footprint - perfect for rural and low-connectivity areas",
      color: "accent",
    },
    {
      icon: Shield,
      title: "Privacy-Preserving",
      description: "Federated learning ensures student data never leaves the device - complete privacy by design",
      color: "warning",
    },
    {
      icon: Zap,
      title: "Low-Cost Hardware",
      description: "Works with affordable $20-50 EEG headsets, making cognitive assessment accessible to all",
      color: "primary",
    },
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
            Democratizing Cognitive Healthcare
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Advanced neuroscience technology made accessible and affordable for everyone
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const colors = colorMap[feature.color];
            return (
              <Card
                key={index}
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group hover:shadow-lg hover:shadow-primary/10 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-lg flex items-center justify-center mb-4 transition-all group-hover:brightness-110"
                  style={{ backgroundColor: colors.bg }}
                >
                  <Icon className="w-6 h-6" style={{ color: colors.text }} />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </Card>
            );
          })}
        </div>

        {/* Use Cases Section */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">Real-World Impact</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Brain className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Education</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Early detection of ADHD/dyslexia indicators in classroom settings</li>
                    <li>• Personalized learning pace for neurodivergent students</li>
                    <li>• Real-time cognitive engagement metrics for teachers</li>
                    <li>• Data-driven insights for educational interventions</li>
                  </ul>
                </div>
              </div>
            </Card>

            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover:border-secondary/50 transition-all">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-6 h-6 text-secondary" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold mb-3">Mental Health</h4>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Early detection of cognitive stress and burnout patterns</li>
                    <li>• Mindfulness and focus training with biofeedback</li>
                    <li>• Remote cognitive assessment for rural communities</li>
                    <li>• Objective mental health monitoring at scale</li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
