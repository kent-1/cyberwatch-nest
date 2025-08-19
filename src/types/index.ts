export type Severity = "critical" | "high" | "medium" | "low";
export type CaseStatus = "open" | "in-progress" | "closed";
export type AlertStatus = "new" | "in-progress" | "closed" | "true-positive" | "false-positive";

export interface Case {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  status: CaseStatus;
  assignee: string;
  createdAt: string;
  updatedAt: string;
  taskCount: number;
  observableCount: number;
  tags: string[];
}

export interface Alert {
  id: string;
  title: string;
  description: string;
  severity: Severity;
  status: AlertStatus;
  source: string;
  sourceRef: string;
  createdAt: string;
  updatedAt: string;
  artifacts: number;
  tags: string[];
}

export interface Task {
  id: string;
  title: string;
  description: string;
  status: "waiting" | "in-progress" | "completed" | "cancel";
  assignee: string;
  createdAt: string;
  updatedAt: string;
}

export interface Observable {
  id: string;
  dataType: string;
  data: string;
  message: string;
  tags: string[];
  ioc: boolean;
  sighted: boolean;
}