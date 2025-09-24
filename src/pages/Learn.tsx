import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link, useParams } from "react-router-dom";
import { 
  ArrowLeft, 
  BookOpen, 
  CheckCircle, 
  Clock, 
  Users,
  Play,
  Download
} from "lucide-react";

const Learn = () => {
  const { moduleId } = useParams();

  const modules = {
    earthquake: {
      title: "Earthquake Safety",
      region: "Himachal Pradesh & North-East India",
      description: "Learn life-saving techniques for earthquake situations",
      duration: "15 minutes",
      participants: "2.5k+ students",
      progress: 100,
      lessons: [
        {
          id: 1,
          title: "Understanding Earthquakes",
          description: "What causes earthquakes and how they affect buildings",
          duration: "3 min",
          completed: true,
          type: "video"
        },
        {
          id: 2,
          title: "Drop, Cover, Hold Technique",
          description: "The international standard for earthquake response",
          duration: "4 min",
          completed: true,
          type: "interactive"
        },
        {
          id: 3,
          title: "Safe Zones in Your School",
          description: "Identifying the safest places during an earthquake",
          duration: "3 min",
          completed: true,
          type: "quiz"
        },
        {
          id: 4,
          title: "Post-Earthquake Safety",
          description: "What to do after the shaking stops",
          duration: "5 min",
          completed: false,
          type: "video"
        }
      ]
    },
    fire: {
      title: "Fire Safety",
      region: "Urban Schools & Buildings",
      description: "Essential fire safety knowledge and evacuation procedures",
      duration: "12 minutes",
      participants: "3.2k+ students",
      progress: 75,
      lessons: [
        {
          id: 1,
          title: "Fire Prevention Basics",
          description: "Common causes of fires and how to prevent them",
          duration: "3 min",
          completed: true,
          type: "video"
        },
        {
          id: 2,
          title: "Fire Evacuation Routes",
          description: "Identifying and using emergency exits",
          duration: "4 min",
          completed: true,
          type: "interactive"
        },
        {
          id: 3,
          title: "Stop, Drop, and Roll",
          description: "What to do if your clothes catch fire",
          duration: "2 min",
          completed: true,
          type: "demonstration"
        },
        {
          id: 4,
          title: "Using Fire Extinguishers",
          description: "PASS technique for fire extinguisher use",
          duration: "3 min",
          completed: false,
          type: "video"
        }
      ]
    }
  };

  const currentModule = moduleId ? modules[moduleId as keyof typeof modules] : null;

  if (!currentModule) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="flex items-center mb-6">
            <Link to="/dashboard">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>

          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2">Learning Modules</h1>
            <p className="text-muted-foreground">Choose a disaster preparedness module to begin learning</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(modules).map(([key, module]) => (
              <Card key={key} className="hover:shadow-elevated transition-all duration-300">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <BookOpen className="w-8 h-8 text-primary mb-2" />
                    <Badge variant="outline">{module.duration}</Badge>
                  </div>
                  <CardTitle>{module.title}</CardTitle>
                  <CardDescription>{module.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex items-center text-sm text-muted-foreground mb-2">
                        <Users className="w-4 h-4 mr-1" />
                        {module.participants}
                      </div>
                      <Progress value={module.progress} className="mb-2" />
                      <p className="text-sm text-muted-foreground">{module.progress}% completed</p>
                    </div>
                    <Badge variant="secondary" className="w-full justify-center">
                      📍 {module.region}
                    </Badge>
                    <Link to={`/learn/${key}`}>
                      <Button className="w-full">
                        {module.progress > 0 ? "Continue Learning" : "Start Module"}
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center mb-6">
          <Link to="/learn">
            <Button variant="ghost" className="mr-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Modules
            </Button>
          </Link>
        </div>

        {/* Module Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">{currentModule.title}</h1>
              <p className="text-muted-foreground">{currentModule.description}</p>
              <Badge variant="outline" className="mt-2">
                📍 {currentModule.region}
              </Badge>
            </div>
            <div className="text-right">
              <div className="text-sm text-muted-foreground mb-1">Progress</div>
              <div className="text-2xl font-bold text-primary">{currentModule.progress}%</div>
            </div>
          </div>
          
          <Progress value={currentModule.progress} className="mb-4" />
          
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {currentModule.duration}
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {currentModule.participants}
            </div>
          </div>
        </div>

        {/* Lessons */}
        <div className="space-y-4">
          {currentModule.lessons.map((lesson, index) => (
            <Card key={lesson.id} className={`transition-all duration-300 ${lesson.completed ? 'bg-muted/50' : 'hover:shadow-elevated'}`}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className={`flex items-center justify-center w-10 h-10 rounded-full ${
                      lesson.completed ? 'bg-success-green text-white' : 'bg-primary text-primary-foreground'
                    }`}>
                      {lesson.completed ? (
                        <CheckCircle className="w-5 h-5" />
                      ) : (
                        <span className="font-semibold">{index + 1}</span>
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{lesson.title}</h3>
                      <p className="text-muted-foreground">{lesson.description}</p>
                      <div className="flex items-center space-x-4 mt-2">
                        <Badge variant="outline" className="text-xs">
                          {lesson.type}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    {lesson.type === 'video' && (
                      <Button variant="ghost" size="sm">
                        <Download className="w-4 h-4" />
                      </Button>
                    )}
                    <Button 
                      variant={lesson.completed ? "secondary" : "default"}
                      className="flex items-center"
                    >
                      <Play className="w-4 h-4 mr-2" />
                      {lesson.completed ? "Review" : "Start"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Next Module Suggestion */}
        <Card className="mt-8 bg-gradient-safety text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-2">Ready for the next challenge?</h3>
                <p className="text-white/80">Test your knowledge with our interactive quiz!</p>
              </div>
              <Link to="/quiz">
                <Button variant="secondary">
                  Take Quiz
                </Button>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Learn;