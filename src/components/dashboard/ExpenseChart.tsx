import { TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { day: "السبت", amount: 12 },
  { day: "الأحد", amount: 18 },
  { day: "الإثنين", amount: 15 },
  { day: "الثلاثاء", amount: 10 },
  { day: "الأربعاء", amount: 20 },
  { day: "الخميس", amount: 15 },
  { day: "اليوم", amount: 15 },
];

export const ExpenseChart = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-primary" />
          المصاريف الأسبوعية
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 5, right: 5, left: 5, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
              <XAxis 
                dataKey="day" 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                fontSize={12}
              />
              <YAxis 
                tick={{ fill: 'hsl(var(--muted-foreground))' }}
                fontSize={12}
              />
              <Tooltip 
                contentStyle={{
                  backgroundColor: 'hsl(var(--card))',
                  border: '1px solid hsl(var(--border))',
                  borderRadius: '8px',
                }}
                labelStyle={{ color: 'hsl(var(--foreground))' }}
              />
              <Bar 
                dataKey="amount" 
                fill="hsl(var(--primary))" 
                radius={[8, 8, 0, 0]}
                name="المبلغ (ريال)"
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t">
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">المجموع</p>
            <p className="text-lg font-bold text-primary">105 ريال</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">المتوسط</p>
            <p className="text-lg font-bold text-muted-foreground">15 ريال</p>
          </div>
          <div className="text-center">
            <p className="text-xs text-muted-foreground mb-1">الأعلى</p>
            <p className="text-lg font-bold text-warning">20 ريال</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
