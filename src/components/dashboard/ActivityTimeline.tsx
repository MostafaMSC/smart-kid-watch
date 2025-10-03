import { Clock, MapPin, BookOpen, Coffee, Home } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const activities = [
  {
    time: "14:30",
    title: "انصراف من المدرسة",
    location: "البوابة الرئيسية",
    icon: Home,
    status: "completed",
    color: "success"
  },
  {
    time: "12:30",
    title: "استراحة الغداء",
    location: "الكافتيريا",
    icon: Coffee,
    status: "completed",
    color: "warning"
  },
  {
    time: "10:00",
    title: "حصة الرياضيات",
    location: "الفصل 6-أ",
    icon: BookOpen,
    status: "completed",
    color: "primary"
  },
  {
    time: "08:00",
    title: "استراحة قصيرة",
    location: "الساحة",
    icon: MapPin,
    status: "completed",
    color: "success"
  },
  {
    time: "07:15",
    title: "الحضور للمدرسة",
    location: "البوابة الرئيسية",
    icon: Clock,
    status: "completed",
    color: "success"
  },
];

export const ActivityTimeline = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          الجدول الزمني لليوم (عبر الساعة)
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="relative">
          <div className="absolute right-8 top-0 bottom-0 w-0.5 bg-border"></div>
          
          <div className="space-y-6">
            {activities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div key={index} className="relative flex gap-4 items-start">
                  <div className={`flex-shrink-0 w-16 text-right pt-1`}>
                    <span className="text-sm font-medium text-muted-foreground">{activity.time}</span>
                  </div>
                  
                  <div className={`flex-shrink-0 w-10 h-10 rounded-full bg-${activity.color}/10 flex items-center justify-center relative z-10 border-4 border-background`}>
                    <Icon className={`w-5 h-5 text-${activity.color}`} style={{ color: `hsl(var(--${activity.color}))` }} />
                  </div>
                  
                  <div className="flex-1 pb-6">
                    <div className="bg-muted/50 p-3 rounded-lg hover:bg-muted transition-colors">
                      <h4 className="font-medium text-sm mb-1">{activity.title}</h4>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-3 h-3 text-muted-foreground" />
                        <span className="text-xs text-muted-foreground">{activity.location}</span>
                        <Badge variant="secondary" className="mr-auto text-xs">
                          {activity.status === "completed" ? "مكتمل" : "قادم"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-6 pt-4 border-t">
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-2 bg-primary/5 rounded">
              <p className="text-xs text-muted-foreground">وقت في الفصل</p>
              <p className="text-lg font-bold text-primary">6 ساعات</p>
            </div>
            <div className="p-2 bg-warning/5 rounded">
              <p className="text-xs text-muted-foreground">وقت الاستراحة</p>
              <p className="text-lg font-bold text-warning">45 دقيقة</p>
            </div>
            <div className="p-2 bg-success/5 rounded">
              <p className="text-xs text-muted-foreground">الأنشطة</p>
              <p className="text-lg font-bold text-success">5 نشاطات</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
