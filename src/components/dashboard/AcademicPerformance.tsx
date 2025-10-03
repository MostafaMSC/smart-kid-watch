import { GraduationCap, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from "recharts";

const data = [
  { month: "سبتمبر", math: 75, science: 80, arabic: 85 },
  { month: "أكتوبر", math: 80, science: 82, arabic: 87 },
  { month: "نوفمبر", math: 85, science: 85, arabic: 90 },
  { month: "ديسمبر", math: 88, science: 87, arabic: 92 },
];

export const AcademicPerformance = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <GraduationCap className="w-5 h-5 text-primary" />
          الأداء الأكاديمي
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="month" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                fontSize={12}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                fontSize={12}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
              />
              <Legend />
              <Line 
                type="monotone" 
                dataKey="math" 
                stroke="hsl(var(--primary))" 
                strokeWidth={2}
                name="الرياضيات"
                dot={{ fill: 'hsl(var(--primary))' }}
              />
              <Line 
                type="monotone" 
                dataKey="science" 
                stroke="hsl(var(--success))" 
                strokeWidth={2}
                name="العلوم"
                dot={{ fill: 'hsl(var(--success))' }}
              />
              <Line 
                type="monotone" 
                dataKey="arabic" 
                stroke="hsl(var(--warning))" 
                strokeWidth={2}
                name="اللغة العربية"
                dot={{ fill: 'hsl(var(--warning))' }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
          <div className="text-center p-3 bg-primary/5 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">الرياضيات</p>
            <p className="text-xl font-bold text-primary">88%</p>
            <div className="flex items-center justify-center gap-1 text-xs text-success mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+13%</span>
            </div>
          </div>
          <div className="text-center p-3 bg-success/5 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">العلوم</p>
            <p className="text-xl font-bold text-success">87%</p>
            <div className="flex items-center justify-center gap-1 text-xs text-success mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+7%</span>
            </div>
          </div>
          <div className="text-center p-3 bg-warning/5 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">العربية</p>
            <p className="text-xl font-bold text-warning">92%</p>
            <div className="flex items-center justify-center gap-1 text-xs text-success mt-1">
              <TrendingUp className="w-3 h-3" />
              <span>+7%</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
