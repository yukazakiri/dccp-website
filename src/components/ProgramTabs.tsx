import * as Icons from 'lucide-react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import ProgramCard from './ProgramCard.tsx';
import { programsData } from '../data/programs';

export default function ProgramTabs() {
  return (
    <Tabs defaultValue="k12">
      <TabsList className="grid w-full grid-cols-3 mb-8">
        <TabsTrigger value="k12">
          <Icons.School className="w-4 h-4 mr-2" />
          K-12 Programs
        </TabsTrigger>
        <TabsTrigger value="tesda">
          <Icons.Briefcase className="w-4 h-4 mr-2" />
          TESDA Courses
        </TabsTrigger>
        <TabsTrigger value="college">
          <Icons.GraduationCap className="w-4 h-4 mr-2" />
          College Programs
        </TabsTrigger>
      </TabsList>

      {programsData.map((category, index) => (
        <TabsContent 
          key={index}
          value={category.title === "K-12 Senior High School" ? "k12" : 
                category.title === "TESDA Courses" ? "tesda" : "college"}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.programs.map((program, progIndex) => (
              <div key={progIndex} data-aos="fade-up" data-aos-delay={progIndex * 100}>
                <ProgramCard
                  title={program.title}
                  description={program.description}
                  icon={program.icon}
                  features={program.features}
                  color={program.color}
                  category={category.title}
                />
              </div>
            ))}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
} 