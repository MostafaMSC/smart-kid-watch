import { User, Clock } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const StudentHeader = () => {
  return (
    <Card className="p-6 bg-gradient-primary shadow-lg border-0">
      <div className="flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ring-4 ring-white/30">
          <User className="w-10 h-10 text-white" />
        </div>
        
        <div className="flex-1">
          <h1 className="text-3xl font-bold text-white mb-2">أحمد محمد العلي</h1>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
              الصف السادس - الفصل أ
            </Badge>
            <div className="flex items-center gap-2 text-white/90">
              <Clock className="w-4 h-4" />
              <span className="text-sm">آخر تحديث: قبل 5 دقائق</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};
