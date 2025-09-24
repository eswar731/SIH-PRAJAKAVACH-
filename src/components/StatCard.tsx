import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import AnimatedCounter from "./AnimatedCounter";

interface StatCardProps {
  title: string;
  value: number | string;
  icon: LucideIcon;
  description?: string;
  trend?: "up" | "down" | "neutral";
  trendValue?: string;
  className?: string;
  animated?: boolean;
  suffix?: string;
  prefix?: string;
  color?: "primary" | "success" | "warning" | "danger" | "info";
}

const StatCard = ({
  title,
  value,
  icon: Icon,
  description,
  trend,
  trendValue,
  className,
  animated = true,
  suffix = "",
  prefix = "",
  color = "primary"
}: StatCardProps) => {
  const colorClasses = {
    primary: "text-primary bg-primary/10",
    success: "text-success-green bg-success-green/10",
    warning: "text-emergency-orange bg-emergency-orange/10", 
    danger: "text-emergency-red bg-emergency-red/10",
    info: "text-safety-blue bg-safety-blue/10"
  };

  const trendColors = {
    up: "text-success-green",
    down: "text-emergency-red", 
    neutral: "text-muted-foreground"
  };

  return (
    <Card className={cn("hover-lift hover-glow transition-all duration-smooth", className)}>
      <CardContent className="p-6">
        <div className="flex items-center justify-between space-x-4">
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-muted-foreground truncate">
              {title}
            </p>
            <div className="mt-1">
              {animated && typeof value === "number" ? (
                <AnimatedCounter
                  value={value}
                  className="text-2xl font-bold text-foreground"
                  suffix={suffix}
                  prefix={prefix}
                />
              ) : (
                <p className="text-2xl font-bold text-foreground">
                  {prefix}{typeof value === "number" ? value.toLocaleString() : value}{suffix}
                </p>
              )}
            </div>
            {description && (
              <p className="text-xs text-muted-foreground mt-1">
                {description}
              </p>
            )}
            {trend && trendValue && (
              <div className={cn("text-xs font-medium mt-2", trendColors[trend])}>
                {trendValue}
              </div>
            )}
          </div>
          <div className={cn("p-3 rounded-full", colorClasses[color])}>
            <Icon className="w-6 h-6" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;