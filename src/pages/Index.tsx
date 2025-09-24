import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Shield, 
  BookOpen, 
  Brain, 
  Phone, 
  Users,
  AlertTriangle,
  CheckCircle,
  Award,
  MapPin,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const features = [
    {
      icon: BookOpen,
      title: "Region-Specific Learning",
      description: "Disaster preparedness training tailored for Indian geography and climate patterns",
      color: "bg-safety-blue"
    },
    {
      icon: Brain,
      title: "Gamified Quizzes",
      description: "Interactive assessments with points, badges, and leaderboards to make learning engaging",
      color: "bg-safety-green"
    },
    {
      icon: Shield,
      title: "Virtual Drills",
      description: "Step-by-step emergency simulations for practice without physical disruption",
      color: "bg-emergency-orange"
    },
    {
      icon: Phone,
      title: "Emergency Toolkit",
      description: "SOS alerts, emergency contacts, and instant communication with authorities",
      color: "bg-emergency-red"
    }
  ];

  const disasters = [
    { name: "Earthquakes", region: "Himachal Pradesh & North-East", icon: "🏔️" },
    { name: "Floods", region: "Assam & Bihar", icon: "🌊" },
    { name: "Cyclones", region: "Odisha & Andhra Pradesh", icon: "🌪️" },
    { name: "Fires", region: "Urban Areas", icon: "🔥" }
  ];

  const stats = [
    { number: "2,500+", label: "Students Trained", icon: Users },
    { number: "50+", label: "Schools Connected", icon: Shield },
    { number: "95%", label: "Safety Improvement", icon: CheckCircle },
    { number: "24/7", label: "Emergency Support", icon: Phone }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-hero text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-6 text-sm px-4 py-2">
              🇮🇳 Smart India Hackathon 2024 Project
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Building a Safer
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-white/80">
                Generation
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 leading-relaxed">
              Digital disaster preparedness platform empowering Indian schools and colleges 
              with region-specific training, virtual drills, and emergency response systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/dashboard">
                <Button size="lg" variant="secondary" className="text-lg px-8 py-4 shadow-elevated">
                  <Shield className="w-5 h-5 mr-2" />
                  Start Learning
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/admin">
                <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary">
                  <Users className="w-5 h-5 mr-2" />
                  Admin Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Statement */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              The Challenge We're Solving
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Despite NDMA guidelines, Indian schools face a critical gap between disaster theory and practice. 
              Physical drills are rare, students panic during emergencies, and institutions lack structured preparedness systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {disasters.map((disaster, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-elevated transition-all duration-300">
                <CardContent className="p-6">
                  <div className="text-4xl mb-4">{disaster.icon}</div>
                  <h3 className="font-semibold text-lg mb-2">{disaster.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    📍 {disaster.region}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Disaster Preparedness
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform combines education, simulation, and emergency response 
              into one integrated solution for Indian educational institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon;
              return (
                <Card key={index} className="shadow-elevated hover:shadow-glow transition-all duration-300">
                  <CardHeader>
                    <div className={`w-16 h-16 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-safety text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Making Real Impact
            </h2>
            <p className="text-xl text-white/80">
              Measurable results in building disaster-resilient communities
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="text-center">
                  <IconComponent className="w-12 h-12 mx-auto mb-4 text-white/80" />
                  <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                  <p className="text-white/80">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto text-center shadow-elevated">
            <CardHeader className="pb-6">
              <CardTitle className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Build a Safer Tomorrow?
              </CardTitle>
              <CardDescription className="text-lg">
                Join thousands of students and educators who are revolutionizing 
                disaster preparedness in Indian schools and colleges.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/dashboard">
                  <Button size="lg" className="bg-gradient-safety text-lg px-8 py-4">
                    <BookOpen className="w-5 h-5 mr-2" />
                    Start Your Training
                  </Button>
                </Link>
                <Link to="/admin">
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4">
                    <Users className="w-5 h-5 mr-2" />
                    For Institutions
                  </Button>
                </Link>
              </div>
              
              <div className="mt-8 pt-8 border-t">
                <div className="flex items-center justify-center space-x-8 text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    Pan-India Coverage
                  </div>
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    NDMA Compliant
                  </div>
                  <div className="flex items-center">
                    <Shield className="w-4 h-4 mr-1" />
                    100% Secure
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Index;
