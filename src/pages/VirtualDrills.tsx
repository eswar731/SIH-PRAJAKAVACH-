import { useState, useEffect } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Play, 
  Pause,
  RotateCcw,
  CheckCircle,
  AlertTriangle,
  Timer,
  MapPin,
  Users,
  Shield
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import ActionButton from "@/components/ActionButton";
import LoadingSpinner from "@/components/LoadingSpinner";

const VirtualDrills = () => {
  const { toast } = useToast();
  const [selectedDrill, setSelectedDrill] = useState<string | null>(null);
  const [drillStep, setDrillStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [timer, setTimer] = useState(0);
  const [loading, setLoading] = useState(false);

  const drills = [
    {
      id: "earthquake",
      title: "Earthquake Drill",
      description: "Practice Drop, Cover, Hold techniques",
      duration: "3-5 minutes",
      participants: "Entire class",
      region: "Himachal Pradesh",
      difficulty: "Medium",
      steps: [
        {
          id: 1,
          action: "Feel the shaking",
          description: "Earthquake simulation begins - you feel the ground shaking",
          duration: 10,
          instruction: "Stay calm and remember your training"
        },
        {
          id: 2,
          action: "Drop",
          description: "Immediately drop to your hands and knees",
          duration: 5,
          instruction: "Get down quickly but don't panic"
        },
        {
          id: 3,
          action: "Cover",
          description: "Take cover under your desk or table",
          duration: 5,
          instruction: "Protect your head and neck with your arms"
        },
        {
          id: 4,
          action: "Hold On",
          description: "Hold on to your shelter and protect yourself",
          duration: 30,
          instruction: "Stay in position until shaking stops completely"
        },
        {
          id: 5,
          action: "Assess",
          description: "Check for injuries and hazards around you",
          duration: 10,
          instruction: "Look around carefully before moving"
        },
        {
          id: 6,
          action: "Evacuate",
          description: "Follow evacuation route to assembly point",
          duration: 120,
          instruction: "Walk calmly, don't run. Help others if safe to do so"
        }
      ]
    },
    {
      id: "fire",
      title: "Fire Evacuation Drill",
      description: "Practice safe evacuation procedures",
      duration: "2-3 minutes",
      participants: "Entire building",
      region: "Urban Areas",
      difficulty: "Easy",
      steps: [
        {
          id: 1,
          action: "Fire Alert",
          description: "Fire alarm sounds - emergency detected",
          duration: 5,
          instruction: "Stop what you're doing immediately"
        },
        {
          id: 2,
          action: "Stay Low",
          description: "Get low to avoid smoke inhalation",
          duration: 5,
          instruction: "Crawl or crouch below smoke level"
        },
        {
          id: 3,
          action: "Check Door",
          description: "Feel door handle for heat before opening",
          duration: 10,
          instruction: "If hot, find alternate exit route"
        },
        {
          id: 4,
          action: "Exit Building",
          description: "Use nearest safe exit, avoid elevators",
          duration: 90,
          instruction: "Move quickly but don't push or run"
        },
        {
          id: 5,
          action: "Assembly Point",
          description: "Gather at designated assembly point",
          duration: 60,
          instruction: "Stay with your class, report to teacher"
        },
        {
          id: 6,
          action: "Roll Call",
          description: "Teacher takes attendance to ensure everyone is safe",
          duration: 30,
          instruction: "Remain quiet and listen for your name"
        }
      ]
    },
    {
      id: "lockdown",
      title: "Security Lockdown Drill",
      description: "Practice lockdown and shelter procedures",
      duration: "5-10 minutes",
      participants: "Entire school",
      region: "All Areas",
      difficulty: "Hard",
      steps: [
        {
          id: 1,
          action: "Lockdown Alert",
          description: "Lockdown announcement heard over intercom",
          duration: 5,
          instruction: "Stop all activities immediately"
        },
        {
          id: 2,
          action: "Secure Room",
          description: "Lock doors and close blinds/curtains",
          duration: 15,
          instruction: "Move away from windows and doors"
        },
        {
          id: 3,
          action: "Hide",
          description: "Move to designated safe area in classroom",
          duration: 10,
          instruction: "Stay quiet and out of sight"
        },
        {
          id: 4,
          action: "Silence",
          description: "Remain completely silent and still",
          duration: 300,
          instruction: "Turn off phones, no talking or movement"
        },
        {
          id: 5,
          action: "Wait for All Clear",
          description: "Wait for official all-clear announcement",
          duration: 60,
          instruction: "Only respond to known authorities"
        }
      ]
    }
  ];

  const currentDrill = drills.find(drill => drill.id === selectedDrill);
  const currentStep = currentDrill?.steps[drillStep];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isRunning && !isPaused && currentStep) {
      interval = setInterval(() => {
        setTimer(prevTimer => {
          if (prevTimer >= currentStep.duration) {
            // Move to next step
            if (drillStep < currentDrill!.steps.length - 1) {
              setDrillStep(prev => prev + 1);
              return 0;
            } else {
              // Drill complete
              setIsRunning(false);
              toast({
                title: "Drill Completed!",
                description: "Great job! You've successfully completed the virtual drill.",
              });
              return 0;
            }
          }
          return prevTimer + 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isRunning, isPaused, currentStep, drillStep, currentDrill, toast]);

  const startDrill = async (drillId: string) => {
    setLoading(true);
    setSelectedDrill(drillId);
    
    // Simulate loading time
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setLoading(false);
    setDrillStep(0);
    setTimer(0);
    setIsRunning(true);
    setIsPaused(false);
    
    toast({
      title: "Virtual Drill Started",
      description: `${drills.find(d => d.id === drillId)?.title} simulation is now running.`,
    });
  };

  const pauseDrill = () => {
    setIsPaused(!isPaused);
  };

  const resetDrill = () => {
    setIsRunning(false);
    setIsPaused(false);
    setDrillStep(0);
    setTimer(0);
  };

  const exitDrill = () => {
    setSelectedDrill(null);
    resetDrill();
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <LoadingSpinner size="lg" text="Initializing Virtual Drill..." />
      </div>
    );
  }

  if (!selectedDrill) {
    return (
      <div className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          {/* Header */}
          <div className="flex items-center mb-6">
            <Link to="/dashboard">
              <Button variant="ghost" className="mr-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
          </div>

          <div className="mb-8 animate-fade-in">
            <h1 className="text-3xl font-bold mb-2">Virtual Drill Simulator</h1>
            <p className="text-muted-foreground">Practice emergency procedures in a safe, controlled environment</p>
          </div>

          {/* Drill Selection */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {drills.map((drill, index) => (
              <Card 
                key={drill.id} 
                className="hover-lift hover-glow transition-all duration-smooth animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">{drill.title}</CardTitle>
                      <CardDescription>{drill.description}</CardDescription>
                    </div>
                    <Badge 
                      variant={drill.difficulty === 'Easy' ? 'secondary' : drill.difficulty === 'Medium' ? 'default' : 'destructive'}
                    >
                      {drill.difficulty}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center text-muted-foreground">
                      <Timer className="w-4 h-4 mr-1" />
                      {drill.duration}
                    </div>
                    <div className="flex items-center text-muted-foreground">
                      <Users className="w-4 h-4 mr-1" />
                      {drill.participants}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-full justify-center">
                    <MapPin className="w-3 h-3 mr-1" />
                    {drill.region}
                  </Badge>
                  <ActionButton
                    variant="primary"
                    className="w-full"
                    onClick={() => startDrill(drill.id)}
                    icon={Play}
                  >
                    Start Virtual Drill
                  </ActionButton>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Safety Information */}
          <Card className="mt-8 bg-gradient-safety text-white animate-slide-in-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="w-5 h-5 mr-2" />
                Virtual Drill Safety Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-3">Before Starting:</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• Ensure you're in a safe environment</li>
                    <li>• Remove any tripping hazards nearby</li>
                    <li>• Have adequate space to move around</li>
                    <li>• Follow instructions carefully</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold mb-3">During the Drill:</h3>
                  <ul className="space-y-1 text-sm text-white/90">
                    <li>• This is practice - real emergencies are different</li>
                    <li>• Focus on proper technique, not speed</li>
                    <li>• Ask questions if you're unsure</li>
                    <li>• Take breaks if needed</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  // Drill execution view
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <ActionButton
            variant="outline"
            onClick={exitDrill}
            icon={ArrowLeft}
          >
            Exit Drill
          </ActionButton>
          <h1 className="text-2xl font-bold">{currentDrill?.title}</h1>
          <div className="flex space-x-2">
            <ActionButton
              variant={isPaused ? "primary" : "secondary"}
              onClick={pauseDrill}
              icon={isPaused ? Play : Pause}
            >
              {isPaused ? "Resume" : "Pause"}
            </ActionButton>
            <ActionButton
              variant="outline"
              onClick={resetDrill}
              icon={RotateCcw}
            >
              Reset
            </ActionButton>
          </div>
        </div>

        {/* Progress Overview */}
        <Card className="mb-6 shadow-elevated">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold">Step {drillStep + 1} of {currentDrill?.steps.length}</h3>
                <p className="text-sm text-muted-foreground">
                  {Math.round((drillStep / (currentDrill?.steps.length || 1)) * 100)}% Complete
                </p>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold">
                  {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, '0')}
                </div>
                <p className="text-sm text-muted-foreground">
                  / {Math.floor((currentStep?.duration || 0) / 60)}:{((currentStep?.duration || 0) % 60).toString().padStart(2, '0')}
                </p>
              </div>
            </div>
            <Progress 
              value={(drillStep + (timer / (currentStep?.duration || 1))) / (currentDrill?.steps.length || 1) * 100} 
              className="mb-2" 
            />
            <Progress 
              value={(timer / (currentStep?.duration || 1)) * 100} 
              className="h-2"
            />
          </CardContent>
        </Card>

        {/* Current Step */}
        {currentStep && (
          <Card className="mb-6 shadow-elevated animate-zoom-in">
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-safety rounded-full flex items-center justify-center">
                  <span className="text-white font-bold">{drillStep + 1}</span>
                </div>
                <div>
                  <CardTitle className="text-xl">{currentStep.action}</CardTitle>
                  <CardDescription>{currentStep.description}</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="p-4 bg-gradient-info/10 rounded-lg border border-safety-blue/20">
                <div className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-safety-blue mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-safety-blue mb-1">Instructions</h4>
                    <p className="text-sm">{currentStep.instruction}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step Timeline */}
        <Card className="shadow-elevated">
          <CardHeader>
            <CardTitle>Drill Timeline</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentDrill?.steps.map((step, index) => (
                <div 
                  key={step.id} 
                  className={`flex items-center space-x-4 p-3 rounded-lg transition-all duration-smooth ${
                    index < drillStep ? 'bg-success-green/10 border border-success-green/20' :
                    index === drillStep ? 'bg-primary/10 border border-primary/20 animate-pulse-glow' :
                    'bg-muted/30'
                  }`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index < drillStep ? 'bg-success-green text-white' :
                    index === drillStep ? 'bg-primary text-primary-foreground' :
                    'bg-muted text-muted-foreground'
                  }`}>
                    {index < drillStep ? (
                      <CheckCircle className="w-4 h-4" />
                    ) : (
                      <span className="text-sm font-bold">{index + 1}</span>
                    )}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium">{step.action}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {step.duration}s
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VirtualDrills;