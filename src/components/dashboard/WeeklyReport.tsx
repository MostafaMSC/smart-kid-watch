import { FileText, TrendingUp, Award, AlertCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";

export const WeeklyReport = () => {
  const weeklyMetrics = [
    {
      title: "الحضور",
      score: 95,
      icon: Award,
      color: "success",
      status: "ممتاز",
      details: "4 أيام من 5"
    },
    {
      title: "الأداء الدراسي",
      score: 88,
      icon: TrendingUp,
      color: "primary",
      status: "جيد جداً",
      details: "تحسن 12%"
    },
    {
      title: "السلوك",
      score: 92,
      icon: Award,
      color: "success",
      status: "ممتاز",
      details: "لا يوجد ملاحظات"
    },
    {
      title: "النشاط البدني",
      score: 75,
      icon: TrendingUp,
      color: "warning",
      status: "جيد",
      details: "45 دقيقة يومياً"
    },
  ];

  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2">
          <FileText className="w-5 h-5" />
          التقرير الأسبوعي الشامل
        </CardTitle>
      </CardHeader>
      <CardContent className="pt-6 space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {weeklyMetrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="p-4 border rounded-lg hover:shadow-md transition-all">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className={`p-2 rounded-full bg-${metric.color}/10`}>
                      <Icon className={`w-4 h-4`} style={{ color: `hsl(var(--${metric.color}))` }} />
                    </div>
                    <span className="font-medium text-sm">{metric.title}</span>
                  </div>
                  <span className="text-2xl font-bold" style={{ color: `hsl(var(--${metric.color}))` }}>
                    {metric.score}%
                  </span>
                </div>
                <Progress value={metric.score} className="h-2 mb-2" />
                <div className="flex items-center justify-between text-xs">
                  <Badge 
                    variant="secondary" 
                    className="text-xs"
                    style={{ backgroundColor: `hsl(var(--${metric.color})/0.1)`, color: `hsl(var(--${metric.color}))` }}
                  >
                    {metric.status}
                  </Badge>
                  <span className="text-muted-foreground">{metric.details}</span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="p-4 bg-muted/50 rounded-lg space-y-3">
          <h4 className="font-medium flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-primary" />
            ملاحظات المعلمين
          </h4>
          <div className="space-y-2">
            <div className="flex items-start gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-success mt-1.5"></div>
              <p>طالب متميز ومتعاون مع زملائه في الفصل</p>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-primary mt-1.5"></div>
              <p>يظهر تحسناً ملحوظاً في مادة الرياضيات</p>
            </div>
            <div className="flex items-start gap-2 text-sm">
              <div className="w-2 h-2 rounded-full bg-warning mt-1.5"></div>
              <p>يحتاج إلى المزيد من التركيز في حصة العلوم</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="text-center p-4 bg-success/10 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">التقييم العام</p>
            <p className="text-3xl font-bold text-success mb-1">A</p>
            <p className="text-xs text-success">ممتاز</p>
          </div>
          <div className="text-center p-4 bg-primary/10 rounded-lg">
            <p className="text-xs text-muted-foreground mb-1">الترتيب على الفصل</p>
            <p className="text-3xl font-bold text-primary mb-1">3</p>
            <p className="text-xs text-primary">من 30 طالب</p>
          </div>
        </div>

        <div className="pt-4 border-t text-center">
          <p className="text-xs text-muted-foreground">
            آخر تحديث: اليوم، 2:45 مساءً
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            جميع البيانات محدثة تلقائياً عبر الساعة الذكية ونظام المدرسة
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
