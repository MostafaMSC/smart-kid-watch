import { Wallet, TrendingDown } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export const WalletCard = () => {
  const balance = 45000;
  const limit = 100000;
  const todaySpent = 15000;
  const percentage = (balance / limit) * 100;

  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center justify-between text-lg">
          <span className="flex items-center gap-2">
            <Wallet className="w-5 h-5 text-primary" />
            المحفظة الرقمية
          </span>
          <span className="text-2xl font-bold text-primary">{balance.toLocaleString()} د.ع</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="flex justify-between text-sm mb-2">
            <span className="text-muted-foreground">الرصيد المتبقي</span>
            <span className="font-medium">{percentage.toFixed(0)}%</span>
          </div>
          <Progress value={percentage} className="h-2" />
        </div>
        
        <div className="flex items-center justify-between p-3 bg-warning/10 rounded-lg">
          <div className="flex items-center gap-2">
            <TrendingDown className="w-4 h-4 text-warning" />
            <span className="text-sm font-medium">إنفاق اليوم</span>
          </div>
          <span className="text-lg font-bold text-warning">{todaySpent.toLocaleString()} د.ع</span>
        </div>
        
        <div className="text-xs text-muted-foreground">
          الحد الأقصى المسموح: {limit.toLocaleString()} د.ع
        </div>
      </CardContent>
    </Card>
  );
};
