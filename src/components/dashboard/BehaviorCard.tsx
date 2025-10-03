import { Heart, Star, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const BehaviorCard = () => {
  const behaviorScore = 85;
  
  const behaviors = [
    { label: "الانضباط", score: 90, icon: Star, color: "text-success" },
    { label: "التعاون", score: 85, icon: Heart, color: "text-primary" },
    { label: "الواجبات", score: 80, icon: AlertCircle, color: "text-warning" },
  ];

  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Star className="w-5 h-5 text-warning" />
            تقييم السلوك
          </span>
          <span className="text-2xl font-bold text-primary">{behaviorScore}%</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="p-4 bg-gradient-to-br from-success/10 to-primary/10 rounded-lg text-center">
          <p className="text-sm text-muted-foreground mb-1">التقييم العام</p>
          <p className="text-2xl font-bold text-success">ممتاز</p>
        </div>
        
        {behaviors.map((behavior, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <behavior.icon className={`w-4 h-4 ${behavior.color}`} />
                <span className="text-sm font-medium">{behavior.label}</span>
              </div>
              <span className="text-sm font-bold">{behavior.score}%</span>
            </div>
            <Progress value={behavior.score} className="h-2" />
          </div>
        ))}
        
        <div className="text-xs text-muted-foreground pt-2 border-t">
          آخر تقييم: منذ ساعتين
        </div>
      </CardContent>
    </Card>
  );
};
