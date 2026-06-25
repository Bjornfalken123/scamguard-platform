export type RiskLevel = 'low' | 'medium' | 'high' | 'critical';
export type CallOutcome = 'allowed' | 'screened' | 'blocked' | 'family_alerted';
export type FamilyRole = 'owner' | 'guardian' | 'viewer';

export interface ProtectedPerson {
  id: string;
  name: string;
  age: number;
  phone: string;
  protectionStatus: 'active' | 'setup_needed' | 'paused';
  plan: string;
}

export interface FamilyMember {
  id: string;
  name: string;
  relation: string;
  role: FamilyRole;
  phone: string;
  alerts: boolean;
  priority: number;
}

export interface CallEvent {
  id: string;
  from: string;
  label: string;
  time: string;
  duration: string;
  risk: RiskLevel;
  outcome: CallOutcome;
  summary: string;
  signals: string[];
}
