import { StudentHeader } from "@/components/dashboard/StudentHeader";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { LocationCard } from "@/components/dashboard/LocationCard";
import { BehaviorCard } from "@/components/dashboard/BehaviorCard";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { AcademicPerformance } from "@/components/dashboard/AcademicPerformance";
import { AttendanceCard } from "@/components/dashboard/AttendanceCard";
import { SmartWatchCard } from "@/components/dashboard/SmartWatchCard";
import { HealthMetrics } from "@/components/dashboard/HealthMetrics";
import { PurchaseHistory } from "@/components/dashboard/PurchaseHistory";
import { ActivityTimeline } from "@/components/dashboard/ActivityTimeline";
import { WeeklyReport } from "@/components/dashboard/WeeklyReport";
import { ProblemsOverview } from "@/components/dashboard/ProblemsOverview";
import { SleepQuality } from "@/components/dashboard/SleepQuality";
import { FocusLevel } from "@/components/dashboard/FocusLevel";
import { ScreenTime } from "@/components/dashboard/ScreenTime";
import { StressLevel } from "@/components/dashboard/StressLevel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { LayoutDashboard, AlertCircle } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <StudentHeader />
        
        <Tabs defaultValue="dashboard" className="mt-8">
          <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-8">
            <TabsTrigger value="dashboard" className="flex items-center gap-2">
              <LayoutDashboard className="w-4 h-4" />
              لوحة التحكم
            </TabsTrigger>
            <TabsTrigger value="problems" className="flex items-center gap-2">
              <AlertCircle className="w-4 h-4" />
              المشاكل المحلولة
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="dashboard">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main content area */}
              <div className="lg:col-span-2 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <WalletCard />
                  <AttendanceCard />
                </div>
                
                <ExpenseChart />
                <PurchaseHistory />
                <HealthMetrics />
                <AcademicPerformance />
                <ActivityTimeline />
                <WeeklyReport />
              </div>
              
              {/* Sidebar */}
              <div className="space-y-6">
                <SmartWatchCard />
                <SleepQuality />
                <FocusLevel />
                <ScreenTime />
                <StressLevel />
                <LocationCard />
                <BehaviorCard />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="problems">
            <ProblemsOverview />
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Index;
