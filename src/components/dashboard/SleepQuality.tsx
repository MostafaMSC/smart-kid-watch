import { Moon, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const sleepData = [
  { time: "10م", quality: 85 },
  { time: "12ص", quality: 90 },
  { time: "2ص", quality: 95 },
  { time: "4ص", quality: 88 },
  { time: "6ص", quality: 75 },
];

export const SleepQuality = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <Moon className="w-5 h-5 text-primary" />
          جودة النوم
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div className="p-3 bg-primary/5 rounded-lg">
            <Clock className="w-5 h-5 text-primary mx-auto mb-1" />
            <p className="text-2xl font-bold text-primary">7.5</p>
            <p className="text-xs text-muted-foreground">ساعات النوم</p>
          </div>
          <div className="p-3 bg-success/5 rounded-lg">
            <TrendingUp className="w-5 h-5 text-success mx-auto mb-1" />
            <p className="text-2xl font-bold text-success">88%</p>
            <p className="text-xs text-muted-foreground">جودة النوم</p>
          </div>
          <div className="p-3 bg-warning/5 rounded-lg">
            <Moon className="w-5 h-5 text-warning mx-auto mb-1" />
            <p className="text-2xl font-bold text-warning">3</p>
            <p className="text-xs text-muted-foreground">مرات الاستيقاظ</p>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">النوم العميق</span>
            <span className="text-sm text-muted-foreground">4.2 ساعة</span>
          </div>
          <Progress value={65} className="h-2" />
        </div>

        <div className="h-40">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={sleepData}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--muted))" />
              <XAxis 
                dataKey="time" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
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
              <Line 
                type="monotone" 
                dataKey="quality" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                dot={{ fill: 'hsl(var(--primary))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="text-xs text-center text-muted-foreground pt-2 border-t">
          النوم المثالي للأطفال: 8-10 ساعات يومياً
        </div>
      </CardContent>
    </Card>
  );
};
