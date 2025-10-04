import { Smartphone, Clock, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const screenTimeData = [
  { day: "السبت", hours: 2.5 },
  { day: "الأحد", hours: 3.2 },
  { day: "الاثنين", hours: 2.1 },
  { day: "الثلاثاء", hours: 2.8 },
  { day: "الأربعاء", hours: 1.9 },
  { day: "الخميس", hours: 2.3 },
  { day: "الجمعة", hours: 4.5 },
];

export const ScreenTime = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Smartphone className="w-5 h-5 text-primary" />
          وقت الشاشة
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between p-4 bg-warning/10 rounded-lg">
          <div>
            <p className="text-sm text-muted-foreground mb-1">اليوم</p>
            <p className="text-3xl font-bold text-warning">2.3 ساعة</p>
          </div>
          <div className="text-center">
            <TrendingDown className="w-6 h-6 text-success mx-auto mb-1" />
            <p className="text-xs text-success font-medium">-15% من الأمس</p>
          </div>
        </div>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm">الحد اليومي المسموح</span>
              <span className="text-sm font-bold">2.3 / 3 ساعات</span>
            </div>
            <Progress value={76} className="h-2" />
          </div>
        </div>

        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={screenTimeData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="day" 
                tick={{ fill: 'hsl(var(--muted-foreground))', fontSize: 11 }}
                tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                tickLine={{ stroke: 'hsl(var(--muted-foreground))' }}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px'
                }}
              />
              <Bar 
                dataKey="hours" 
                fill="hsl(var(--warning))" 
                radius={[8, 8, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="grid grid-cols-3 gap-2 text-center text-xs">
          <div className="p-2 bg-muted/50 rounded">
            <Clock className="w-4 h-4 mx-auto mb-1 text-primary" />
            <p className="font-bold">16.5</p>
            <p className="text-muted-foreground">ساعة/أسبوع</p>
          </div>
          <div className="p-2 bg-muted/50 rounded">
            <Smartphone className="w-4 h-4 mx-auto mb-1 text-success" />
            <p className="font-bold">8</p>
            <p className="text-muted-foreground">جلسات/يوم</p>
          </div>
          <div className="p-2 bg-muted/50 rounded">
            <TrendingDown className="w-4 h-4 mx-auto mb-1 text-warning" />
            <p className="font-bold">-12%</p>
            <p className="text-muted-foreground">عن الأسبوع السابق</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
