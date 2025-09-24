import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Brain, 
  Shield, 
  Phone, 
  Award, 
  AlertTriangle,
  Map,
  CheckCircle,
  Trophy,
  Users
} from "lucide-react";

const Dashboard = () => {
  const userProgress = {
    completedModules: 3,
    totalModules: 8,
    points: 450,
    badges: ["Fire Safety Expert", "Earthquake Prepared"],
    recentQuizScore: 85,
  };

  const disasterModules = [
    {
      id: "earthquake",
      title: "Earthquake Safety",
      description: "Learn Drop, Cover, Hold techniques",
      completed: true,
      region: "Himachal Pradesh",
      icon: AlertTriangle,
      color: "bg-gradient-safety"
    },
    {
      id: "fire",
      title: "Fire Safety",
      description: "Exit routes and fire prevention",
      completed: true,
      region: "Urban Areas",
      icon: Shield,
      color: "bg-emergency-red"
    },
    {
      id: "flood",
      title: "Flood Response",
      description: "Evacuation and water safety",
      completed: true,
      region: "Assam & Bihar",
      icon: Map,
      color: "bg-safety-blue"
    },
    {
      id: "cyclone",
      title: "Cyclone Preparedness",
      description: "Wind safety and shelter protocols",
      completed: false,
      region: "Odisha & Andhra Pradesh",
      icon: AlertTriangle,
      color: "bg-gradient-emergency"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Welcome back, Student!</h1>
              <p className="text-white/80">Continue your disaster preparedness journey</p>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="secondary" className="text-lg px-4 py-2">
                <Trophy className="w-4 h-4 mr-2" />
                {userProgress.points} Points
              </Badge>
            </div>
          </div>
          
          {/* Progress Overview */}
          <Card className="shadow-elevated">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Award className="w-5 h-5 mr-2 text-safety-green" />
                Your Progress
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Modules Completed</p>
                  <Progress value={(userProgress.completedModules / userProgress.totalModules) * 100} className="mb-2" />
                  <p className="text-sm font-medium">{userProgress.completedModules} of {userProgress.totalModules} completed</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Latest Quiz Score</p>
                  <div className="text-2xl font-bold text-safety-green">{userProgress.recentQuizScore}%</div>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-2">Badges Earned</p>
                  <div className="flex flex-wrap gap-1">
                    {userProgress.badges.map((badge, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-8">
          <Link to="/learn">
            <Button className="w-full h-20 bg-gradient-safety hover:shadow-glow transition-all duration-300 animate-bounce-soft">
              <div className="text-center">
                <BookOpen className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Learn</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/drills">
            <Button className="w-full h-20 bg-gradient-info hover:shadow-glow-safety transition-all duration-300 animate-bounce-soft" style={{ animationDelay: "0.1s" }}>
              <div className="text-center">
                <Users className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Virtual Drills</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/quiz">
            <Button variant="secondary" className="w-full h-20 hover:shadow-elevated transition-all duration-300 animate-bounce-soft" style={{ animationDelay: "0.2s" }}>
              <div className="text-center">
                <Brain className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Quiz</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/emergency">
            <Button className="w-full h-20 bg-gradient-emergency hover:shadow-glow-emergency transition-all duration-300 animate-bounce-soft animate-pulse-glow" style={{ animationDelay: "0.3s" }}>
              <div className="text-center">
                <AlertTriangle className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm font-medium">SOS</span>
              </div>
            </Button>
          </Link>
          
          <Link to="/contacts">
            <Button variant="outline" className="w-full h-20 hover:bg-secondary transition-all duration-300 animate-bounce-soft" style={{ animationDelay: "0.4s" }}>
              <div className="text-center">
                <Phone className="w-6 h-6 mx-auto mb-1" />
                <span className="text-sm font-medium">Contacts</span>
              </div>
            </Button>
          </Link>
        </div>

        {/* Learning Modules */}
        <Card className="shadow-elevated animate-slide-in-up">
          <CardHeader>
            <CardTitle>Disaster Preparedness Modules</CardTitle>
            <CardDescription>Region-specific training for Indian disasters</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {disasterModules.map((module, index) => {
                const IconComponent = module.icon;
                return (
                  <Card 
                    key={module.id} 
                    className="hover-lift hover-glow transition-all duration-300 cursor-pointer animate-fade-in"
                    style={{ animationDelay: `${index * 200}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`p-3 rounded-lg ${module.color} shadow-elevated`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        {module.completed && (
                          <CheckCircle className="w-5 h-5 text-success-green animate-bounce-soft" />
                        )}
                      </div>
                      <h3 className="font-semibold text-lg mb-2">{module.title}</h3>
                      <p className="text-muted-foreground text-sm mb-2">{module.description}</p>
                      <Badge variant="outline" className="text-xs mb-4">
                        📍 {module.region}
                      </Badge>
                      <div className="mt-4">
                        <Link to={`/learn/${module.id}`}>
                          <Button 
                            variant={module.completed ? "secondary" : "default"} 
                            className="w-full hover-lift transition-all duration-smooth"
                          >
                            {module.completed ? "Review" : "Start Learning"}
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;