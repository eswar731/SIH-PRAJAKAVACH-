import { cn } from "@/lib/utils";

interface LoadingSpinnerProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const LoadingSpinner = ({ size = "md", className, text }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-12 h-12"
  };

  const textSizeClasses = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  };

  return (
    <div className={cn("flex flex-col items-center justify-center space-y-3", className)}>
      <div className="relative">
        <div className={cn(
          "border-4 border-muted rounded-full animate-spin",
          sizeClasses[size]
        )}>
        </div>
        <div className={cn(
          "absolute top-0 left-0 border-4 border-primary border-t-transparent rounded-full animate-spin",
          sizeClasses[size]
        )}>
        </div>
      </div>
      {text && (
        <p className={cn(
          "text-muted-foreground animate-pulse",
          textSizeClasses[size]
        )}>
          {text}
        </p>
      )}
    </div>
  );
};

export default LoadingSpinner;