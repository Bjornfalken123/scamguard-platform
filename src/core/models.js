export const riskLevels = [
  { id: 'low', label: 'Låg', tone: 'green', description: 'Samtalet verkar tryggt.' },
  { id: 'medium', label: 'Medel', tone: 'amber', description: 'AI rekommenderar försiktighet.' },
  { id: 'high', label: 'Hög', tone: 'red', description: 'Samtalet matchar bedrägerimönster.' },
  { id: 'critical', label: 'Kritisk', tone: 'red', description: 'Samtalet ska stoppas och anhörig notifieras.' }
];

export const modules = [
  { id: 'protection', name: 'Protection Engine', state: 'ready', purpose: 'Regler, skyddsnivåer och vidarekoppling.' },
  { id: 'calls', name: 'Call Intelligence', state: 'ready', purpose: 'Samtalshistorik, risk och AI-beslut.' },
  { id: 'family', name: 'Family Hub', state: 'ready', purpose: 'Anhöriga, roller och notifieringar.' },
  { id: 'reports', name: 'Reports Engine', state: 'planned', purpose: 'Bevis på trygghet över tid.' },
  { id: 'trust', name: 'Trust Center', state: 'planned', purpose: 'Transparens, dataskydd och AI-förklaringar.' },
  { id: 'telephony', name: 'Telephony Adapter', state: 'mock', purpose: 'Förberett för Twilio, Sinch eller Telnyx.' },
  { id: 'ai', name: 'AI Adapter', state: 'mock', purpose: 'Förberett för framtida AI-leverantör.' }
];
