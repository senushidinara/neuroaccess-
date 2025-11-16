import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { TrendingUp, TrendingDown, AlertCircle, CheckCircle, Eye } from "lucide-react";

interface Student {
  id: string;
  name: string;
  initials: string;
  averageAttention: number;
  averageEngagement: number;
  sessionsCount: number;
  lastSession: string;
  trend: "up" | "down" | "stable";
  alerts: number;
}

const StudentProfiles = () => {
  const students: Student[] = [
    {
      id: "1",
      name: "Alex Chen",
      initials: "AC",
      averageAttention: 0.78,
      averageEngagement: 0.82,
      sessionsCount: 15,
      lastSession: "2 hours ago",
      trend: "up",
      alerts: 0,
    },
    {
      id: "2",
      name: "Maria Garcia",
      initials: "MG",
      averageAttention: 0.85,
      averageEngagement: 0.88,
      sessionsCount: 22,
      lastSession: "1 day ago",
      trend: "up",
      alerts: 0,
    },
    {
      id: "3",
      name: "James Wilson",
      initials: "JW",
      averageAttention: 0.62,
      averageEngagement: 0.58,
      sessionsCount: 12,
      lastSession: "3 hours ago",
      trend: "down",
      alerts: 2,
    },
    {
      id: "4",
      name: "Priya Patel",
      initials: "PP",
      averageAttention: 0.91,
      averageEngagement: 0.94,
      sessionsCount: 28,
      lastSession: "5 hours ago",
      trend: "up",
      alerts: 0,
    },
    {
      id: "5",
      name: "Omar Hassan",
      initials: "OH",
      averageAttention: 0.71,
      averageEngagement: 0.75,
      sessionsCount: 18,
      lastSession: "1 day ago",
      trend: "stable",
      alerts: 1,
    },
    {
      id: "6",
      name: "Sofia Martinez",
      initials: "SM",
      averageAttention: 0.88,
      averageEngagement: 0.86,
      sessionsCount: 20,
      lastSession: "6 hours ago",
      trend: "up",
      alerts: 0,
    },
  ];

  const getTrendIcon = (trend: string) => {
    if (trend === "up") return <TrendingUp className="w-4 h-4 text-success" />;
    if (trend === "down") return <TrendingDown className="w-4 h-4 text-destructive" />;
    return <div className="w-4 h-4" />;
  };

  const getPerformanceColor = (score: number) => {
    if (score >= 0.8) return "text-success";
    if (score >= 0.6) return "text-warning";
    return "text-destructive";
  };

  return (
    <section className="py-12 px-4 bg-muted/20">
      <div className="container mx-auto max-w-7xl">
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-2">Student Profiles</h2>
          <p className="text-muted-foreground">Monitor cognitive performance across your classroom</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <Card key={student.id} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all group">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {student.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{student.name}</h3>
                    <p className="text-xs text-muted-foreground">{student.sessionsCount} sessions</p>
                  </div>
                </div>
                {student.alerts > 0 ? (
                  <Badge variant="destructive" className="gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {student.alerts}
                  </Badge>
                ) : (
                  <Badge variant="outline" className="gap-1 border-success/50 text-success">
                    <CheckCircle className="w-3 h-3" />
                    On Track
                  </Badge>
                )}
              </div>

              <div className="space-y-3 mb-4">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Attention</span>
                    <span className={`text-sm font-semibold ${getPerformanceColor(student.averageAttention)}`}>
                      {(student.averageAttention * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-primary transition-all duration-300"
                      style={{ width: `${student.averageAttention * 100}%` }}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">Engagement</span>
                    <span className={`text-sm font-semibold ${getPerformanceColor(student.averageEngagement)}`}>
                      {(student.averageEngagement * 100).toFixed(0)}%
                    </span>
                  </div>
                  <div className="h-2 bg-muted rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-success transition-all duration-300"
                      style={{ width: `${student.averageEngagement * 100}%` }}
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  {getTrendIcon(student.trend)}
                  <span>Last: {student.lastSession}</span>
                </div>
                <Button variant="ghost" size="sm" className="h-8 text-xs">
                  <Eye className="w-3 h-3 mr-1" />
                  View Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StudentProfiles;
