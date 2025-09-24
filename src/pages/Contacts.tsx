import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Phone, 
  Shield, 
  Hospital, 
  Flame,
  Users,
  MapPin,
  Clock
} from "lucide-react";

const Contacts = () => {
  const emergencyContacts = [
    {
      category: "National Emergency",
      contacts: [
        {
          name: "Emergency Services",
          number: "112",
          description: "All-in-one emergency number",
          icon: Shield,
          available: "24/7",
          priority: "high"
        },
        {
          name: "Fire Department",
          number: "101",
          description: "Fire emergency services",
          icon: Flame,
          available: "24/7",
          priority: "high"
        },
        {
          name: "Medical Emergency",
          number: "108",
          description: "Ambulance services",
          icon: Hospital,
          available: "24/7",
          priority: "high"
        }
      ]
    },
    {
      category: "School Administration",
      contacts: [
        {
          name: "Principal Office",
          number: "+91 98765-43210",
          description: "Direct line to principal",
          icon: Users,
          available: "Mon-Fri 8AM-6PM",
          priority: "medium"
        },
        {
          name: "School Emergency Cell",
          number: "+91 98765-43211",
          description: "24/7 school emergency response",
          icon: Shield,
          available: "24/7",
          priority: "high"
        },
        {
          name: "School Security",
          number: "+91 98765-43212",
          description: "Campus security office",
          icon: Shield,
          available: "24/7",
          priority: "medium"
        }
      ]
    },
    {
      category: "Local Authorities",
      contacts: [
        {
          name: "District Collector",
          number: "+91 98765-43213",
          description: "District administration",
          icon: Users,
          available: "Mon-Fri 10AM-5PM",
          priority: "low"
        },
        {
          name: "Local Police Station",
          number: "100",
          description: "Nearest police station",
          icon: Shield,
          available: "24/7",
          priority: "medium"
        },
        {
          name: "Disaster Management Cell",
          number: "+91 98765-43214",
          description: "Local disaster response team",
          icon: Shield,
          available: "24/7",
          priority: "high"
        }
      ]
    },
    {
      category: "Parent/Guardian",
      contacts: [
        {
          name: "Primary Contact",
          number: "+91 98765-43215",
          description: "Father/Mother",
          icon: Users,
          available: "24/7",
          priority: "high"
        },
        {
          name: "Secondary Contact",
          number: "+91 98765-43216",
          description: "Guardian/Relative",
          icon: Users,
          available: "24/7",
          priority: "medium"
        }
      ]
    }
  ];

  const handleCall = (number: string, name: string) => {
    // In a real app, this would initiate a call
    if (window.confirm(`Call ${name} at ${number}?`)) {
      window.location.href = `tel:${number}`;
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-emergency-red';
      case 'medium': return 'bg-emergency-orange';
      case 'low': return 'bg-safety-blue';
      default: return 'bg-muted';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high': return 'destructive';
      case 'medium': return 'secondary';
      case 'low': return 'outline';
      default: return 'outline';
    }
  };

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

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Emergency Contacts</h1>
          <p className="text-muted-foreground">Quick access to important phone numbers</p>
        </div>

        {/* Quick Dial Section */}
        <Card className="mb-8 bg-gradient-emergency text-white shadow-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Phone className="w-5 h-5 mr-2" />
              Quick Dial Emergency Numbers
            </CardTitle>
            <CardDescription className="text-white/80">
              Tap to call immediately in case of emergency
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-16 text-lg"
                onClick={() => handleCall("112", "Emergency Services")}
              >
                <div className="text-center">
                  <Shield className="w-6 h-6 mx-auto mb-1" />
                  <div className="font-bold">112</div>
                  <div className="text-xs">Emergency</div>
                </div>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-16 text-lg"
                onClick={() => handleCall("101", "Fire Department")}
              >
                <div className="text-center">
                  <Flame className="w-6 h-6 mx-auto mb-1" />
                  <div className="font-bold">101</div>
                  <div className="text-xs">Fire</div>
                </div>
              </Button>
              <Button 
                variant="secondary" 
                size="lg" 
                className="h-16 text-lg"
                onClick={() => handleCall("108", "Medical Emergency")}
              >
                <div className="text-center">
                  <Hospital className="w-6 h-6 mx-auto mb-1" />
                  <div className="font-bold">108</div>
                  <div className="text-xs">Medical</div>
                </div>
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Contacts */}
        <div className="space-y-8">
          {emergencyContacts.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="shadow-card">
              <CardHeader>
                <CardTitle>{category.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.contacts.map((contact, contactIndex) => {
                    const IconComponent = contact.icon;
                    return (
                      <div key={contactIndex} className="flex items-center justify-between p-4 rounded-lg border hover:bg-muted/50 transition-colors">
                        <div className="flex items-center space-x-4">
                          <div className={`p-3 rounded-lg ${getPriorityColor(contact.priority)}`}>
                            <IconComponent className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-semibold">{contact.name}</h3>
                            <p className="text-sm text-muted-foreground">{contact.description}</p>
                            <div className="flex items-center space-x-3 mt-1">
                              <Badge variant={getPriorityBadge(contact.priority)} className="text-xs">
                                {contact.priority} priority
                              </Badge>
                              <div className="flex items-center text-xs text-muted-foreground">
                                <Clock className="w-3 h-3 mr-1" />
                                {contact.available}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-mono text-lg font-semibold mb-2">
                            {contact.number}
                          </div>
                          <Button 
                            size="sm"
                            onClick={() => handleCall(contact.number, contact.name)}
                            className="bg-gradient-safety"
                          >
                            <Phone className="w-4 h-4 mr-2" />
                            Call
                          </Button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Safety Tips */}
        <Card className="mt-8 bg-gradient-safety text-white shadow-card">
          <CardHeader>
            <CardTitle className="flex items-center">
              <MapPin className="w-5 h-5 mr-2" />
              Important Safety Information
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">When to Call Emergency Numbers:</h3>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• Immediate threat to life or safety</li>
                  <li>• Fire or smoke in the building</li>
                  <li>• Medical emergency or injury</li>
                  <li>• Natural disaster (earthquake, flood)</li>
                  <li>• Security threat or suspicious activity</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">What to Tell Emergency Services:</h3>
                <ul className="space-y-1 text-sm text-white/90">
                  <li>• Your exact location</li>
                  <li>• Nature of the emergency</li>
                  <li>• Number of people involved</li>
                  <li>• Any immediate dangers</li>
                  <li>• Your name and contact number</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Contacts;