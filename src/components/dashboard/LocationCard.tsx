import { MapPin, Navigation } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export const LocationCard = () => {
  return (
    <Card className="shadow-md hover:shadow-lg transition-all duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="flex items-center gap-2 text-lg">
          <MapPin className="w-5 h-5 text-primary" />
          الموقع الحالي
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="relative h-48 bg-gradient-to-br from-primary/10 to-primary/5 rounded-lg overflow-hidden flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAwIDEwIEwgNDAgMTAgTSAxMCAwIEwgMTAgNDAgTSAwIDIwIEwgNDAgMjAgTSAyMCAwIEwgMjAgNDAgTSAwIDMwIEwgNDAgMzAgTSAzMCAwIEwgMzAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzM0ODBmMjIwIiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
          
          <div className="relative z-10 text-center">
            <div className="w-16 h-16 mx-auto mb-3 bg-primary rounded-full flex items-center justify-center shadow-glow animate-pulse">
              <Navigation className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm font-medium text-primary">داخل المدرسة</p>
          </div>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">المبنى</span>
            <Badge variant="secondary">المبنى الرئيسي</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">الطابق</span>
            <Badge variant="secondary">الطابق الثاني</Badge>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">الفصل</span>
            <Badge className="bg-primary text-white border-0">6-أ</Badge>
          </div>
        </div>
        
        <div className="text-xs text-muted-foreground text-center pt-2 border-t">
          آخر تحديث: قبل دقيقتين
        </div>
      </CardContent>
    </Card>
  );
};
