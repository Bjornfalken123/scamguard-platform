export const mockState = {
  user: {
    name: 'Björn',
    role: 'family_admin',
    primarySenior: 'Ingrid Falk',
    plan: 'Familj Premium'
  },
  seniors: [
    { id: 'senior_1', name: 'Ingrid Falk', age: 82, status: 'protected', phone: '+46 70 123 45 67', protectionLevel: 'Förstärkt' },
    { id: 'senior_2', name: 'Karl Falk', age: 79, status: 'setup_needed', phone: '+46 70 765 43 21', protectionLevel: 'Standard' }
  ],
  calls: [
    { id: 'call_101', time: '08:14', number: '+46 8 501 234 88', label: 'Okänt nummer', risk: 'medium', outcome: 'Screenades och släpptes igenom', senior: 'Ingrid Falk' },
    { id: 'call_102', time: 'Igår 17:42', number: '+44 20 7946 0123', label: 'Utländskt nummer', risk: 'high', outcome: 'Blockerat. Anhörig notifierad.', senior: 'Ingrid Falk' },
    { id: 'call_103', time: 'Igår 11:03', number: '+46 10 330 10 00', label: 'Vårdrelaterat', risk: 'low', outcome: 'Godkänt automatiskt', senior: 'Karl Falk' }
  ],
  notifications: [
    { id: 'n1', type: 'success', title: 'Skyddet är aktivt', text: 'Ingrid är skyddad med förstärkt nivå.' },
    { id: 'n2', type: 'warning', title: 'Högrisk stoppades', text: 'Ett samtal med BankID-mönster blockerades igår.' },
    { id: 'n3', type: 'info', title: 'Slutför Karl', text: 'Vidarekoppling behöver aktiveras för Karl.' }
  ],
  events: [
    { id: 'e1', time: '08:14', title: 'AI screenade ett samtal', detail: 'Okänt nummer fick beskriva ärendet innan koppling.' },
    { id: 'e2', time: 'Igår', title: 'Anhörig notifierad', detail: 'Högrisk-samtal stoppades och familjen informerades.' },
    { id: 'e3', time: 'Mån', title: 'Skyddsnivå ändrad', detail: 'Ingrid sattes till Förstärkt skydd.' }
  ],
  metrics: {
    protectedPeople: 1,
    setupNeeded: 1,
    screened30d: 142,
    blocked30d: 18,
    highRisk30d: 6,
    familyMembers: 3
  }
};
