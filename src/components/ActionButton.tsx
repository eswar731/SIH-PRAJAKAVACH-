import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface ActionButtonProps {
  children: React.ReactNode;
  icon?: LucideIcon;
  variant?: "primary" | "secondary" | "success" | "warning" | "danger" | "outline";
  size?: "sm" | "md" | "lg";
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  pulse?: boolean;
}

const ActionButton = ({
  children,
  icon: Icon,
  variant = "primary",
  size = "md",
  className,
  onClick,
  disabled = false,
  loading = false,
  pulse = false,
  ...props
}: ActionButtonProps) => {
  const variantClasses = {
    primary: "bg-gradient-safety hover:shadow-glow",
    secondary: "bg-gradient-info hover:shadow-glow-safety",
    success: "bg-gradient-success hover:shadow-glow",
    warning: "bg-gradient-warning hover:shadow-glow",
    danger: "bg-gradient-emergency hover:shadow-glow-emergency",
    outline: "border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
  };

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4",
    lg: "h-12 px-6 text-lg"
  };

  return (
    <Button
      className={cn(
        "transition-all duration-smooth hover-lift font-medium",
        variantClasses[variant],
        sizeClasses[size],
        pulse && "animate-pulse-glow",
        loading && "opacity-50 cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled || loading}
      {...props}
    >
      {loading ? (
        <div className="flex items-center space-x-2">
          <div className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
          <span>Loading...</span>
        </div>
      ) : (
        <div className="flex items-center space-x-2">
          {Icon && <Icon className="w-4 h-4" />}
          <span>{children}</span>
        </div>
      )}
    </Button>
  );
};

export default ActionButton;