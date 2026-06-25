import type { CallEvent, FamilyMember, ProtectedPerson } from '../types/domain';

export const person: ProtectedPerson = {
  id: 'p1',
  name: 'Anna Svensson',
  age: 78,
  phone: '+46 70 123 45 67',
  protectionStatus: 'active',
  plan: 'Familjeskydd Plus'
};

export const family: FamilyMember[] = [
  { id: 'f1', name: 'Björn', relation: 'Son', role: 'owner', phone: '+46 70 555 12 12', alerts: true, priority: 1 },
  { id: 'f2', name: 'Elin', relation: 'Dotter', role: 'guardian', phone: '+46 73 222 33 44', alerts: true, priority: 2 },
  { id: 'f3', name: 'Lena', relation: 'Granne', role: 'viewer', phone: '+46 76 111 22 33', alerts: false, priority: 3 }
];

export const calls: CallEvent[] = [
  { id: 'c1', from: '+46 8 501 234 90', label: 'Okänt nummer', time: 'Idag 10:42', duration: '01:18', risk: 'critical', outcome: 'blocked', summary: 'Uppringaren påstod sig ringa från banken och bad om BankID.', signals: ['BankID', 'tidspress', 'okänt nummer'] },
  { id: 'c2', from: '+46 31 700 18 00', label: 'Vårdcentralen', time: 'Idag 09:12', duration: '00:34', risk: 'low', outcome: 'allowed', summary: 'Verifierad vårdkontakt släpptes igenom utan fördröjning.', signals: ['verifierad avsändare'] },
  { id: 'c3', from: '+44 20 7946 0123', label: 'Internationellt okänt', time: 'Igår 16:05', duration: '02:41', risk: 'high', outcome: 'family_alerted', summary: 'AI upptäckte försök att få användaren installera fjärrstyrningsapp.', signals: ['fjärrstyrning', 'teknisk support', 'ovanligt land'] },
  { id: 'c4', from: '+46 70 987 65 43', label: 'Ny kontakt', time: 'Igår 11:27', duration: '00:52', risk: 'medium', outcome: 'screened', summary: 'Samtalet screenades och släpptes fram efter neutral anledning.', signals: ['ej i kontakter', 'låg press'] }
];

export const stats = {
  screenedThisWeek: 18,
  blockedThisWeek: 3,
  familyAlerts: 2,
  safeCalls: 15,
  avgDecisionTime: '4,8 sek',
  protectionScore: 96
};
