import { useEffect, useState } from "react";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

interface ProgressBarProps {
  value: number;
  max?: number;
  className?: string;
  animated?: boolean;
  showValue?: boolean;
  label?: string;
  color?: "primary" | "success" | "warning" | "danger";
}

const ProgressBar = ({ 
  value, 
  max = 100, 
  className, 
  animated = true,
  showValue = true,
  label,
  color = "primary"
}: ProgressBarProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const percentage = Math.min((value / max) * 100, 100);

  useEffect(() => {
    if (animated) {
      const timer = setTimeout(() => {
        setCurrentValue(percentage);
      }, 100);
      return () => clearTimeout(timer);
    } else {
      setCurrentValue(percentage);
    }
  }, [percentage, animated]);

  const colorClasses = {
    primary: "bg-gradient-safety",
    success: "bg-gradient-success", 
    warning: "bg-gradient-warning",
    danger: "bg-gradient-emergency"
  };

  return (
    <div className={cn("space-y-2", className)}>
      {(label || showValue) && (
        <div className="flex items-center justify-between text-sm">
          {label && <span className="text-muted-foreground">{label}</span>}
          {showValue && (
            <span className="font-medium">
              {Math.round(currentValue)}%
            </span>
          )}
        </div>
      )}
      <div className="relative">
        <Progress value={currentValue} className="h-2" />
        <div 
          className={cn(
            "absolute top-0 left-0 h-2 rounded-full transition-all duration-1000 ease-out",
            colorClasses[color]
          )}
          style={{ width: `${currentValue}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;