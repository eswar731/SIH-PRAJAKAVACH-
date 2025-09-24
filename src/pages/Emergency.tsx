import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  AlertTriangle, 
  Phone, 
  MapPin, 
  Clock,
  Shield,
  Users,
  CheckCircle
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Emergency = () => {
  const { toast } = useToast();
  const [sosActivated, setSosActivated] = useState(false);
  const [location, setLocation] = useState<{lat: number, lng: number} | null>(null);

  const handleSOS = () => {
    setSosActivated(true);
    
    // Get user location
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude
          });
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }

    toast({
      title: "SOS Alert Sent!",
      description: "Emergency alert has been sent to school administrators and emergency contacts.",
      variant: "destructive",
    });

    // Auto-reset after 30 seconds for demo
    setTimeout(() => {
      setSosActivated(false);
      setLocation(null);
    }, 30000);
  };

  const emergencySteps = [
    {
      disaster: "Earthquake",
      steps: [
        "DROP to hands and knees",
        "COVER head and neck under desk",
        "HOLD ON until shaking stops",
        "Stay calm and count slowly",
        "Exit only after shaking stops"
      ]
    },
    {
      disaster: "Fire",
      steps: [
        "Stay low to avoid smoke",
        "Feel doors before opening",
        "Use nearest safe exit",
        "Never use elevators",
        "Go to assembly point"
      ]
    },
    {
      disaster: "Flood",
      steps: [
        "Move to higher ground immediately",
        "Avoid walking through water",
        "Stay away from electrical items",
        "Listen to emergency broadcasts",
        "Wait for rescue if trapped"
      ]
    }
  ];

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* SOS Section */}
          <div className="space-y-6">
            <Card className={`shadow-elevated transition-all duration-300 ${sosActivated ? 'ring-2 ring-emergency-red' : ''}`}>
              <CardHeader className="text-center">
                <AlertTriangle className={`w-16 h-16 mx-auto mb-4 ${sosActivated ? 'text-emergency-red animate-pulse' : 'text-emergency-orange'}`} />
                <CardTitle className="text-2xl">Emergency SOS</CardTitle>
                <CardDescription>
                  Instantly alert school authorities and emergency services
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {sosActivated ? (
                  <div className="text-center space-y-4">
                    <Badge variant="destructive" className="text-lg px-4 py-2">
                      <CheckCircle className="w-4 h-4 mr-2" />
                      SOS ACTIVATED
                    </Badge>
                    <div className="bg-emergency-red/10 p-4 rounded-lg">
                      <p className="text-sm text-emergency-red font-medium">
                        Emergency alert sent successfully!
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        School administrators and emergency contacts have been notified
                      </p>
                      {location && (
                        <div className="flex items-center justify-center mt-2 text-xs text-muted-foreground">
                          <MapPin className="w-3 h-3 mr-1" />
                          Location shared: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-1" />
                      Help is on the way
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-4">
                    <Button 
                      size="lg"
                      className="w-full h-20 text-xl bg-gradient-emergency hover:shadow-glow transition-all duration-300"
                      onClick={handleSOS}
                    >
                      <AlertTriangle className="w-8 h-8 mr-3" />
                      PRESS FOR EMERGENCY
                    </Button>
                    <p className="text-sm text-muted-foreground">
                      This will immediately send your location to school authorities
                    </p>
                  </div>
                )}

                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <Shield className="w-6 h-6 mx-auto mb-1 text-safety-blue" />
                    <p className="text-xs font-medium">Secure</p>
                    <p className="text-xs text-muted-foreground">End-to-end encrypted</p>
                  </div>
                  <div className="text-center p-3 bg-muted/50 rounded-lg">
                    <MapPin className="w-6 h-6 mx-auto mb-1 text-safety-green" />
                    <p className="text-xs font-medium">Location</p>
                    <p className="text-xs text-muted-foreground">Auto-shared</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-lg">Quick Emergency Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/contacts">
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="w-4 h-4 mr-3" />
                    Emergency Contacts
                  </Button>
                </Link>
                <Button variant="outline" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-3" />
                  Mark Yourself Safe
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <MapPin className="w-4 h-4 mr-3" />
                  Safe Assembly Points
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Emergency Procedures */}
          <div className="space-y-6">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Emergency Procedures</CardTitle>
                <CardDescription>Quick reference for common disasters</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {emergencySteps.map((procedure, index) => (
                  <div key={index} className="border-l-4 border-primary pl-4">
                    <h3 className="font-semibold text-lg mb-3">{procedure.disaster}</h3>
                    <ol className="space-y-2">
                      {procedure.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start space-x-2">
                          <span className="flex items-center justify-center w-6 h-6 bg-primary text-primary-foreground rounded-full text-xs font-bold mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Emergency Tips */}
            <Card className="bg-gradient-safety text-white shadow-elevated">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Remember
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li>• Stay calm and think clearly</li>
                  <li>• Follow your teacher's instructions</li>
                  <li>• Help others if you can do so safely</li>
                  <li>• Never leave the school premises without permission</li>
                  <li>• Trust your emergency training</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Emergency;