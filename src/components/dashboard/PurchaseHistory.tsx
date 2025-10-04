import { ShoppingBag, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { Badge } from "@/components/ui/badge";

const purchaseData = [
  { name: "وجبات", value: 10000, color: "hsl(var(--primary))" },
  { name: "مشروبات", value: 6000, color: "hsl(var(--success))" },
  { name: "وجبات خفيفة", value: 5000, color: "hsl(var(--warning))" },
  { name: "قرطاسية", value: 4500, color: "hsl(var(--destructive))" },
];

const recentPurchases = [
  { item: "وجبة غداء", amount: 2000, time: "12:30", category: "وجبات" },
  { item: "عصير برتقال", amount: 750, time: "10:15", category: "مشروبات" },
  { item: "شوكولاتة", amount: 500, time: "09:45", category: "وجبات خفيفة" },
  { item: "دفتر ملاحظات", amount: 1500, time: "08:30", category: "قرطاسية" },
];

export const PurchaseHistory = () => {
  const total = purchaseData.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <ShoppingBag className="w-5 h-5 text-primary" />
          تفاصيل المشتريات الأسبوعية
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-sm font-medium mb-3">توزيع المصروفات</h4>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={purchaseData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {purchaseData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    formatter={(value: number) => `${value.toLocaleString()} د.ع`}
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium mb-3">آخر المشتريات</h4>
            <div className="space-y-2">
              {recentPurchases.map((purchase, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-muted/50 rounded-lg hover:bg-muted transition-colors">
                  <div className="flex-1">
                    <p className="text-sm font-medium">{purchase.item}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Badge variant="secondary" className="text-xs">{purchase.category}</Badge>
                      <span className="text-xs text-muted-foreground">{purchase.time}</span>
                    </div>
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-bold text-destructive flex items-center gap-1">
                      <TrendingDown className="w-3 h-3" />
                      {purchase.amount.toLocaleString()} د.ع
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-3 pt-4 border-t">
          {purchaseData.map((category, index) => (
            <div key={index} className="text-center p-2 rounded" style={{ backgroundColor: `${category.color}15` }}>
              <p className="text-xs text-muted-foreground mb-1">{category.name}</p>
              <p className="text-sm font-bold" style={{ color: category.color }}>
                {category.value.toLocaleString()} د.ع
              </p>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between p-4 bg-gradient-primary text-white rounded-lg">
          <span className="font-medium">إجمالي المصروفات الأسبوعية</span>
          <span className="text-2xl font-bold">{total.toLocaleString()} د.ع</span>
        </div>
      </CardContent>
    </Card>
  );
};
