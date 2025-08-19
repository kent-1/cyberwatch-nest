import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { StatusBadge } from "@/components/dashboard/StatusBadge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { mockCases } from "@/data/mockData";
import { Task, Observable } from "@/types";
import { 
  ArrowLeft, 
  Edit, 
  Plus, 
  CheckCircle, 
  Clock, 
  User, 
  Calendar, 
  Tag,
  Eye,
  ExternalLink,
  MessageSquare,
  Activity,
  Database,
  AlertTriangle
} from "lucide-react";

// Mock data for tasks and observables
const mockTasks: Task[] = [
  {
    id: "1",
    title: "Analyze malware sample",
    description: "Perform static and dynamic analysis of the suspected malware binary",
    status: "completed",
    assignee: "John Doe",
    createdAt: "2024-01-15T10:30:00Z",
    updatedAt: "2024-01-15T14:22:00Z"
  },
  {
    id: "2", 
    title: "Check network logs",
    description: "Review firewall and proxy logs for suspicious traffic patterns",
    status: "in-progress",
    assignee: "Jane Smith",
    createdAt: "2024-01-15T11:45:00Z",
    updatedAt: "2024-01-15T15:10:00Z"
  },
  {
    id: "3",
    title: "Interview affected users",
    description: "Conduct interviews with users who received phishing emails",
    status: "waiting",
    assignee: "Mike Johnson",
    createdAt: "2024-01-15T12:20:00Z",
    updatedAt: "2024-01-15T12:20:00Z"
  }
];

const mockObservables: Observable[] = [
  {
    id: "1",
    dataType: "ip",
    data: "192.168.1.100",
    message: "Suspected C2 server",
    tags: ["malicious", "c2"],
    ioc: true,
    sighted: true
  },
  {
    id: "2",
    dataType: "domain",
    data: "malicious-domain.com",
    message: "Domain used in phishing campaign",
    tags: ["phishing", "domain"],
    ioc: true,
    sighted: false
  },
  {
    id: "3",
    dataType: "hash",
    data: "a1b2c3d4e5f6789012345678901234567890abcd",
    message: "SHA1 hash of malware sample",
    tags: ["malware", "hash"],
    ioc: true,
    sighted: true
  },
  {
    id: "4",
    dataType: "email",
    data: "attacker@evil.com",
    message: "Sender of phishing emails",
    tags: ["phishing", "email"],
    ioc: false,
    sighted: false
  }
];

export default function CaseDetail() {
  const { id } = useParams();
  const [newComment, setNewComment] = useState("");
  const case_ = mockCases.find(c => c.id === id);

  if (!case_) {
    return (
      <div className="p-6">
        <div className="text-center py-12">
          <AlertTriangle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-medium text-foreground mb-2">Case not found</h3>
          <p className="text-muted-foreground mb-4">The case you're looking for doesn't exist.</p>
          <Button asChild>
            <Link to="/cases">Back to Cases</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" asChild>
          <Link to="/cases" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Cases
          </Link>
        </Button>
      </div>

      {/* Case Header */}
      <div className="space-y-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-foreground">{case_.title}</h1>
            <p className="text-muted-foreground">{case_.description}</p>
            <div className="flex items-center gap-2">
              <StatusBadge status={case_.severity} />
              <StatusBadge status={case_.status} />
            </div>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Edit className="h-4 w-4" />
              Edit Case
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <ExternalLink className="h-4 w-4" />
              Export
            </Button>
          </div>
        </div>

        {/* Case Metadata */}
        <Card>
          <CardContent className="pt-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <User className="h-4 w-4" />
                  Assignee
                </p>
                <p className="font-medium">{case_.assignee}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Created
                </p>
                <p className="font-medium">{new Date(case_.createdAt).toLocaleDateString()}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Activity className="h-4 w-4" />
                  Last Updated
                </p>
                <p className="font-medium">{new Date(case_.updatedAt).toLocaleDateString()}</p>
              </div>
              <div className="space-y-1">
                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Tag className="h-4 w-4" />
                  Tags
                </p>
                <div className="flex flex-wrap gap-1">
                  {case_.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Content Tabs */}
      <Tabs defaultValue="tasks" className="space-y-4">
        <TabsList>
          <TabsTrigger value="tasks">Tasks ({mockTasks.length})</TabsTrigger>
          <TabsTrigger value="observables">Observables ({mockObservables.length})</TabsTrigger>
          <TabsTrigger value="timeline">Timeline</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
        </TabsList>

        {/* Tasks Tab */}
        <TabsContent value="tasks" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Tasks</h3>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Task
            </Button>
          </div>
          <div className="space-y-3">
            {mockTasks.map((task) => (
              <Card key={task.id}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <h4 className="font-medium">{task.title}</h4>
                        <StatusBadge status={task.status} />
                      </div>
                      <p className="text-sm text-muted-foreground">{task.description}</p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <User className="h-3 w-3" />
                          {task.assignee}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(task.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      {task.status !== "completed" && (
                        <Button size="sm" variant="outline">
                          <CheckCircle className="h-4 w-4" />
                        </Button>
                      )}
                      <Button size="sm" variant="ghost">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Observables Tab */}
        <TabsContent value="observables" className="space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold">Observables</h3>
            <Button size="sm" className="gap-2">
              <Plus className="h-4 w-4" />
              Add Observable
            </Button>
          </div>
          <div className="space-y-3">
            {mockObservables.map((observable) => (
              <Card key={observable.id}>
                <CardContent className="pt-4">
                  <div className="flex items-start justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex items-center gap-2">
                        <Badge variant="outline">{observable.dataType}</Badge>
                        <code className="px-2 py-1 bg-muted rounded text-sm font-mono">
                          {observable.data}
                        </code>
                        {observable.ioc && (
                          <Badge variant="destructive" className="text-xs">IOC</Badge>
                        )}
                        {observable.sighted && (
                          <Badge variant="secondary" className="text-xs flex items-center gap-1">
                            <Eye className="h-3 w-3" />
                            Sighted
                          </Badge>
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground">{observable.message}</p>
                      <div className="flex flex-wrap gap-1">
                        {observable.tags.map((tag) => (
                          <Badge key={tag} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <Button size="sm" variant="outline" className="gap-2">
                      <Database className="h-4 w-4" />
                      Analyze
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Timeline Tab */}
        <TabsContent value="timeline" className="space-y-4">
          <h3 className="text-lg font-semibold">Case Timeline</h3>
          <div className="space-y-4">
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
              <div className="space-y-1">
                <p className="font-medium">Case created</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(case_.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-warning mt-2 flex-shrink-0"></div>
              <div className="space-y-1">
                <p className="font-medium">Assigned to {case_.assignee}</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(case_.createdAt).toLocaleString()}
                </p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="w-2 h-2 rounded-full bg-success mt-2 flex-shrink-0"></div>
              <div className="space-y-1">
                <p className="font-medium">Analysis started</p>
                <p className="text-sm text-muted-foreground">
                  {new Date(case_.updatedAt).toLocaleString()}
                </p>
              </div>
            </div>
          </div>
        </TabsContent>

        {/* Notes Tab */}
        <TabsContent value="notes" className="space-y-4">
          <h3 className="text-lg font-semibold">Case Notes</h3>
          <Card>
            <CardContent className="pt-4">
              <div className="space-y-4">
                <Textarea
                  placeholder="Add a note about this case..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  rows={4}
                />
                <Button size="sm" className="gap-2">
                  <MessageSquare className="h-4 w-4" />
                  Add Note
                </Button>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-3">
            <Card>
              <CardContent className="pt-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <span className="font-medium">John Doe</span>
                    <span className="text-muted-foreground">2 hours ago</span>
                  </div>
                  <p className="text-sm">
                    Completed initial malware analysis. Found indicators of APT29 tactics. 
                    Recommend escalating to Tier 2 for further investigation.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}