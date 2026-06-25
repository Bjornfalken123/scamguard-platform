export type RiskLevel = 'Låg risk' | 'Medel risk' | 'Hög risk';
export type CallStatus = 'Tillåtet' | 'Blockerat' | 'Varning skickad' | 'Vidarekopplat' | 'Under granskning';

export type ScamCall = {
  id: number;
  title: string;
  number: string;
  time: string;
  date: string;
  duration: string;
  risk: RiskLevel;
  score: number;
  status: CallStatus;
  category: string;
  reason: string;
  summary: string;
  aiDecision: string;
  recommendation: string;
  transcript: string[];
  timeline: { time: string; title: string; detail: string }[];
};

export const mockData = {
  senior: { name: 'Ingrid Falk', age: 82, phone: '+46 70 123 45 67', city: 'Stockholm' },
  guardian: { name: 'Björn', role: 'Anhörig administratör' },
  metrics: { screened: 128, blocked: 18, warnings: 7, allowed: 103, familyAlerts: 5 },
  protection: {
    level: 'Förstärkt',
    forwarding: 'Aktiv',
    aiScreening: 'Aktiv',
    unknownCalls: true,
    alertFamily: true,
    silentBlock: true
  },
  calls: [
    {
      id: 1,
      title: 'Okänt nummer',
      number: '+46 76 441 29 18',
      time: '09:32',
      date: 'Idag',
      duration: '1 min 42 sek',
      risk: 'Hög risk',
      score: 92,
      status: 'Blockerat',
      category: 'BankID-bedrägeri',
      reason: 'Påstod sig ringa från banken och bad om BankID.',
      summary: 'AI-assistenten upptäckte klassiska tecken på bankbedrägeri: falsk auktoritet, tidspress och begäran om BankID.',
      aiDecision: 'Samtalet blockerades innan Ingrid kopplades in.',
      recommendation: 'Ingen åtgärd behövs. Björn notifierades eftersom risknivån var hög.',
      transcript: ['Uppringaren: Jag ringer från säkerhetsavdelningen på banken.', 'AI: Vad gäller ärendet?', 'Uppringaren: Det är bråttom. Kunden behöver öppna BankID för att stoppa en transaktion.'],
      timeline: [
        { time: '09:32', title: 'Okänt samtal mottaget', detail: 'Samtalet fångades upp av ScamGuard innan det nådde Ingrid.' },
        { time: '09:32', title: 'AI-screening startade', detail: 'Assistenten bad uppringaren beskriva ärendet.' },
        { time: '09:33', title: 'Hög risk identifierad', detail: 'BankID, tidspress och bankreferens gav riskpoäng 92/100.' },
        { time: '09:34', title: 'Samtalet blockerades', detail: 'Ingrid stördes inte. Anhörig notifierades.' }
      ]
    },
    {
      id: 2,
      title: 'Vårdcentralen',
      number: '+46 8 123 45 00',
      time: '08:15',
      date: 'Idag',
      duration: '34 sek',
      risk: 'Låg risk',
      score: 12,
      status: 'Tillåtet',
      category: 'Betrodd kontakt',
      reason: 'Verifierat nummer i betrodd lista.',
      summary: 'Numret matchade Ingrids betrodda kontaktlista och släpptes igenom utan extra varning.',
      aiDecision: 'Samtalet kopplades vidare till Ingrid.',
      recommendation: 'Ingen åtgärd behövs.',
      transcript: ['ScamGuard: Numret finns i betrodda kontakter.', 'System: Samtalet kopplas vidare.'],
      timeline: [
        { time: '08:15', title: 'Betrodd kontakt', detail: 'Numret matchade Vårdcentralen i kontaktlistan.' },
        { time: '08:15', title: 'Samtalet tilläts', detail: 'Ingrid kopplades in direkt.' }
      ]
    },
    {
      id: 3,
      title: 'Okänt nummer',
      number: '+46 72 987 65 43',
      time: 'Igår',
      date: 'Igår',
      duration: '2 min 08 sek',
      risk: 'Medel risk',
      score: 61,
      status: 'Varning skickad',
      category: 'Otydlig avsändare',
      reason: 'Otydlig avsändare och tidspress i samtalet.',
      summary: 'Uppringaren kunde inte tydligt verifiera vem de representerade. Samtalet stoppades inte automatiskt, men anhörig fick varning.',
      aiDecision: 'Samtalet markerades som osäkert och anhörig notifierades.',
      recommendation: 'Ring endast tillbaka via officiellt nummer om ärendet verkar viktigt.',
      transcript: ['Uppringaren: Vi behöver bekräfta några uppgifter.', 'AI: Vilket företag ringer du från?', 'Uppringaren: Det gäller bara en snabb kontroll.'],
      timeline: [
        { time: '17:22', title: 'AI-screening', detail: 'Uppringaren gav otydligt svar om avsändare.' },
        { time: '17:23', title: 'Medel risk', detail: 'Samtalet markerades för anhöriggranskning.' },
        { time: '17:24', title: 'Varning skickad', detail: 'Björn fick en pushnotis med sammanfattning.' }
      ]
    },
    {
      id: 4,
      title: 'Försäkringsbolag',
      number: '+46 10 123 45 67',
      time: 'Mån',
      date: 'Måndag',
      duration: '48 sek',
      risk: 'Låg risk',
      score: 18,
      status: 'Vidarekopplat',
      category: 'Kundservice',
      reason: 'Legitimt ärende, låg risk.',
      summary: 'Uppringaren uppgav ett tydligt ärende och bad inte om känsliga uppgifter.',
      aiDecision: 'Samtalet kopplades vidare efter kort screening.',
      recommendation: 'Lägg till numret i betrodda kontakter om det är återkommande.',
      transcript: ['Uppringaren: Jag ringer om en bokad skadebesiktning.', 'AI: Kommer du be om BankID eller koder?', 'Uppringaren: Nej, bara bekräfta tiden.'],
      timeline: [
        { time: '13:11', title: 'Screening', detail: 'Uppringaren gav tydligt ärende.' },
        { time: '13:12', title: 'Låg risk', detail: 'Inga riskfraser upptäcktes.' },
        { time: '13:12', title: 'Vidarekopplat', detail: 'Ingrid kopplades in.' }
      ]
    },
    {
      id: 5,
      title: 'Teknisk support',
      number: '+46 73 118 90 44',
      time: 'Sön',
      date: 'Söndag',
      duration: '1 min 15 sek',
      risk: 'Hög risk',
      score: 88,
      status: 'Blockerat',
      category: 'Fjärrstyrning',
      reason: 'Bad användaren installera fjärrstyrningsapp.',
      summary: 'Uppringaren hävdade problem med datorn och försökte få användaren att installera en app.',
      aiDecision: 'Samtalet blockerades och numret markerades som misstänkt.',
      recommendation: 'Blockera permanent om samma nummer ringer igen.',
      transcript: ['Uppringaren: Vi ser ett problem på din dator.', 'AI: Vad vill du att kunden ska göra?', 'Uppringaren: Installera ett program så hjälper vi till.'],
      timeline: [
        { time: '15:04', title: 'Okänt nummer', detail: 'Samtalet gick till AI-screening.' },
        { time: '15:05', title: 'Fjärrstyrning upptäckt', detail: 'Begäran om installation gav hög risk.' },
        { time: '15:05', title: 'Blockerat', detail: 'Samtalet släpptes inte fram.' }
      ]
    },
    {
      id: 6,
      title: 'Kommunen',
      number: '+46 8 508 00 000',
      time: 'Fre',
      date: 'Fredag',
      duration: '52 sek',
      risk: 'Låg risk',
      score: 9,
      status: 'Tillåtet',
      category: 'Offentlig aktör',
      reason: 'Numret matchade godkänd samhällskontakt.',
      summary: 'Numret fanns i listan över tillåtna samhällskontakter och kopplades vidare.',
      aiDecision: 'Tillåtet utan varning.',
      recommendation: 'Ingen åtgärd behövs.',
      transcript: ['System: Godkänd samhällskontakt.'],
      timeline: [
        { time: '10:19', title: 'Godkänd kontakt', detail: 'Samhällskontakt identifierad.' },
        { time: '10:19', title: 'Vidarekopplat', detail: 'Samtalet släpptes igenom.' }
      ]
    }
  ] as ScamCall[],
  family: [
    { name: 'Anna Svensson', phone: '+46 70 123 45 67', role: 'Primär', alerts: 'SMS + push' },
    { name: 'Erik Svensson', phone: '+46 72 123 46 68', role: 'Sekundär', alerts: 'Push' },
    { name: 'Maria Svensson', phone: '+46 73 456 67 89', role: 'Backup', alerts: 'SMS' }
  ],
  recommendations: [
    'Lägg till ytterligare en anhörig som backup.',
    'Verifiera vårdcentralens nummer i betrodda kontakter.',
    'Testa AI-screeningflödet tillsammans med Ingrid.'
  ]
};
