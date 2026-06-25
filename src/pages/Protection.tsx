import { useMemo, useState } from 'react';
import { Card, SectionTitle } from '../components/Card';
import { ToggleRow } from '../components/ToggleRow';

type Level = 'Standard' | 'Förstärkt' | 'Max';
type StepId = 'phone' | 'forwarding' | 'family' | 'test';

type ProtectionProps = { data: any };

const steps: { id: StepId; title: string; desc: string }[] = [
  { id: 'phone', title: 'Telefonnummer verifierat', desc: 'Seniorens nummer är kopplat till ScamGuard-kontot.' },
  { id: 'forwarding', title: 'Vidarekoppling aktiverad', desc: 'Okända samtal går till ScamGuard innan de stör senioren.' },
  { id: 'family', title: 'Anhörig tillagd', desc: 'Minst en anhörig får varningar vid hög risk.' },
  { id: 'test', title: 'Skyddet testat', desc: 'Ett testsamtal visar hur AI-screeningen fungerar.' }
];

const levelText: Record<Level, { title: string; desc: string; bullets: string[] }> = {
  Standard: {
    title: 'Standard',
    desc: 'Rekommenderat för de flesta. Okända samtal screenas och tydliga bedrägerier stoppas.',
    bullets: ['Okända samtal screenas', 'Högrisk blockeras', 'Anhörig varnas vid hög risk']
  },
  Förstärkt: {
    title: 'Förstärkt',
    desc: 'Mer försiktig nivå för perioder med många störande samtal eller ökad oro.',
    bullets: ['Alla okända får extra frågor', 'Medelrisk kräver bekräftelse', 'Anhöriga får fler händelser']
  },
  Max: {
    title: 'Max',
    desc: 'Högsta skyddsnivå. Bara betrodda samtal släpps fram direkt.',
    bullets: ['Endast betrodda nummer direkt', 'Alla okända screenas hårt', 'Tyst blockering som standard']
  }
};

export function Protection({ data }: ProtectionProps) {
  const [level, setLevel] = useState<Level>('Standard');
  const [activeOperator, setActiveOperator] = useState('Telia');
  const [completed, setCompleted] = useState<Record<StepId, boolean>>({
    phone: true,
    forwarding: true,
    family: true,
    test: false
  });
  const [testState, setTestState] = useState<'idle' | 'running' | 'done'>('idle');
  const [familyName, setFamilyName] = useState('Anna Svensson');
  const [familyPhone, setFamilyPhone] = useState('+46 70 123 45 67');

  const progress = useMemo(() => Math.round((Object.values(completed).filter(Boolean).length / steps.length) * 100), [completed]);

  const runTest = () => {
    setTestState('running');
    window.setTimeout(() => {
      setTestState('done');
      setCompleted(prev => ({ ...prev, test: true }));
    }, 650);
  };

  return (
    <div className="protectionExperience">
      <Card className="heroCard protectionHero">
        <div className="shieldBig">✓</div>
        <div>
          <p className="eyebrow">Skydd & installation</p>
          <h2>ScamGuard skyddar {data.senior.name}</h2>
          <p>Okända samtal screenas först. Trygga samtal kopplas fram. Riskabla samtal stoppas eller varnar anhöriga.</p>
        </div>
        <button className="primaryButton" onClick={runTest}>Testa skyddet</button>
      </Card>

      <div className="protectionGrid">
        <Card>
          <SectionTitle title="Aktiveringsstatus" action={`${progress}% klart`} />
          <div className="progressTrack"><i style={{ width: `${progress}%` }} /></div>
          <div className="setupSteps">
            {steps.map(step => (
              <button key={step.id} className={completed[step.id] ? 'setupStep done' : 'setupStep'} onClick={() => setCompleted(prev => ({ ...prev, [step.id]: !prev[step.id] }))}>
                <span>{completed[step.id] ? '✓' : '○'}</span>
                <div><b>{step.title}</b><small>{step.desc}</small></div>
              </button>
            ))}
          </div>
        </Card>

        <Card>
          <SectionTitle title="Nuvarande skydd" />
          <div className="protectionStatusList">
            <div><span>Senior</span><b>{data.senior.name}</b><small>{data.senior.phone}</small></div>
            <div><span>Vidarekoppling</span><b>Aktiv</b><small>Okända samtal går via ScamGuard</small></div>
            <div><span>AI-screening</span><b>Redo</b><small>Mockad bedömning i denna release</small></div>
          </div>
        </Card>
      </div>

      <Card>
        <SectionTitle title="Skyddsnivå" action={level} />
        <div className="levelGrid">
          {(Object.keys(levelText) as Level[]).map(item => (
            <button key={item} className={level === item ? 'levelCard active' : 'levelCard'} onClick={() => setLevel(item)}>
              <b>{levelText[item].title}</b>
              <span>{levelText[item].desc}</span>
              <ul>{levelText[item].bullets.map(b => <li key={b}>{b}</li>)}</ul>
            </button>
          ))}
        </div>
      </Card>

      <div className="protectionGrid wideLeft">
        <Card>
          <SectionTitle title="Vidarekoppling till ScamGuard" action="Mock" />
          <p className="mutedText">I den riktiga tjänsten hjälper appen användaren att aktivera villkorad vidarekoppling hos operatören. Här simuleras flödet.</p>
          <div className="operatorTabs">
            {['Telia', 'Tele2', 'Telenor', 'Tre'].map(op => (
              <button key={op} className={activeOperator === op ? 'active' : ''} onClick={() => setActiveOperator(op)}>{op}</button>
            ))}
          </div>
          <div className="guideCard">
            <b>{activeOperator}: aktivera skydd</b>
            <ol>
              <li>Öppna telefonens samtalsinställningar.</li>
              <li>Välj vidarekoppling när samtal inte känns igen eller inte besvaras.</li>
              <li>Ange ScamGuards skyddsnummer: <strong>+46 8 555 010 10</strong>.</li>
              <li>Tryck på “Verifiera” i appen när steget är klart.</li>
            </ol>
            <button className="secondaryButton" onClick={() => setCompleted(prev => ({ ...prev, forwarding: true }))}>Markera som verifierat</button>
          </div>
        </Card>

        <Card>
          <SectionTitle title="Testa ett risksamtal" />
          <div className={testState === 'done' ? 'testCall done' : 'testCall'}>
            <div className="callPulse">☎</div>
            <b>{testState === 'idle' && 'Redo att simulera'}</b>
            <b>{testState === 'running' && 'AI screenar samtalet…'}</b>
            <b>{testState === 'done' && 'Bedrägeriförsök stoppat'}</b>
            <span>{testState === 'done' ? 'Uppringaren bad om BankID och klassades som hög risk. Anhörigvarning skickades.' : 'Simulerar hur ett okänt samtal hanteras innan senioren störs.'}</span>
            <button className="primaryButton" onClick={runTest}>{testState === 'done' ? 'Kör igen' : 'Starta test'}</button>
          </div>
        </Card>
      </div>

      <div className="protectionGrid">
        <Card>
          <SectionTitle title="Anhörig som varnas" />
          <div className="mockForm">
            <label>Namn<input value={familyName} onChange={e => setFamilyName(e.target.value)} /></label>
            <label>Telefon<input value={familyPhone} onChange={e => setFamilyPhone(e.target.value)} /></label>
            <button className="secondaryButton" onClick={() => setCompleted(prev => ({ ...prev, family: true }))}>Spara anhörig</button>
          </div>
        </Card>

        <Card>
          <SectionTitle title="Regler & undantag" />
          <ToggleRow label="Släpp igenom vård och omsorg" desc="Verifierade vårdnummer kopplas fram direkt." />
          <ToggleRow label="Tillåt alla kontakter" desc="Personer i kontaktlistan screenas inte i normalläget." />
          <ToggleRow label="Blockera bankärenden från okända" desc="Okända som säger bank, polis eller BankID klassas extra hårt." />
          <ToggleRow label="Tyst läge nattetid" desc="Högrisk blockeras utan att störa senioren." />
        </Card>
      </div>
    </div>
  );
}
