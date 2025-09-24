import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  color?: "primary" | "success" | "warning" | "danger" | "info";
  delay?: number;
}

const FeatureCard = ({
  title,
  description,
  icon: Icon,
  className,
  color = "primary",
  delay = 0
}: FeatureCardProps) => {
  const colorClasses = {
    primary: "bg-gradient-safety",
    success: "bg-gradient-success", 
    warning: "bg-gradient-warning",
    danger: "bg-gradient-emergency",
    info: "bg-gradient-info"
  };

  return (
    <Card 
      className={cn(
        "hover-lift hover-glow transition-all duration-smooth animate-fade-in",
        className
      )}
      style={{ animationDelay: `${delay}ms` }}
    >
      <CardHeader>
        <div className={cn(
          "w-16 h-16 rounded-lg flex items-center justify-center mb-4 shadow-elevated",
          colorClasses[color]
        )}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <CardTitle className="text-xl">{title}</CardTitle>
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
      </CardHeader>
    </Card>
  );
};

export default FeatureCard;