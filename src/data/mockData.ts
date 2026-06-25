export const mockData = {
  senior: { name: 'Ingrid Falk', age: 82, phone: '+46 70 123 45 67', city: 'Stockholm' },
  guardian: { name: 'Björn', role: 'Anhörig administratör' },
  metrics: { screened: 128, blocked: 18, warnings: 7, allowed: 103, familyAlerts: 5 },
  today: { screened: 3, blocked: 0, medium: 1, allowed: 2, lastCheck: 'för 2 min sedan' },
  system: [
    { label: 'Telefonskydd', value: 'Aktivt', detail: 'Okända samtal går via ScamGuard', tone: 'success' },
    { label: 'AI-screening', value: 'Redo', detail: 'Regelbaserad mockmotor aktiv', tone: 'success' },
    { label: 'Anhörigvarningar', value: 'På', detail: 'Anna får varning vid hög risk', tone: 'success' }
  ],
  protection: {
    level: 'Standard',
    forwarding: 'Aktiv',
    aiScreening: 'Aktiv',
    unknownCalls: true,
    alertFamily: true,
    silentBlock: true
  },
  calls: [
    { id: 1, title: 'Okänt nummer', number: '+46 70 123 45 67', time: '09:32', risk: 'Hög risk', status: 'Blockerat', reason: 'Påstod sig ringa från banken och bad om BankID.', type: 'Bankbedrägeri' },
    { id: 2, title: 'Vårdcentralen', number: '+46 8 123 45 00', time: '08:15', risk: 'Låg risk', status: 'Tillåtet', reason: 'Verifierat nummer i betrodd lista.', type: 'Vård' },
    { id: 3, title: 'Okänt nummer', number: '+46 72 987 65 43', time: 'Igår', risk: 'Medel risk', status: 'Varning skickad', reason: 'Otydlig avsändare och tidspress i samtalet.', type: 'Telefonförsäljning' },
    { id: 4, title: 'Försäkringsbolag', number: '+46 10 123 45 67', time: 'Mån', risk: 'Låg risk', status: 'Tillåtet', reason: 'Legitimt ärende, låg risk.', type: 'Försäkring' }
  ],
  activity: [
    { title: 'Okänt nummer screenades', description: 'AI:n bad uppringaren beskriva ärendet innan Ingrid stördes.', tone: 'success' },
    { title: 'Samtalet bedömdes', description: 'Risknivå: låg. Samtalet kopplades fram.', tone: 'success' },
    { title: 'Anhörigstatus uppdaterad', description: 'Anna och Erik är redo att få varningar vid hög risk.', tone: 'success' }
  ],
  family: [
    { name: 'Anna Svensson', phone: '+46 70 123 45 67', role: 'Primär', alerts: 'SMS + push', status: 'Aktiv' },
    { name: 'Erik Svensson', phone: '+46 72 123 46 68', role: 'Sekundär', alerts: 'Push', status: 'Aktiv' },
    { name: 'Maria Svensson', phone: '+46 73 456 67 89', role: 'Backup', alerts: 'SMS', status: 'Väntar' }
  ],
  recommendations: [
    'Lägg till ytterligare en anhörig som backup.',
    'Verifiera vårdcentralens nummer i betrodda kontakter.',
    'Testa AI-screeningflödet tillsammans med Ingrid.'
  ]
};
