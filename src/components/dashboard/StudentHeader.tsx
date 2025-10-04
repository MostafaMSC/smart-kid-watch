import { Clock, ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

const students = [
  {
    id: 1,
    name: "أحمد محمد العلي",
    grade: "الصف السادس - الفصل أ",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
  },
  {
    id: 2,
    name: "سارة محمد العلي",
    grade: "الصف الرابع - الفصل ب",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
  },
  {
    id: 3,
    name: "علي محمد العلي",
    grade: "الصف الثاني - الفصل أ",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
  },
];

export const StudentHeader = () => {
  const [selectedStudent, setSelectedStudent] = useState(students[0]);

  return (
    <Card className="p-6 bg-gradient-primary shadow-lg border-0">
      <div className="flex items-center gap-6">
        <Avatar className="w-20 h-20 ring-4 ring-white/30">
          <AvatarImage src={selectedStudent.avatar} alt={selectedStudent.name} />
          <AvatarFallback className="bg-white/20 text-white text-2xl">
            {selectedStudent.name.charAt(0)}
          </AvatarFallback>
        </Avatar>
        
        <div className="flex-1">
          <div className="flex items-center gap-3 mb-2">
            <h1 className="text-3xl font-bold text-white">{selectedStudent.name}</h1>
            <DropdownMenu>
              <DropdownMenuTrigger className="flex items-center gap-1 bg-white/20 hover:bg-white/30 text-white px-3 py-1.5 rounded-lg transition-colors">
                <span className="text-sm">تبديل الطالب</span>
                <ChevronDown className="w-4 h-4" />
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-card z-50">
                {students.map((student) => (
                  <DropdownMenuItem
                    key={student.id}
                    onClick={() => setSelectedStudent(student)}
                    className="flex items-center gap-3 cursor-pointer"
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarImage src={student.avatar} alt={student.name} />
                      <AvatarFallback>{student.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{student.name}</div>
                      <div className="text-xs text-muted-foreground">{student.grade}</div>
                    </div>
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
          <div className="flex items-center gap-4 flex-wrap">
            <Badge className="bg-white/20 text-white border-0 hover:bg-white/30">
              {selectedStudent.grade}
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
