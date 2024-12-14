import * as Icons from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ProgramCardProps {
  title: string;
  description: string;
  icon: keyof typeof Icons;
  features: string[];
  color: {
    from: string;
    to: string;
    iconBg: string;
    iconText: string;
  };
  category: string;
}

export default function ProgramCard({ title, description, icon, features, color, category }: ProgramCardProps) {
  const Icon = Icons[icon] as LucideIcon;

  return (
    <Card className="group hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center gap-4 mb-4">
          <div className={`p-2 rounded-lg bg-${color.from}/10`}>
            {Icon && <Icon className={`w-6 h-6 text-${color.from}`} />}
          </div>
          <div>
            <CardTitle className="text-xl">{title}</CardTitle>
            <CardDescription>{description}</CardDescription>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[200px] pr-4">
          <div className="space-y-2">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-2">
                <Icons.Check className="w-5 h-5 text-primary mt-0.5" />
                <span className="text-sm text-muted-foreground">{feature}</span>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between items-center">
          <Badge variant="outline" className={`bg-${color.from}/10 text-${color.from}`}>
            {category}
          </Badge>
          <Button variant="ghost" className="group-hover:translate-x-1 transition-transform">
            Learn More <Icons.ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
} 