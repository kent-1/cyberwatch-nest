import { Case, Alert } from "@/types";

export const mockCases: Case[] = [
  {
    id: "1",
    title: "Suspected APT Activity - Financial Sector",
    description: "Multiple indicators of advanced persistent threat targeting financial infrastructure",
    severity: "critical",
    status: "in-progress",
    assignee: "John Doe",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:22:00Z",
    taskCount: 12,
    observableCount: 45,
    tags: ["apt", "financial", "targeted-attack"]
  },
  {
    id: "2",
    title: "Phishing Campaign - Employee Credentials",
    description: "Large-scale phishing campaign targeting employee login credentials",
    severity: "high",
    status: "open",
    assignee: "Jane Smith",
    createdAt: "2024-01-14T09:15:00Z",
    updatedAt: "2024-01-14T16:45:00Z",
    taskCount: 8,
    observableCount: 23,
    tags: ["phishing", "credentials", "social-engineering"]
  },
  {
    id: "3",
    title: "Malware Detection - Workstation Compromise",
    description: "Banking trojan detected on multiple workstations in accounting department",
    severity: "high",
    status: "in-progress",
    assignee: "Mike Johnson",
    createdAt: "2024-01-13T13:20:00Z",
    updatedAt: "2024-01-15T11:10:00Z",
    taskCount: 15,
    observableCount: 67,
    tags: ["malware", "banking-trojan", "workstation"]
  },
  {
    id: "4",
    title: "Suspicious Network Traffic",
    description: "Unusual outbound traffic patterns detected from internal network",
    severity: "medium",
    status: "open",
    assignee: "Sarah Wilson",
    createdAt: "2024-01-12T11:45:00Z",
    updatedAt: "2024-01-12T11:45:00Z",
    taskCount: 5,
    observableCount: 12,
    tags: ["network", "traffic-analysis", "anomaly"]
  },
  {
    id: "5",
    title: "Data Exfiltration Attempt",
    description: "Attempted unauthorized access to sensitive customer database",
    severity: "critical",
    status: "closed",
    assignee: "Alex Brown",
    createdAt: "2024-01-10T08:30:00Z",
    updatedAt: "2024-01-11T17:20:00Z",
    taskCount: 18,
    observableCount: 89,
    tags: ["data-exfiltration", "database", "insider-threat"]
  }
];

export const mockAlerts: Alert[] = [
  {
    id: "1",
    title: "Suspicious PowerShell Execution",
    description: "Encoded PowerShell command detected with potential malicious payload",
    severity: "high",
    status: "new",
    source: "Windows Defender",
    sourceRef: "WD-2024-001234",
    createdAt: "2024-01-15T15:30:00Z",
    updatedAt: "2024-01-15T15:30:00Z",
    artifacts: 3,
    tags: ["powershell", "encoded", "malicious"]
  },
  {
    id: "2",
    title: "Multiple Failed Login Attempts",
    description: "Brute force attack detected against administrator account",
    severity: "medium",
    status: "in-progress",
    source: "Active Directory",
    sourceRef: "AD-SEC-5567",
    createdAt: "2024-01-15T14:45:00Z",
    updatedAt: "2024-01-15T15:20:00Z",
    artifacts: 1,
    tags: ["brute-force", "authentication", "admin"]
  },
  {
    id: "3",
    title: "Suspicious DNS Query",
    description: "DNS queries to known malicious domain detected",
    severity: "medium",
    status: "true-positive",
    source: "DNS Monitor",
    sourceRef: "DNS-2024-0089",
    createdAt: "2024-01-15T13:20:00Z",
    updatedAt: "2024-01-15T14:10:00Z",
    artifacts: 2,
    tags: ["dns", "malicious-domain", "c2"]
  },
  {
    id: "4",
    title: "Antivirus Detection",
    description: "Malware detected and quarantined by endpoint protection",
    severity: "low",
    status: "false-positive",
    source: "CrowdStrike",
    sourceRef: "CS-DET-7789",
    createdAt: "2024-01-15T12:15:00Z",
    updatedAt: "2024-01-15T13:05:00Z",
    artifacts: 1,
    tags: ["antivirus", "quarantine", "false-positive"]
  },
  {
    id: "5",
    title: "Unusual File Access Pattern",
    description: "Abnormal access pattern detected for sensitive files",
    severity: "high",
    status: "new",
    source: "File Monitor",
    sourceRef: "FM-2024-4433",
    createdAt: "2024-01-15T11:50:00Z",
    updatedAt: "2024-01-15T11:50:00Z",
    artifacts: 4,
    tags: ["file-access", "sensitive", "anomaly"]
  }
];