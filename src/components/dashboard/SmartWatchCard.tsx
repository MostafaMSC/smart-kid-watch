import { Watch, Battery, Wifi, Zap } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export const SmartWatchCard = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300 border-2 border-primary/20">
      <CardHeader className="pb-3 bg-gradient-primary text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Watch className="w-5 h-5" />
          الساعة الذكية
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-4 space-y-4">
        <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
            <span className="text-sm font-medium">متصلة</span>
          </div>
          <Badge className="bg-success text-white border-0">نشطة</Badge>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Battery className="w-4 h-4 text-success" />
              <span className="text-sm">البطارية</span>
            </div>
            <span className="text-sm font-bold">85%</span>
          </div>
          <Progress value={85} className="h-2" />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-primary" />
              <span className="text-xs">الاتصال</span>
            </div>
            <span className="text-xs font-medium text-success">ممتاز</span>
          </div>
          
          <div className="flex items-center justify-between p-2 bg-muted/50 rounded">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-warning" />
              <span className="text-xs">آخر مزامنة</span>
            </div>
            <span className="text-xs font-medium">قبل دقيقة</span>
          </div>
        </div>

        <div className="pt-3 border-t">
          <div className="grid grid-cols-2 gap-2 text-center">
            <div className="p-2 bg-primary/5 rounded">
              <p className="text-xs text-muted-foreground">الخطوات اليوم</p>
              <p className="text-lg font-bold text-primary">8,542</p>
            </div>
            <div className="p-2 bg-warning/5 rounded">
              <p className="text-xs text-muted-foreground">السعرات</p>
              <p className="text-lg font-bold text-warning">342</p>
            </div>
          </div>
        </div>

        <div className="text-xs text-center text-muted-foreground pt-2 border-t">
          رقم الجهاز: SW-2024-001
        </div>
      </CardContent>
    </Card>
  );
};
