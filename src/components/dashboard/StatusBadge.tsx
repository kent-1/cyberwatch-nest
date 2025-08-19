import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type StatusType = "critical" | "high" | "medium" | "low" | "open" | "in-progress" | "closed" | "true-positive" | "false-positive" | "new";

interface StatusBadgeProps {
  status: StatusType;
  className?: string;
}

export function StatusBadge({ status, className }: StatusBadgeProps) {
  const getStatusStyles = (status: StatusType) => {
    switch (status) {
      case "critical":
        return "bg-critical text-critical-foreground";
      case "high":
        return "bg-high text-high-foreground";
      case "medium":
        return "bg-medium text-medium-foreground";
      case "low":
        return "bg-low text-low-foreground";
      case "open":
        return "bg-destructive text-destructive-foreground";
      case "in-progress":
        return "bg-warning text-warning-foreground";
      case "closed":
        return "bg-success text-success-foreground";
      case "true-positive":
        return "bg-critical text-critical-foreground";
      case "false-positive":
        return "bg-muted text-muted-foreground";
      case "new":
        return "bg-info text-info-foreground";
      default:
        return "bg-secondary text-secondary-foreground";
    }
  };

  return (
    <Badge
      variant="secondary"
      className={cn(
        "capitalize font-medium",
        getStatusStyles(status),
        className
      )}
    >
      {status.replace("-", " ")}
    </Badge>
  );
}