// Matches internal/office/state.go

export type AgentState =
  | "idle"
  | "receiving"
  | "thinking"
  | "responding"
  | "tool_calling"
  | "error";

export interface OfficeAgent {
  id: string;
  name: string;
  model: string;
  provider: string;
  state: AgentState;
  speechBubble?: string;
  currentRunId?: string;
  currentChannel?: string;
  agentType?: string;
  displayName?: string;
  characterIndex: number;
  lastActiveAt: string;
}

export interface OfficeTeam {
  id: string;
  name: string;
  leadId: string;
  members: string[];
}

export interface OfficeDelegation {
  id: string;
  sourceId: string;
  targetId: string;
  sourceDisplayName?: string;
  targetDisplayName?: string;
  task?: string;
  status: string;
  mode: string;
  teamId?: string;
  elapsedMs?: number;
  startedAt: string;
}

export interface OfficeAgentLink {
  id: string;
  sourceAgentKey: string;
  targetAgentKey: string;
  direction: string;
  status: string;
}

export interface GatewayDesk {
  version: string;
  healthy: boolean;
  mode: string;
  uptime: number;
  eventCount: number;
  startedAt: string;
}

export interface Notification {
  id: string;
  agentId?: string;
  type: string;
  message: string;
  timestamp: string;
}

export interface OfficeSnapshot {
  gateway: GatewayDesk;
  agents: Record<string, OfficeAgent>;
  teams: Record<string, OfficeTeam>;
  activeDelegations: OfficeDelegation[];
  agentLinks: OfficeAgentLink[];
  notifications: Notification[];
  updatedAt: string;
}
