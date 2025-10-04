import { Activity, TrendingDown, Heart } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const StressLevel = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Activity className="w-5 h-5 text-primary" />
          مستوى التوتر
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center p-4 bg-gradient-to-br from-success/10 to-success/5 rounded-lg">
          <div className="text-5xl font-bold text-success mb-2">منخفض</div>
          <div className="flex items-center justify-center gap-2">
            <Badge className="bg-success text-white">مستوى صحي</Badge>
            <Heart className="w-4 h-4 text-success" />
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">مستوى التوتر الحالي</span>
              <span className="text-sm font-bold text-success">28/100</span>
            </div>
            <Progress value={28} className="h-2" />
          </div>

          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="p-3 bg-success/5 rounded-lg">
              <p className="text-lg font-bold text-success">85%</p>
              <p className="text-xs text-muted-foreground">وقت الراحة</p>
            </div>
            <div className="p-3 bg-warning/5 rounded-lg">
              <p className="text-lg font-bold text-warning">12%</p>
              <p className="text-xs text-muted-foreground">توتر متوسط</p>
            </div>
            <div className="p-3 bg-destructive/5 rounded-lg">
              <p className="text-lg font-bold text-destructive">3%</p>
              <p className="text-xs text-muted-foreground">توتر عالي</p>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-success"></div>
              <span className="text-sm">متوسط معدل النبض</span>
            </div>
            <span className="text-sm font-bold">72 نبضة/دقيقة</span>
          </div>

          <div className="flex items-center justify-between p-3 bg-muted/50 rounded-lg">
            <div className="flex items-center gap-2">
              <TrendingDown className="w-4 h-4 text-success" />
              <span className="text-sm">تحسن عن الأمس</span>
            </div>
            <span className="text-sm font-bold text-success">-15%</span>
          </div>
        </div>

        <div className="p-3 bg-info/10 rounded-lg">
          <p className="text-xs font-medium text-foreground mb-2">أوقات التوتر المرتفع:</p>
          <div className="flex gap-2 flex-wrap">
            <Badge variant="outline" className="text-xs">8:30 ص - الامتحان</Badge>
            <Badge variant="outline" className="text-xs">1:00 م - الحصة الرياضية</Badge>
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground pt-2 border-t">
          يتم قياس التوتر من خلال معدل النبض والنشاط البدني
        </div>
      </CardContent>
    </Card>
  );
};
