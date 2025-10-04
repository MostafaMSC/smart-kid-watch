import { Brain, TrendingUp, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const FocusLevel = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Brain className="w-5 h-5 text-primary" />
          مستوى التركيز
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg">
          <div className="text-5xl font-bold text-primary mb-2">82%</div>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-success text-white">ممتاز</Badge>
            <TrendingUp className="w-4 h-4 text-success" />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">التركيز في الحصص الدراسية</span>
              <span className="text-sm font-bold text-primary">85%</span>
            </div>
            <Progress value={85} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">التركيز أثناء الواجبات</span>
              <span className="text-sm font-bold text-warning">75%</span>
            </div>
            <Progress value={75} className="h-2" />
          </div>

          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">التركيز في الأنشطة</span>
              <span className="text-sm font-bold text-success">90%</span>
            </div>
            <Progress value={90} className="h-2" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 bg-muted/50 rounded-lg text-center">
            <p className="text-xs text-muted-foreground mb-1">فترات التركيز</p>
            <p className="text-2xl font-bold text-primary">6</p>
            <p className="text-xs text-muted-foreground">فترة اليوم</p>
          </div>
          <div className="p-3 bg-muted/50 rounded-lg text-center">
            <p className="text-xs text-muted-foreground mb-1">متوسط المدة</p>
            <p className="text-2xl font-bold text-success">45</p>
            <p className="text-xs text-muted-foreground">دقيقة</p>
          </div>
        </div>

        <div className="flex items-start gap-2 p-3 bg-info/10 rounded-lg">
          <AlertCircle className="w-4 h-4 text-info mt-0.5" />
          <div className="text-xs text-muted-foreground">
            <p className="font-medium text-foreground mb-1">نصيحة:</p>
            أفضل أوقات التركيز: 9-11 صباحاً و 3-5 مساءً
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
