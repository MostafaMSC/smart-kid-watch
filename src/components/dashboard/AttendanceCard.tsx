import { CheckCircle2, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const AttendanceCard = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <CheckCircle2 className="w-5 h-5 text-success" />
          الحضور والانصراف
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-3 bg-success/10 rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground mb-1">وقت الحضور</p>
            <p className="text-lg font-bold text-success">7:15 صباحاً</p>
          </div>
          <Badge className="bg-success text-white border-0">في الموعد</Badge>
        </div>
        
        <div className="flex items-center gap-2 p-3 bg-primary/5 rounded-lg">
          <Clock className="w-4 h-4 text-primary" />
          <div className="flex-1">
            <p className="text-sm font-medium">الموقع الحالي</p>
            <p className="text-xs text-muted-foreground">الصف السادس - الفصل أ</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-3 text-center">
          <div className="p-2 bg-muted/50 rounded">
            <p className="text-xs text-muted-foreground">أيام الحضور</p>
            <p className="text-xl font-bold text-success">18</p>
          </div>
          <div className="p-2 bg-muted/50 rounded">
            <p className="text-xs text-muted-foreground">أيام الغياب</p>
            <p className="text-xl font-bold text-destructive">2</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
