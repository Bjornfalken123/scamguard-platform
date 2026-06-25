export const mockState = {
  user: {
    name: 'Björn',
    role: 'family_admin',
    mode: 'family',
    primarySenior: 'Ingrid Falk',
    plan: 'Familj Premium',
    email: 'bjorn@example.com'
  },
  seniors: [
    { id: 'senior_1', name: 'Ingrid Falk', age: 82, status: 'protected', phone: '+46 70 123 45 67', protectionLevel: 'Förstärkt', carrier: 'Telia', forwarding: 'active', mode: 'Senior-läge' },
    { id: 'senior_2', name: 'Karl Falk', age: 79, status: 'protected', phone: '+46 70 765 43 21', protectionLevel: 'Standard', carrier: 'Tele2', forwarding: 'active', mode: 'Senior-läge' }
  ],
  calls: [
    { id: 'call_101', time: '08:14', date: 'Idag', number: '+46 8 501 234 88', label: 'Okänt nummer', risk: 'medium', outcome: 'Screenades och släpptes igenom', senior: 'Ingrid Falk' },
    { id: 'call_102', time: 'Igår 17:42', date: 'Igår', number: '+44 20 7946 0123', label: 'Utländskt nummer', risk: 'high', outcome: 'Blockerat. Anhörig notifierad.', senior: 'Ingrid Falk' },
    { id: 'call_103', time: 'Igår 11:03', date: 'Igår', number: '+46 10 330 10 00', label: 'Vårdrelaterat', risk: 'low', outcome: 'Godkänt automatiskt', senior: 'Karl Falk' },
    { id: 'call_104', time: 'Mån 14:22', date: 'Mån', number: '+46 73 902 11 77', label: 'BankID-mönster', risk: 'high', outcome: 'Blockerat innan koppling', senior: 'Ingrid Falk' },
    { id: 'call_105', time: 'Sön 09:02', date: 'Sön', number: '+46 8 401 80 00', label: 'Legitimt ärende', risk: 'low', outcome: 'Godkänt efter screening', senior: 'Karl Falk' }
  ],
  family: [
    { id: 'fam_1', name: 'Björn Falk', role: 'Ägare', relation: 'Son', priority: 1, alerts: ['Högrisk', 'Missad vidarekoppling', 'Veckorapport'], status: 'active' },
    { id: 'fam_2', name: 'Anna Falk', role: 'Anhörig', relation: 'Dotter', priority: 2, alerts: ['Högrisk', 'Veckorapport'], status: 'active' },
    { id: 'fam_3', name: 'Peter Falk', role: 'Observatör', relation: 'Son', priority: 3, alerts: ['Månadsrapport'], status: 'pending' }
  ],
  notifications: [
    { id: 'n1', type: 'success', title: 'Skyddet är aktivt', text: 'Alla okända samtal går via ScamGuard först.' },
    { id: 'n2', type: 'warning', title: 'BankID-mönster ökade', text: 'Tre samtal försökte skapa stress kring BankID eller bankkonto.' },
    { id: 'n3', type: 'info', title: 'Veckorapport skickas söndag', text: 'Anhöriga får en lugn sammanfattning utan onödiga larm.' }
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
  controlCenter: {
    headline: 'Kontrollcenter',
    reassurance: 'ScamGuard gör jobbet automatiskt. Appen är bara kontrollpanelen: status, rapporter och enkla inställningar.',
    activeProfile: 'Ingrid Falk',
    currentMode: 'Kontrollpanel',
    seniorModePreview: {
      title: 'Senior-läge',
      text: 'Visar bara det viktigaste: skyddet är aktivt, senaste kontroll och en supportknapp.'
    },
    familyModePreview: {
      title: 'Anhörig-läge',
      text: 'En avskalad vy för rapporter och inställningar. Anhöriga följer skyddet, men behöver inte driva det.'
    },
    systemStatus: [
      { label: 'Telefonvidarekoppling', status: 'Aktiv', tone: 'good', detail: 'Okända samtal går via ScamGuard först.' },
      { label: 'AI-screening', status: 'Aktiv', tone: 'good', detail: 'Regler först, AI vid osäkerhet.' },
      { label: 'Rapportmottagare', status: '2 aktiva', tone: 'good', detail: 'Får rapporter och högriskinformation vid behov.' },
      { label: 'Integritet', status: '30 dagar', tone: 'neutral', detail: 'Mockad lagringstid för rapportdata.' }
    ],
    protectionLevels: [
      { id: 'standard', name: 'Standard', selected: false, text: 'Screenar okända samtal och blockerar tydliga riskmönster.' },
      { id: 'enhanced', name: 'Förstärkt', selected: true, text: 'AI frågar mer innan samtal kopplas fram. Rekommenderas för Ingrid.' },
      { id: 'maximum', name: 'Max', selected: false, text: 'Alla okända samtal kräver godkänd screening innan koppling.' }
    ],
    forwardingSteps: [
      { step: 1, title: 'Kontrollera nummer', text: 'Seniorens nummer är kopplat till ScamGuard-profilen.' },
      { step: 2, title: 'Aktivera vidarekoppling', text: 'Okända samtal skickas först till ScamGuard-numret.' },
      { step: 3, title: 'Testa skyddet', text: 'Ett testsamtal simuleras så familjen ser flödet.' }
    ],
    aiSettings: [
      { label: 'Känslighet', value: 'Balanserad', detail: 'Minimerar falska larm utan att släppa igenom högrisk.' },
      { label: 'Transkribering', value: 'Endast vid risk', detail: 'Lagrar inte vanliga samtal i mockläget.' },
      { label: 'Automatisk blockering', value: 'På vid högrisk', detail: 'Blockerar BankID-, fjärrstyrnings- och tidspressmönster.' }
    ],
    privacy: [
      { label: 'Samtycke', value: 'Registrerat', detail: 'Senior och anhörig har godkänt skyddet i mockflödet.' },
      { label: 'Datalagring', value: '30 dagar', detail: 'Samtalsmetadata för rapporter. Ljud lagras inte i prototypen.' },
      { label: 'Export', value: 'Förberett', detail: 'Rapporter kan senare exporteras som PDF.' }
    ],
    subscription: {
      plan: 'Familj Premium',
      price: '149 kr/mån',
      seats: '2 seniorer · 3 anhöriga',
      status: 'Mockad prenumeration'
    },
    quickActions: [
      { title: 'Testa skyddet', text: 'Simulera ett okänt samtal.' },
      { title: 'Hantera rapportmottagare', text: 'Välj vilka som får rapporter.' },
      { title: 'Granska tillåtna nummer', text: 'Minska risken att legitima samtal fastnar.' },
      { title: 'Ring support', text: 'Hjälp utan tekniska val.' }
    ]
  },

  stories: {
    headline: 'Så fungerar skyddet',
    reassurance: 'En enkel förklaring av vad som händer i bakgrunden. Användaren behöver normalt inte göra något.',
    activeStory: 'story_scam_blocked',
    scenarios: [
      {
        id: 'story_scam_blocked',
        title: 'Bedrägerisamtal stoppas',
        type: 'Högrisk',
        tone: 'bad',
        summary: 'Ett okänt nummer påstår sig ringa från banken. ScamGuard stoppar samtalet innan Ingrid blir kopplad.',
        outcome: 'Blockerat automatiskt',
        senior: 'Ingrid Falk',
        duration: '42 sek',
        riskScore: 94,
        evidence: ['BankID nämndes', 'Tidspress', 'Fjärrstyrningsmönster', 'Okänt nummer'],
        timeline: [
          { time: '00:00', label: 'Okänt samtal', text: 'Samtalet går först till ScamGuard via vidarekoppling.' },
          { time: '00:07', label: 'AI frågar ärende', text: 'Uppringaren säger att det gäller ett bankärende.' },
          { time: '00:18', label: 'Riskmönster hittas', text: 'AI upptäcker BankID och brådskande språk.' },
          { time: '00:31', label: 'Samtalet stoppas', text: 'Samtalet kopplas inte vidare till Ingrid.' },
          { time: '00:42', label: 'Anhörig får notis', text: 'Björn får en lugn sammanfattning med rekommenderad åtgärd.' }
        ],
        notification: 'Högrisk-samtal stoppades. Ingen åtgärd krävs.',
        userFeeling: 'Ingrid märker inget. ScamGuard sköter skyddet i bakgrunden.'
      },
      {
        id: 'story_safe_call',
        title: 'Legitimt samtal släpps igenom',
        type: 'Låg risk',
        tone: 'good',
        summary: 'En vårdcentral ringer från ett okänt nummer. ScamGuard screenar kort och kopplar fram samtalet.',
        outcome: 'Godkänt · Kopplat vidare',
        senior: 'Karl Falk',
        duration: '18 sek',
        riskScore: 12,
        evidence: ['Tydligt ärende', 'Ingen känslig begäran', 'Vårdrelaterat språk'],
        timeline: [
          { time: '00:00', label: 'Okänt nummer', text: 'Samtalet skickas till ScamGuard först.' },
          { time: '00:05', label: 'AI verifierar ärendet', text: 'Uppringaren beskriver ett bokat vårdärende.' },
          { time: '00:12', label: 'Låg risk', text: 'Inga bedrägerimönster hittas.' },
          { time: '00:18', label: 'Kopplas vidare', text: 'Karl får samtalet som vanligt.' }
        ],
        notification: 'Legitimt samtal kopplades vidare efter screening.',
        userFeeling: 'Karl får viktiga samtal utan att behöva hantera tekniken.'
      },
      {
        id: 'story_family_alert',
        title: 'AI är osäker',
        type: 'Medelrisk',
        tone: 'warning',
        summary: 'AI är osäker och pausar samtalet utan att stressa senioren. En rapportnotis kan skickas vid behov.',
        outcome: 'Pausat · Kräver ingen akut åtgärd',
        senior: 'Ingrid Falk',
        duration: '1 min 10 sek',
        riskScore: 61,
        evidence: ['Oklart ärende', 'Okänt företag', 'Ingen akut fara'],
        timeline: [
          { time: '00:00', label: 'Samtal screenas', text: 'Uppringaren beskriver ett serviceärende men saknar tydlig referens.' },
          { time: '00:26', label: 'AI blir osäker', text: 'Samtalet klassas som medelrisk istället för att blockeras direkt.' },
          { time: '00:45', label: 'Rapport skapas', text: 'Händelsen hamnar i rapporten så den kan granskas senare.' },
          { time: '01:10', label: 'Regel uppdateras', text: 'Numret kan läggas till i tillåtna kontakter om det verifieras.' }
        ],
        notification: 'Medelrisk: kontrollera om numret ska tillåtas.',
        userFeeling: 'Tjänsten hanterar osäkerhet utan att lägga ansvar på senior eller anhörig.'
      },
      {
        id: 'story_senior_mode',
        title: 'Senior öppnar appen',
        type: 'Trygghet',
        tone: 'good',
        summary: 'Senior-läget visar bara att skyddet fungerar och vad som hänt, utan svåra inställningar.',
        outcome: 'Skydd aktivt · Ingen åtgärd',
        senior: 'Ingrid Falk',
        duration: '5 sek',
        riskScore: 4,
        evidence: ['Enkel vy', 'Tydlig status', 'Supportknapp'],
        timeline: [
          { time: 'Start', label: 'Appen öppnas', text: 'Ingrid ser direkt att skyddet är aktivt.' },
          { time: 'Direkt', label: 'Ingen åtgärd', text: 'Appen säger att hon inte behöver göra något.' },
          { time: 'Vid behov', label: 'Support', text: 'En stor knapp leder till hjälp.' }
        ],
        notification: 'Allt fungerar. Du behöver inte göra något.',
        userFeeling: 'Senioren får lugn, inte fler beslut.'
      }
    ],
    demoFeed: [
      { title: 'AI analyserar inkommande samtal', text: 'Okänt nummer skickas till ScamGuard först.', tone: 'info' },
      { title: 'Riskbeslut fattas', text: 'Regler och AI väger samman signaler.', tone: 'warning' },
      { title: 'Rapport uppdateras', text: 'Händelsen sparas som enkel rapportdata.', tone: 'good' },
      { title: 'Rapport uppdateras', text: 'Trygghetsbeviset blir synligt i appen.', tone: 'good' }
    ]
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
      { title: 'Behåll rapportmottagare som backup', text: 'Anhöriga ska främst följa rapporter, inte behöva agera löpande.' },
      { title: 'Granska tillåtna nummer varje månad', text: 'Det minskar risken att legitima vård- eller serviceärenden fastnar.' }
    ]
  }
};
