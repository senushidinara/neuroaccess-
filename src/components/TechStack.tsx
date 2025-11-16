import { Card } from "@/components/ui/card";
import { Code, Database, Brain, Cpu } from "lucide-react";

const TechStack = () => {
  const techCategories = [
    {
      icon: Code,
      title: "Frontend",
      color: "primary",
      technologies: [
        "React + TypeScript",
        "Flutter for Mobile",
        "Recharts for Visualization",
        "TailwindCSS",
      ],
    },
    {
      icon: Brain,
      title: "AI & ML",
      color: "secondary",
      technologies: [
        "TensorFlow Lite",
        "PyTorch (Edge)",
        "Custom CNN-Transformer",
        "SHAP/LRP for XAI",
      ],
    },
    {
      icon: Database,
      title: "Signal Processing",
      color: "success",
      technologies: [
        "MNE-Python",
        "Custom Gamma Analysis",
        "Real-time Filtering",
        "ICA Artifact Removal",
      ],
    },
    {
      icon: Cpu,
      title: "Backend",
      color: "accent",
      technologies: [
        "FastAPI",
        "WebSocket Real-time",
        "Edge Computing",
        "Federated Learning",
      ],
    },
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Technical Architecture</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Built with cutting-edge technologies optimized for edge deployment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {techCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card 
                key={index} 
                className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all"
              >
                <div className={`w-12 h-12 rounded-lg bg-${category.color}/10 flex items-center justify-center mb-4`}>
                  <Icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-lg font-semibold mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.technologies.map((tech, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className={`w-1.5 h-1.5 rounded-full bg-${category.color}`} />
                      {tech}
                    </li>
                  ))}
                </ul>
              </Card>
            );
          })}
        </div>

        {/* Performance Metrics */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border">
          <h3 className="text-2xl font-bold mb-6 text-center">Performance Benchmarks</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">89.3%</div>
              <div className="text-sm text-muted-foreground">Attention Detection Accuracy</div>
              <div className="text-xs text-muted-foreground mt-1">vs Clinical Gold Standard</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-success mb-2">94.2%</div>
              <div className="text-sm text-muted-foreground">Gamma Classification</div>
              <div className="text-xs text-muted-foreground mt-1">Custom CNN Model</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-warning mb-2">&lt;200ms</div>
              <div className="text-sm text-muted-foreground">Inference Latency</div>
              <div className="text-xs text-muted-foreground mt-1">Real-time Requirement</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-secondary mb-2">45MB</div>
              <div className="text-sm text-muted-foreground">Model Size</div>
              <div className="text-xs text-muted-foreground mt-1">Edge Deployment</div>
            </div>
          </div>
        </Card>

        {/* Research Foundation */}
        <div className="mt-12 text-center">
          <Card className="p-6 bg-primary/5 border-primary/20 inline-block">
            <p className="text-sm text-muted-foreground mb-2">Based on Published Research</p>
            <p className="text-primary font-medium">
              "Differential Modulation of Gamma Band EEG Activity During Mental Arithmetic"
            </p>
            <a 
              href="https://doi.org/10.21203/rs.3.rs-7767198/v1" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-xs text-primary hover:underline mt-2 inline-block"
            >
              View Research Paper →
            </a>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
