import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Play, Pause, Save, Download, Clock, User, Calendar } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Session {
  id: string;
  studentName: string;
  duration: number;
  timestamp: Date;
  avgAttention: number;
  avgEngagement: number;
}

const SessionManager = () => {
  const [isRecording, setIsRecording] = useState(false);
  const [currentSession, setCurrentSession] = useState<Session | null>(null);
  const [sessions, setSessions] = useState<Session[]>([
    {
      id: "1",
      studentName: "Alex Chen",
      duration: 3600,
      timestamp: new Date(Date.now() - 86400000),
      avgAttention: 0.78,
      avgEngagement: 0.82,
    },
    {
      id: "2",
      studentName: "Maria Garcia",
      duration: 2700,
      timestamp: new Date(Date.now() - 172800000),
      avgAttention: 0.85,
      avgEngagement: 0.88,
    },
  ]);
  const { toast } = useToast();

  const formatDuration = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    return `${hours}h ${minutes}m`;
  };

  const handleStartRecording = () => {
    setIsRecording(true);
    setCurrentSession({
      id: Date.now().toString(),
      studentName: "Current Student",
      duration: 0,
      timestamp: new Date(),
      avgAttention: 0,
      avgEngagement: 0,
    });
    toast({
      title: "Session Started",
      description: "Recording cognitive data...",
    });
  };

  const handleStopRecording = () => {
    if (currentSession) {
      setSessions([currentSession, ...sessions]);
      toast({
        title: "Session Saved",
        description: "Cognitive data has been recorded successfully.",
      });
    }
    setIsRecording(false);
    setCurrentSession(null);
  };

  const handleExportSession = (session: Session) => {
    const csvContent = `Student,Duration,Timestamp,Avg Attention,Avg Engagement\n${session.studentName},${session.duration},${session.timestamp.toISOString()},${session.avgAttention},${session.avgEngagement}`;
    const blob = new Blob([csvContent], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `session-${session.id}.csv`;
    a.click();
    toast({
      title: "Export Complete",
      description: "Session data downloaded as CSV.",
    });
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2">Session Management</h2>
            <p className="text-muted-foreground">Record and analyze cognitive monitoring sessions</p>
          </div>
          {!isRecording ? (
            <Button 
              onClick={handleStartRecording}
              className="bg-success hover:bg-success/90"
              size="lg"
            >
              <Play className="w-5 h-5 mr-2" />
              Start Recording
            </Button>
          ) : (
            <Button 
              onClick={handleStopRecording}
              variant="destructive"
              size="lg"
            >
              <Pause className="w-5 h-5 mr-2" />
              Stop & Save
            </Button>
          )}
        </div>

        {/* Current Session */}
        {isRecording && currentSession && (
          <Card className="p-6 mb-8 bg-success/10 border-success/30 animate-pulse-glow">
            <div className="flex items-center gap-4">
              <div className="w-3 h-3 bg-success rounded-full animate-pulse" />
              <div className="flex-1">
                <p className="font-semibold text-success">Recording in Progress</p>
                <p className="text-sm text-muted-foreground">Capturing real-time cognitive data</p>
              </div>
              <Clock className="w-5 h-5 text-success" />
            </div>
          </Card>
        )}

        {/* Session History */}
        <div className="space-y-4">
          <h3 className="text-xl font-semibold">Session History</h3>
          {sessions.map((session) => (
            <Card key={session.id} className="p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold mb-1">{session.studentName}</h4>
                    <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {formatDuration(session.duration)}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {session.timestamp.toLocaleDateString()}
                      </div>
                    </div>
                    <div className="mt-2 flex gap-4">
                      <span className="text-xs">
                        Attention: <strong className="text-primary">{(session.avgAttention * 100).toFixed(1)}%</strong>
                      </span>
                      <span className="text-xs">
                        Engagement: <strong className="text-success">{(session.avgEngagement * 100).toFixed(1)}%</strong>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Play className="w-4 h-4 mr-2" />
                    Replay
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleExportSession(session)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Export
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SessionManager;
