import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, AlertCircle, TrendingDown, CheckCircle, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Notification {
  id: string;
  type: "alert" | "info" | "success" | "warning";
  title: string;
  message: string;
  student?: string;
  timestamp: Date;
  read: boolean;
}

const NotificationCenter = () => {
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      type: "alert",
      title: "Low Attention Detected",
      message: "Student James Wilson showing decreased attention levels for 15 minutes",
      student: "James Wilson",
      timestamp: new Date(Date.now() - 900000),
      read: false,
    },
    {
      id: "2",
      type: "warning",
      title: "High Cognitive Load",
      message: "Omar Hassan experiencing elevated cognitive load - consider break or content adjustment",
      student: "Omar Hassan",
      timestamp: new Date(Date.now() - 1800000),
      read: false,
    },
    {
      id: "3",
      type: "success",
      title: "Optimal Learning State",
      message: "Maria Garcia showing excellent engagement - ideal time for advanced concepts",
      student: "Maria Garcia",
      timestamp: new Date(Date.now() - 3600000),
      read: true,
    },
    {
      id: "4",
      type: "info",
      title: "Session Complete",
      message: "Alex Chen's monitoring session completed - 45 minutes recorded",
      student: "Alex Chen",
      timestamp: new Date(Date.now() - 7200000),
      read: true,
    },
  ]);

  const unreadCount = notifications.filter(n => !n.read).length;

  const getIcon = (type: string) => {
    switch (type) {
      case "alert":
        return <AlertCircle className="w-5 h-5 text-destructive" />;
      case "warning":
        return <TrendingDown className="w-5 h-5 text-warning" />;
      case "success":
        return <CheckCircle className="w-5 h-5 text-success" />;
      default:
        return <Bell className="w-5 h-5 text-primary" />;
    }
  };

  const getColorClass = (type: string) => {
    switch (type) {
      case "alert":
        return "border-destructive/20 bg-destructive/5";
      case "warning":
        return "border-warning/20 bg-warning/5";
      case "success":
        return "border-success/20 bg-success/5";
      default:
        return "border-primary/20 bg-primary/5";
    }
  };

  const markAsRead = (id: string) => {
    setNotifications(notifications.map(n => 
      n.id === id ? { ...n, read: true } : n
    ));
  };

  const dismissNotification = (id: string) => {
    setNotifications(notifications.filter(n => n.id !== id));
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    
    if (minutes < 60) return `${minutes}m ago`;
    if (hours < 24) return `${hours}h ago`;
    return date.toLocaleDateString();
  };

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Bell className="w-8 h-8 text-primary" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 bg-destructive text-xs">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <div>
              <h2 className="text-3xl font-bold">Notifications</h2>
              <p className="text-sm text-muted-foreground">
                {unreadCount > 0 ? `${unreadCount} unread notifications` : "All caught up!"}
              </p>
            </div>
          </div>
          {unreadCount > 0 && (
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setNotifications(notifications.map(n => ({ ...n, read: true })))}
            >
              Mark All Read
            </Button>
          )}
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => (
            <Card 
              key={notification.id} 
              className={`p-4 transition-all ${getColorClass(notification.type)} ${
                !notification.read ? 'border-l-4' : 'opacity-75'
              }`}
            >
              <div className="flex items-start gap-4">
                <div className="mt-1">
                  {getIcon(notification.type)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-2 mb-1">
                    <h3 className="font-semibold text-sm">{notification.title}</h3>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-muted-foreground whitespace-nowrap">
                        {formatTimestamp(notification.timestamp)}
                      </span>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="h-6 w-6 p-0 hover:bg-destructive/10"
                        onClick={() => dismissNotification(notification.id)}
                      >
                        <X className="w-3 h-3" />
                      </Button>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-2">{notification.message}</p>
                  {notification.student && (
                    <Badge variant="outline" className="text-xs">
                      {notification.student}
                    </Badge>
                  )}
                </div>
              </div>
              {!notification.read && (
                <div className="mt-3 pt-3 border-t border-border/50">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-7 text-xs"
                    onClick={() => markAsRead(notification.id)}
                  >
                    Mark as Read
                  </Button>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NotificationCenter;
