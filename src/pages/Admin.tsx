import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { 
  ArrowLeft, 
  Users, 
  BookOpen, 
  Brain, 
  Shield, 
  AlertTriangle,
  TrendingUp,
  CheckCircle,
  Clock,
  Award,
  Bell,
  Send
} from "lucide-react";

const Admin = () => {
  const schoolStats = {
    totalStudents: 1250,
    activeUsers: 892,
    completedModules: 2674,
    averageScore: 78,
    emergencyAlerts: 3,
    certificatesIssued: 445
  };

  const classData = [
    {
      class: "Class 10-A",
      students: 45,
      completed: 38,
      averageScore: 85,
      lastActivity: "2 hours ago"
    },
    {
      class: "Class 9-B",
      students: 42,
      completed: 35,
      averageScore: 79,
      lastActivity: "4 hours ago"
    },
    {
      class: "Class 8-C",
      students: 40,
      completed: 32,
      averageScore: 82,
      lastActivity: "1 day ago"
    },
    {
      class: "Class 7-A",
      students: 38,
      completed: 28,
      averageScore: 76,
      lastActivity: "2 days ago"
    }
  ];

  const recentAlerts = [
    {
      id: 1,
      type: "Emergency Drill",
      message: "Fire drill scheduled for tomorrow at 11:00 AM",
      timestamp: "2 hours ago",
      priority: "medium"
    },
    {
      id: 2,
      type: "SOS Alert",
      message: "Student emergency alert from Block-B resolved",
      timestamp: "1 day ago",
      priority: "high"
    },
    {
      id: 3,
      type: "Training Complete",
      message: "Class 10-A completed earthquake safety module",
      timestamp: "2 days ago",
      priority: "low"
    }
  ];

  const modulePerformance = [
    {
      module: "Earthquake Safety",
      completed: 743,
      total: 892,
      averageScore: 81,
      completionRate: 83
    },
    {
      module: "Fire Safety",
      completed: 689,
      total: 892,
      averageScore: 79,
      completionRate: 77
    },
    {
      module: "Flood Response",
      completed: 567,
      total: 892,
      averageScore: 75,
      completionRate: 64
    },
    {
      module: "Cyclone Preparedness",
      completed: 423,
      total: 892,
      averageScore: 73,
      completionRate: 47
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link to="/dashboard">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Dashboard
              </Button>
            </Link>
            <h1 className="text-3xl font-bold">Admin Dashboard</h1>
            <p className="text-muted-foreground">Manage disaster preparedness training across your institution</p>
          </div>
          <div className="flex space-x-3">
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Send Alert
            </Button>
            <Button className="bg-gradient-safety">
              <Send className="w-4 h-4 mr-2" />
              Broadcast Message
            </Button>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6 mb-8">
          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Users className="w-8 h-8 text-primary" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.totalStudents}</p>
                  <p className="text-sm text-muted-foreground">Total Students</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Shield className="w-8 h-8 text-safety-green" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.activeUsers}</p>
                  <p className="text-sm text-muted-foreground">Active Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <BookOpen className="w-8 h-8 text-safety-blue" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.completedModules}</p>
                  <p className="text-sm text-muted-foreground">Modules Completed</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Brain className="w-8 h-8 text-emergency-orange" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.averageScore}%</p>
                  <p className="text-sm text-muted-foreground">Average Score</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <AlertTriangle className="w-8 h-8 text-emergency-red" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.emergencyAlerts}</p>
                  <p className="text-sm text-muted-foreground">Emergency Alerts</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-card">
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <Award className="w-8 h-8 text-success-green" />
                <div>
                  <p className="text-2xl font-bold">{schoolStats.certificatesIssued}</p>
                  <p className="text-sm text-muted-foreground">Certificates Issued</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="classes">Classes</TabsTrigger>
            <TabsTrigger value="modules">Modules</TabsTrigger>
            <TabsTrigger value="alerts">Alerts</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Overall Progress */}
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2" />
                    Overall Progress
                  </CardTitle>
                  <CardDescription>School-wide disaster preparedness training progress</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Students Enrolled in Training</span>
                        <span>{Math.round((schoolStats.activeUsers / schoolStats.totalStudents) * 100)}%</span>
                      </div>
                      <Progress value={(schoolStats.activeUsers / schoolStats.totalStudents) * 100} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Average Completion Rate</span>
                        <span>67%</span>
                      </div>
                      <Progress value={67} />
                    </div>
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Average Quiz Performance</span>
                        <span>{schoolStats.averageScore}%</span>
                      </div>
                      <Progress value={schoolStats.averageScore} />
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card className="shadow-elevated">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentAlerts.map((alert) => (
                      <div key={alert.id} className="flex items-start space-x-3 p-3 rounded-lg bg-muted/50">
                        <div className={`p-2 rounded-full ${
                          alert.priority === 'high' ? 'bg-emergency-red' :
                          alert.priority === 'medium' ? 'bg-emergency-orange' : 'bg-safety-blue'
                        }`}>
                          <Bell className="w-4 h-4 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            <span className="font-medium text-sm">{alert.type}</span>
                            <Badge variant="outline" className="text-xs">
                              {alert.priority}
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground">{alert.message}</p>
                          <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="classes" className="space-y-6">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Class Performance</CardTitle>
                <CardDescription>Track progress across different classes</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {classData.map((classInfo, index) => (
                    <div key={index} className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h3 className="font-semibold">{classInfo.class}</h3>
                          <p className="text-sm text-muted-foreground">
                            {classInfo.students} students • Last activity: {classInfo.lastActivity}
                          </p>
                        </div>
                        <div className="text-right">
                          <Badge variant="secondary">
                            {classInfo.averageScore}% avg score
                          </Badge>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-sm mb-2">
                        <span>Completion Rate</span>
                        <span>{classInfo.completed}/{classInfo.students} ({Math.round((classInfo.completed / classInfo.students) * 100)}%)</span>
                      </div>
                      <Progress value={(classInfo.completed / classInfo.students) * 100} />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="modules" className="space-y-6">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Module Performance</CardTitle>
                <CardDescription>Track completion rates and scores for each disaster preparedness module</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {modulePerformance.map((module, index) => (
                    <div key={index} className="p-4 border rounded-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <h3 className="font-semibold text-lg">{module.module}</h3>
                          <p className="text-sm text-muted-foreground">
                            {module.completed} of {module.total} students completed
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{module.completionRate}%</div>
                          <p className="text-sm text-muted-foreground">completion rate</p>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span>{module.completed}/{module.total}</span>
                          </div>
                          <Progress value={module.completionRate} />
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Average Score</span>
                            <span>{module.averageScore}%</span>
                          </div>
                          <Progress value={module.averageScore} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="alerts" className="space-y-6">
            <Card className="shadow-elevated">
              <CardHeader>
                <CardTitle>Emergency Alerts & Communications</CardTitle>
                <CardDescription>Manage emergency notifications and school-wide communications</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Button className="h-20 bg-gradient-emergency">
                      <div className="text-center">
                        <AlertTriangle className="w-6 h-6 mx-auto mb-1" />
                        <span className="text-sm">Emergency Alert</span>
                      </div>
                    </Button>
                    <Button variant="secondary" className="h-20">
                      <div className="text-center">
                        <Bell className="w-6 h-6 mx-auto mb-1" />
                        <span className="text-sm">Drill Notification</span>
                      </div>
                    </Button>
                    <Button variant="outline" className="h-20">
                      <div className="text-center">
                        <Send className="w-6 h-6 mx-auto mb-1" />
                        <span className="text-sm">General Message</span>
                      </div>
                    </Button>
                  </div>

                  <div className="border-t pt-6">
                    <h3 className="font-semibold mb-4">Recent Alerts</h3>
                    <div className="space-y-3">
                      {recentAlerts.map((alert) => (
                        <div key={alert.id} className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
                          <div className="flex items-center space-x-3">
                            <div className={`p-2 rounded-full ${
                              alert.priority === 'high' ? 'bg-emergency-red' :
                              alert.priority === 'medium' ? 'bg-emergency-orange' : 'bg-safety-blue'
                            }`}>
                              <Bell className="w-4 h-4 text-white" />
                            </div>
                            <div>
                              <p className="font-medium">{alert.type}</p>
                              <p className="text-sm text-muted-foreground">{alert.message}</p>
                            </div>
                          </div>
                          <div className="text-right">
                            <Badge variant={alert.priority === 'high' ? 'destructive' : 'secondary'}>
                              {alert.priority}
                            </Badge>
                            <p className="text-xs text-muted-foreground mt-1">{alert.timestamp}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Admin;