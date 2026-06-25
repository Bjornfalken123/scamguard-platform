export function riskClass(risk: string) {
  const value = risk.toLowerCase();
  if (value.includes('hög')) return 'riskHigh';
  if (value.includes('medel')) return 'riskMedium';
  return 'riskLow';
}
