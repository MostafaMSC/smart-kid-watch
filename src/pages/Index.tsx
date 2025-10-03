import { StudentHeader } from "@/components/dashboard/StudentHeader";
import { WalletCard } from "@/components/dashboard/WalletCard";
import { LocationCard } from "@/components/dashboard/LocationCard";
import { BehaviorCard } from "@/components/dashboard/BehaviorCard";
import { ExpenseChart } from "@/components/dashboard/ExpenseChart";
import { AcademicPerformance } from "@/components/dashboard/AcademicPerformance";
import { AttendanceCard } from "@/components/dashboard/AttendanceCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-background" dir="rtl">
      <div className="container mx-auto px-4 py-8 max-w-7xl">
        <StudentHeader />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <WalletCard />
              <AttendanceCard />
            </div>
            
            <ExpenseChart />
            <AcademicPerformance />
          </div>
          
          <div className="space-y-6">
            <LocationCard />
            <BehaviorCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
