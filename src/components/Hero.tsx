import { Button } from "@/components/ui/button";
import { Brain, Activity, Zap, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card/50 backdrop-blur-sm border border-border">
            <Zap className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium">AI-Powered Cognitive Equity Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
              NeuroAccess
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Democratizing cognitive healthcare through affordable EEG and AI - bringing personalized learning and mental health support to underserved communities worldwide
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-8">
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20">
              <Brain className="w-8 h-8 text-primary mx-auto mb-2" />
              <div className="text-3xl font-bold text-primary">89.3%</div>
              <div className="text-sm text-muted-foreground">Attention Detection</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-secondary transition-all hover:shadow-lg hover:shadow-secondary/20">
              <Activity className="w-8 h-8 text-secondary mx-auto mb-2" />
              <div className="text-3xl font-bold text-secondary">&lt;200ms</div>
              <div className="text-sm text-muted-foreground">Inference Latency</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-success transition-all hover:shadow-lg hover:shadow-success/20">
              <Zap className="w-8 h-8 text-success mx-auto mb-2" />
              <div className="text-3xl font-bold text-success">$23</div>
              <div className="text-sm text-muted-foreground">Cost per Student</div>
            </div>
            <div className="p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border hover:border-accent transition-all hover:shadow-lg hover:shadow-accent/20">
              <Users className="w-8 h-8 text-accent mx-auto mb-2" />
              <div className="text-3xl font-bold text-accent">Offline</div>
              <div className="text-sm text-muted-foreground">First Design</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
              onClick={() => document.getElementById('dashboard')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Live Demo
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => window.open('https://github.com/senushidinara/neuroaccess-horizonhacks', '_blank')}
            >
              GitHub Repository
            </Button>
          </div>

          {/* Research badge */}
          <p className="text-sm text-muted-foreground pt-4">
            Based on published research in gamma band EEG analysis • Built for HorizonHacks 2025
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
