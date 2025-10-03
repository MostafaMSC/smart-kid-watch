import { Heart, Activity, Footprints, Flame } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const heartRateData = [
  { time: "8:00", rate: 72 },
  { time: "9:00", rate: 85 },
  { time: "10:00", rate: 78 },
  { time: "11:00", rate: 92 },
  { time: "12:00", rate: 75 },
  { time: "13:00", rate: 80 },
  { time: "الآن", rate: 76 },
];

export const HealthMetrics = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Activity className="w-5 h-5 text-destructive" />
          المؤشرات الصحية من الساعة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center p-4 bg-destructive/10 rounded-lg">
            <Heart className="w-6 h-6 text-destructive mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">معدل النبض</p>
            <p className="text-2xl font-bold text-destructive">76</p>
            <p className="text-xs text-muted-foreground">نبضة/دقيقة</p>
          </div>

          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <Footprints className="w-6 h-6 text-primary mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">الخطوات</p>
            <p className="text-2xl font-bold text-primary">8,542</p>
            <p className="text-xs text-success">85% من الهدف</p>
          </div>

          <div className="text-center p-4 bg-warning/10 rounded-lg">
            <Flame className="w-6 h-6 text-warning mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">السعرات</p>
            <p className="text-2xl font-bold text-warning">342</p>
            <p className="text-xs text-muted-foreground">كيلو كالوري</p>
          </div>

          <div className="text-center p-4 bg-success/10 rounded-lg">
            <Activity className="w-6 h-6 text-success mx-auto mb-2" />
            <p className="text-xs text-muted-foreground mb-1">النشاط</p>
            <p className="text-2xl font-bold text-success">45</p>
            <p className="text-xs text-muted-foreground">دقيقة نشطة</p>
          </div>
        </div>

        <div>
          <h4 className="text-sm font-medium mb-3">معدل النبض خلال اليوم</h4>
          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={heartRateData} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                <XAxis 
                  dataKey="time" 
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  fontSize={12}
                />
                <YAxis 
                  tick={{ fill: 'hsl(var(--muted-foreground))' }}
                  fontSize={12}
                  domain={[60, 100]}
                />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'hsl(var(--card))',
                    border: '1px solid hsl(var(--border))',
                    borderRadius: '8px',
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="rate" 
                  stroke="hsl(var(--destructive))" 
                  strokeWidth={3}
                  name="النبض"
                  dot={{ fill: 'hsl(var(--destructive))', r: 4 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 pt-4 border-t">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">المعدل الطبيعي</p>
            <p className="text-sm font-bold text-success">✓ طبيعي</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">الحد الأدنى</p>
            <p className="text-sm font-bold">72 نبضة</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">الحد الأقصى</p>
            <p className="text-sm font-bold">92 نبضة</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
