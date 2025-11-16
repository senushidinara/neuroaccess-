import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Github, FileText } from "lucide-react";
import brainIcon from "@/assets/brain-icon.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>
            <img src={brainIcon} alt="NeuroAccess" className="w-8 h-8" />
            <span className="font-bold text-xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              NeuroAccess
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <button 
              onClick={() => scrollToSection("dashboard")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("analytics")}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              Analytics
            </button>
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => window.open("https://github.com/senushidinara/neuroaccess-horizonhacks", "_blank")}
            >
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </Button>
            <Button 
              size="sm"
              onClick={() => window.open("https://doi.org/10.21203/rs.3.rs-7767198/v1", "_blank")}
            >
              <FileText className="w-4 h-4 mr-2" />
              Research
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 border-t border-border">
            <button 
              onClick={() => scrollToSection("dashboard")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Dashboard
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("analytics")}
              className="block w-full text-left px-4 py-2 text-sm font-medium hover:bg-primary/10 rounded-lg transition-colors"
            >
              Analytics
            </button>
            <div className="flex flex-col gap-2 px-4 pt-2">
              <Button 
                variant="outline" 
                size="sm"
                onClick={() => window.open("https://github.com/senushidinara/neuroaccess-horizonhacks", "_blank")}
              >
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <Button 
                size="sm"
                onClick={() => window.open("https://doi.org/10.21203/rs.3.rs-7767198/v1", "_blank")}
              >
                <FileText className="w-4 h-4 mr-2" />
                Research
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
