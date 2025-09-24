import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Home, 
  BookOpen, 
  Brain, 
  Shield, 
  Phone, 
  Users,
  Menu,
  X,
  AlertTriangle
} from "lucide-react";

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "/dashboard", label: "Dashboard", icon: Shield },
    { href: "/learn", label: "Learn", icon: BookOpen },
    { href: "/quiz", label: "Quiz", icon: Brain },
    { href: "/drills", label: "Virtual Drills", icon: Users },
    { href: "/emergency", label: "Emergency", icon: AlertTriangle },
    { href: "/contacts", label: "Contacts", icon: Phone },
    { href: "/admin", label: "Admin", icon: Users },
  ];

  const isActive = (href: string) => {
    if (href === "/" && location.pathname === "/") return true;
    if (href !== "/" && location.pathname.startsWith(href)) return true;
    return false;
  };

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Show navigation only on non-landing pages
  if (location.pathname === "/") {
    return null;
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-safety rounded-lg flex items-center justify-center group-hover:shadow-glow-safety transition-all duration-smooth">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold gradient-text">SafeLearn</span>
            </Link>

            <div className="flex items-center space-x-1">
              {navItems.slice(1).map((item) => {
                const IconComponent = item.icon;
                const active = isActive(item.href);
                
                return (
                  <Link key={item.href} to={item.href}>
                    <Button
                      variant={active ? "default" : "ghost"}
                      className={`relative transition-all duration-smooth hover-lift ${
                        active ? "bg-gradient-safety shadow-glow" : ""
                      } ${item.href === "/emergency" ? "hover-emergency" : "hover-glow"}`}
                    >
                      <IconComponent className="w-4 h-4 mr-2" />
                      {item.label}
                      {item.href === "/emergency" && (
                        <Badge variant="destructive" className="ml-2 animate-pulse">
                          SOS
                        </Badge>
                      )}
                    </Button>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="lg:hidden fixed top-0 left-0 right-0 z-50 glass-effect border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-safety rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
              <span className="text-lg font-bold gradient-text">SafeLearn</span>
            </Link>

            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover-glow"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 right-0 glass-effect border-b shadow-elevated animate-slide-in-down">
            <div className="container mx-auto px-4 py-4">
              <div className="grid grid-cols-2 gap-3">
                {navItems.slice(1).map((item) => {
                  const IconComponent = item.icon;
                  const active = isActive(item.href);
                  
                  return (
                    <Link key={item.href} to={item.href}>
                      <Button
                        variant={active ? "default" : "outline"}
                        className={`w-full h-16 flex-col transition-all duration-smooth ${
                          active ? "bg-gradient-safety" : ""
                        } ${item.href === "/emergency" ? "hover-emergency" : "hover-glow"}`}
                      >
                        <IconComponent className="w-5 h-5 mb-1" />
                        <span className="text-xs">{item.label}</span>
                        {item.href === "/emergency" && (
                          <Badge variant="destructive" className="mt-1 text-xs animate-pulse">
                            SOS
                          </Badge>
                        )}
                      </Button>
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navigation */}
      <div className="h-16" />
    </>
  );
};

export default Navigation;