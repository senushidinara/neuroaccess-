import Hero from "@/components/Hero";
import CognitiveDashboard from "@/components/CognitiveDashboard";
import Features from "@/components/Features";
import TechStack from "@/components/TechStack";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <CognitiveDashboard />
      <Features />
      <TechStack />
      
      {/* Footer */}
      <footer className="py-12 px-4 border-t border-border">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="font-semibold text-lg mb-1">NeuroAccess</p>
              <p className="text-sm text-muted-foreground">
                AI-Powered Cognitive Equity Platform
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="text-sm text-muted-foreground">
                Built for HorizonHacks 2025 - AI for Accessibility & Equity
              </p>
              <div className="flex gap-4 text-sm">
                <a 
                  href="https://github.com/senushidinara/neuroaccess-horizonhacks" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  GitHub
                </a>
                <a 
                  href="https://doi.org/10.21203/rs.3.rs-7767198/v1" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Research
                </a>
                <a 
                  href="https://docs.lovable.dev" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  Documentation
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-sm text-muted-foreground">
            <p>Made with ❤️ for cognitive equity worldwide</p>
            <p className="mt-1">© 2025 NeuroAccess. Licensed under MIT.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
