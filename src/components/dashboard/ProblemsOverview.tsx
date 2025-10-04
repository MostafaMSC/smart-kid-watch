import { 
  AlertTriangle, 
  Heart, 
  MapPin, 
  Wallet, 
  TrendingDown, 
  Users, 
  Clock, 
  Shield,
  Activity,
  Eye,
  Bell,
  Target
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const ProblemsOverview = () => {
  const problems = [
    {
      icon: Eye,
      title: "عدم القدرة على متابعة الأطفال",
      description: "أولياء الأمور لا يعرفون ماذا يفعل أطفالهم في المدرسة طوال اليوم",
      solution: "الساعة توفر تتبع مباشر للموقع والأنشطة على مدار الساعة",
      impact: "راحة البال الكاملة",
      color: "primary"
    },
    {
      icon: Wallet,
      title: "صعوبة إدارة مصروف الطلاب",
      description: "الأطفال يصرفون المال بشكل عشوائي دون رقابة أو حدود واضحة",
      solution: "محفظة رقمية مع حدود إنفاق يومية وتقارير مفصلة لكل عملية شراء",
      impact: "توفير 30% من المصروف",
      color: "success"
    },
    {
      icon: MapPin,
      title: "القلق على سلامة الطلاب",
      description: "عدم معرفة موقع الطالب الدقيق وهل وصل للمدرسة أم لا",
      solution: "تتبع GPS دقيق مع تنبيهات فورية عند الدخول والخروج من المدرسة",
      impact: "أمان 100%",
      color: "warning"
    },
    {
      icon: Activity,
      title: "نقص المعلومات عن الصحة",
      description: "لا توجد طريقة لمعرفة النشاط البدني أو الحالة الصحية للطالب",
      solution: "مراقبة مستمرة لنبضات القلب والخطوات والنشاط البدني",
      impact: "صحة أفضل بنسبة 40%",
      color: "destructive"
    },
    {
      icon: TrendingDown,
      title: "ضعف الأداء الأكاديمي",
      description: "معرفة النتائج متأخرة جداً مما يصعب التدخل المبكر",
      solution: "تقارير يومية وأسبوعية فورية عن الأداء والحضور والسلوك",
      impact: "تحسن 25% في الدرجات",
      color: "primary"
    },
    {
      icon: Users,
      title: "صعوبة التواصل مع المدرسة",
      description: "التواصل المحدود بين المدرسة وأولياء الأمور يؤدي لفجوة معرفية",
      solution: "إشعارات فورية وتقارير تلقائية عن كل ما يحدث في المدرسة",
      impact: "تواصل أسرع بـ 10 مرات",
      color: "success"
    },
    {
      icon: AlertTriangle,
      title: "المشاكل السلوكية المتكررة",
      description: "عدم اكتشاف المشاكل السلوكية مبكراً يؤدي لتفاقمها",
      solution: "نظام تقييم سلوكي يومي مع تنبيهات عند أي مشكلة",
      impact: "انخفاض المشاكل بنسبة 60%",
      color: "warning"
    },
    {
      icon: Clock,
      title: "الغياب والتأخر المتكرر",
      description: "عدم معرفة أسباب الغياب أو التأخر الحقيقية",
      solution: "تسجيل تلقائي للحضور مع توضيح الأوقات والمواقع",
      impact: "انخفاض التأخر بنسبة 70%",
      color: "primary"
    },
    {
      icon: Shield,
      title: "حالات الطوارئ",
      description: "صعوبة الوصول للطالب أو إبلاغ ولي الأمر في حالات الطوارئ",
      solution: "زر طوارئ SOS مع تتبع مباشر وإشعارات فورية",
      impact: "استجابة فورية خلال ثوانٍ",
      color: "destructive"
    },
    {
      icon: Target,
      title: "عدم تحفيز الطلاب",
      description: "قلة الحوافز تؤدي لانخفاض الدافعية والاهتمام بالدراسة",
      solution: "نظام نقاط ومكافآت مرتبط بالأداء والسلوك",
      impact: "زيادة الحماس بنسبة 80%",
      color: "success"
    },
    {
      icon: Heart,
      title: "نمط الحياة غير الصحي",
      description: "قلة الحركة والنشاط البدني تؤثر على الصحة العامة",
      solution: "تتبع النشاط البدني مع تحديات وأهداف يومية",
      impact: "نشاط بدني أعلى بـ 3 أضعاف",
      color: "warning"
    },
    {
      icon: Bell,
      title: "فوات المواعيد المهمة",
      description: "نسيان مواعيد الامتحانات أو الأنشطة أو الاجتماعات",
      solution: "تذكيرات تلقائية مزامنة مع جدول المدرسة",
      impact: "عدم تفويت أي موعد",
      color: "primary"
    }
  ];

  return (
    <div className="space-y-6">
      <Card className="shadow-lg border-2 border-primary/20">
        <CardHeader className="bg-gradient-primary text-white rounded-t-lg">
          <CardTitle className="text-2xl text-center">
            المشاكل التي تحلها الساعة الذكية
          </CardTitle>
          <p className="text-center text-sm mt-2 opacity-90">
            نظام متكامل لحل جميع التحديات التي تواجه أولياء الأمور والمدارس
          </p>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid gap-4 text-center mb-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              <div className="p-4 bg-primary/10 rounded-lg">
                <p className="text-3xl font-bold text-primary mb-1">12+</p>
                <p className="text-xs text-muted-foreground">مشكلة محلولة</p>
              </div>
              <div className="p-4 bg-success/10 rounded-lg">
                <p className="text-3xl font-bold text-success mb-1">100%</p>
                <p className="text-xs text-muted-foreground">راحة البال</p>
              </div>
              <div className="p-4 bg-warning/10 rounded-lg">
                <p className="text-3xl font-bold text-warning mb-1">24/7</p>
                <p className="text-xs text-muted-foreground">متابعة مستمرة</p>
              </div>
              <div className="p-4 bg-destructive/10 rounded-lg">
                <p className="text-3xl font-bold text-destructive mb-1">فوري</p>
                <p className="text-xs text-muted-foreground">تنبيهات لحظية</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {problems.map((problem, index) => {
          const Icon = problem.icon;
          return (
            <Card key={index} className="shadow-md hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30">
              <CardHeader className="pb-3">
                <div className="flex items-start gap-3">
                  <div 
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: `hsl(var(--${problem.color})/0.1)` }}
                  >
                    <Icon 
                      className="w-6 h-6" 
                      style={{ color: `hsl(var(--${problem.color}))` }}
                    />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-lg mb-2">{problem.title}</CardTitle>
                    <Badge 
                      variant="secondary"
                      style={{ 
                        backgroundColor: `hsl(var(--${problem.color})/0.1)`,
                        color: `hsl(var(--${problem.color}))`
                      }}
                    >
                      {problem.impact}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">المشكلة:</p>
                      <p className="text-sm">{problem.description}</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-3 border-t">
                  <div className="flex items-start gap-2">
                    <Target className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-medium text-muted-foreground mb-1">الحل:</p>
                      <p className="text-sm font-medium" style={{ color: `hsl(var(--${problem.color}))` }}>
                        {problem.solution}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="shadow-md bg-gradient-to-br from-primary/5 to-success/5">
        <CardContent className="pt-6">
          <div className="text-center space-y-4">
            <h3 className="text-2xl font-bold text-primary">النتيجة النهائية</h3>
            <p className="text-lg">
              طالب أكثر سعادة ونجاحاً • ولي أمر مطمئن ومتابع • مدرسة منظمة وفعالة
            </p>
            <div className="flex items-center justify-center gap-2 pt-4">
              <div className="w-3 h-3 rounded-full bg-success animate-pulse"></div>
              <span className="text-sm font-medium text-success">
                كل هذا من ساعة واحدة على يد الطالب
              </span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
