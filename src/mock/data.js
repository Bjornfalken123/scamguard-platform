export const mockState = {
  user: {
    name: 'Björn',
    role: 'family_admin',
    primarySenior: 'Ingrid Falk',
    plan: 'Familj Premium'
  },
  seniors: [
    { id: 'senior_1', name: 'Ingrid Falk', age: 82, status: 'protected', phone: '+46 70 123 45 67', protectionLevel: 'Förstärkt' },
    { id: 'senior_2', name: 'Karl Falk', age: 79, status: 'protected', phone: '+46 70 765 43 21', protectionLevel: 'Standard' }
  ],
  calls: [
    { id: 'call_101', time: '08:14', date: 'Idag', number: '+46 8 501 234 88', label: 'Okänt nummer', risk: 'medium', outcome: 'Screenades och släpptes igenom', senior: 'Ingrid Falk' },
    { id: 'call_102', time: 'Igår 17:42', date: 'Igår', number: '+44 20 7946 0123', label: 'Utländskt nummer', risk: 'high', outcome: 'Blockerat. Anhörig notifierad.', senior: 'Ingrid Falk' },
    { id: 'call_103', time: 'Igår 11:03', date: 'Igår', number: '+46 10 330 10 00', label: 'Vårdrelaterat', risk: 'low', outcome: 'Godkänt automatiskt', senior: 'Karl Falk' },
    { id: 'call_104', time: 'Mån 14:22', date: 'Mån', number: '+46 73 902 11 77', label: 'BankID-mönster', risk: 'high', outcome: 'Blockerat innan koppling', senior: 'Ingrid Falk' },
    { id: 'call_105', time: 'Sön 09:02', date: 'Sön', number: '+46 8 401 80 00', label: 'Legitimt ärende', risk: 'low', outcome: 'Godkänt efter screening', senior: 'Karl Falk' }
  ],
  notifications: [
    { id: 'n1', type: 'success', title: 'Månadsrapport klar', text: 'ScamGuard stoppade 18 misstänkta bedrägeriförsök senaste 30 dagarna.' },
    { id: 'n2', type: 'warning', title: 'BankID-mönster ökade', text: 'Tre samtal försökte skapa stress kring BankID eller bankkonto.' },
    { id: 'n3', type: 'info', title: 'Familjen skyddad', text: 'Två seniorer är nu aktiva i familjeplanen.' }
  ],
  events: [
    { id: 'e1', time: '08:14', title: 'AI screenade ett samtal', detail: 'Okänt nummer fick beskriva ärendet innan koppling.' },
    { id: 'e2', time: 'Igår', title: 'Anhörig notifierad', detail: 'Högrisk-samtal stoppades och familjen informerades.' },
    { id: 'e3', time: 'Mån', title: 'Skyddsnivå ändrad', detail: 'Ingrid sattes till Förstärkt skydd.' }
  ],
  metrics: {
    protectedPeople: 2,
    setupNeeded: 0,
    screened30d: 142,
    blocked30d: 18,
    highRisk30d: 6,
    mediumRisk30d: 21,
    familyMembers: 3,
    safePassThrough30d: 98,
    estimatedMinutesSaved: 64,
    averageDecisionSeconds: 7,
    falseAlertsReported: 1
  },
  reports: {
    period: 'Senaste 30 dagarna',
    headline: 'ScamGuard stoppade 18 misstänkta bedrägeriförsök innan de nådde familjen.',
    reassurance: 'Inga högrisk-samtal kopplades vidare till Ingrid eller Karl under perioden.',
    summary: [
      { label: 'Screenade samtal', value: 142, change: '+12 %', tone: 'neutral' },
      { label: 'Stoppade försök', value: 18, change: '+5', tone: 'positive' },
      { label: 'Högrisk', value: 6, change: '-2', tone: 'warning' },
      { label: 'Trygga vidarekopplingar', value: 98, change: 'stabilt', tone: 'positive' }
    ],
    weekly: [
      { week: 'v22', screened: 29, blocked: 3, high: 1 },
      { week: 'v23', screened: 34, blocked: 5, high: 2 },
      { week: 'v24', screened: 41, blocked: 6, high: 2 },
      { week: 'v25', screened: 38, blocked: 4, high: 1 }
    ],
    categories: [
      { label: 'Bank / BankID', count: 7, percent: 39, tone: 'high' },
      { label: 'Teknisk support', count: 4, percent: 22, tone: 'medium' },
      { label: 'Leverans / paket', count: 3, percent: 17, tone: 'medium' },
      { label: 'Okänd utlandstrafik', count: 2, percent: 11, tone: 'medium' },
      { label: 'Övrigt', count: 2, percent: 11, tone: 'low' }
    ],
    seniors: [
      { name: 'Ingrid Falk', screened: 89, blocked: 14, status: 'Skydd aktivt', note: 'Förstärkt skydd fångade 5 högrisk-samtal.' },
      { name: 'Karl Falk', screened: 53, blocked: 4, status: 'Skydd aktivt', note: 'Standardnivå fungerar väl. Inga kritiska händelser.' }
    ],
    recommendations: [
      { title: 'Behåll förstärkt skydd för Ingrid', text: 'Flera samtal försökte skapa stress kring BankID. Nuvarande nivå är rätt.' },
      { title: 'Lägg till en extra anhörig som backup', text: 'Om primär anhörig missar en högriskvarning kan nästa person notifieras.' },
      { title: 'Granska tillåtna nummer varje månad', text: 'Det minskar risken att legitima vård- eller serviceärenden fastnar.' }
    ]
  }
};
