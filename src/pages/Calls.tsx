import { useMemo, useState } from 'react';
import { Card, SectionTitle } from '../components/Card';
import { RiskBadge } from '../components/RiskBadge';
import type { ScamCall } from '../data/mockData';

type FilterId = 'Alla' | 'Blockerade' | 'Tillåtna' | 'Varningar' | 'Granskning';

const filters: FilterId[] = ['Alla', 'Blockerade', 'Tillåtna', 'Varningar', 'Granskning'];

function statusClass(status: string) {
  if (status === 'Blockerat') return 'danger';
  if (status === 'Varning skickad' || status === 'Under granskning') return 'warning';
  return 'success';
}

function matchesFilter(call: ScamCall, filter: FilterId) {
  if (filter === 'Alla') return true;
  if (filter === 'Blockerade') return call.status === 'Blockerat';
  if (filter === 'Tillåtna') return call.status === 'Tillåtet' || call.status === 'Vidarekopplat';
  if (filter === 'Varningar') return call.status === 'Varning skickad';
  return call.status === 'Under granskning';
}

function CallRow({ call, selected, onSelect }: { call: ScamCall; selected: boolean; onSelect: () => void }) {
  return (
    <button className={`callListItem ${selected ? 'selected' : ''}`} onClick={onSelect}>
      <div className={`callStatusDot ${statusClass(call.status)}`}></div>
      <div className="callListMain">
        <div className="callListTop"><b>{call.title}</b><span>{call.time}</span></div>
        <div className="callListMeta"><span>{call.number}</span><span>{call.category}</span></div>
        <p>{call.reason}</p>
      </div>
      <div className="callListRight"><RiskBadge risk={call.risk} /><strong>{call.score}</strong></div>
    </button>
  );
}

function Timeline({ call }: { call: ScamCall }) {
  return (
    <div className="timeline">
      {call.timeline.map((event, index) => (
        <div className="timelineItem" key={`${call.id}-${index}`}>
          <div className="timelineTime">{event.time}</div>
          <div className="timelineLine"><span></span></div>
          <div><b>{event.title}</b><p>{event.detail}</p></div>
        </div>
      ))}
    </div>
  );
}

function CallDetail({ call }: { call: ScamCall }) {
  return (
    <div className="detailPanel">
      <div className="detailHero">
        <div>
          <span className="eyebrow">AI-bedömning</span>
          <h2>{call.status}</h2>
          <p>{call.summary}</p>
        </div>
        <div className={`scoreRing ${call.risk.includes('Hög') ? 'high' : call.risk.includes('Medel') ? 'medium' : 'low'}`}>
          <strong>{call.score}</strong><span>risk</span>
        </div>
      </div>

      <div className="detailGrid">
        <div className="miniInfo"><span>Nummer</span><b>{call.number}</b></div>
        <div className="miniInfo"><span>Tid</span><b>{call.date}, {call.time}</b></div>
        <div className="miniInfo"><span>Längd</span><b>{call.duration}</b></div>
        <div className="miniInfo"><span>Kategori</span><b>{call.category}</b></div>
      </div>

      <Card className="insetCard">
        <SectionTitle title="Vad AI:n gjorde" />
        <p className="detailText"><b>{call.aiDecision}</b></p>
        <p className="detailText mutedText">{call.recommendation}</p>
      </Card>

      <Card className="insetCard">
        <SectionTitle title="Händelseförlopp" />
        <Timeline call={call} />
      </Card>

      <Card className="insetCard">
        <SectionTitle title="Kort transkript" action="Mock" />
        <div className="transcriptBox">
          {call.transcript.map((line, index) => <p key={index}>{line}</p>)}
        </div>
      </Card>

      <div className="actionBar">
        <button className="primaryButton">Lägg till regel</button>
        <button className="secondaryButton flush">Markera som tryggt</button>
      </div>
    </div>
  );
}

export function Calls({ data }: { data: any }) {
  const calls = data.calls as ScamCall[];
  const [filter, setFilter] = useState<FilterId>('Alla');
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(calls[0]?.id ?? 0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return calls.filter(call => matchesFilter(call, filter)).filter(call => {
      if (!q) return true;
      return [call.title, call.number, call.category, call.reason, call.status].join(' ').toLowerCase().includes(q);
    });
  }, [calls, filter, query]);

  const selected = calls.find(call => call.id === selectedId) ?? filtered[0] ?? calls[0];

  const counts = {
    total: calls.length,
    blocked: calls.filter(call => call.status === 'Blockerat').length,
    warnings: calls.filter(call => call.status === 'Varning skickad').length,
    allowed: calls.filter(call => call.status === 'Tillåtet' || call.status === 'Vidarekopplat').length
  };

  return (
    <div className="callsExperience">
      <div className="callsHeader card">
        <div>
          <span className="eyebrow">Calls Experience</span>
          <h2>Samtalshistorik</h2>
          <p>Alla okända samtal screenas först av ScamGuard. Här syns vad som hände, varför AI:n tog beslutet och om anhörig notifierades.</p>
        </div>
        <div className="callsSummary">
          <div><strong>{counts.total}</strong><span>screenade</span></div>
          <div><strong>{counts.blocked}</strong><span>blockerade</span></div>
          <div><strong>{counts.warnings}</strong><span>varningar</span></div>
          <div><strong>{counts.allowed}</strong><span>tillåtna</span></div>
        </div>
      </div>

      <div className="callsLayout">
        <Card className="callsListPanel">
          <div className="callsToolbar">
            <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Sök nummer, kategori eller beslut" />
          </div>
          <div className="tabs stickyTabs">
            {filters.map(item => <button key={item} className={filter === item ? 'active' : ''} onClick={() => setFilter(item)}>{item}</button>)}
          </div>
          <div className="stack">
            {filtered.map(call => <CallRow key={call.id} call={call} selected={call.id === selected.id} onSelect={() => setSelectedId(call.id)} />)}
            {filtered.length === 0 && <div className="emptyState"><b>Inga samtal matchar filtret.</b><span>Prova att ändra sökningen eller välj Alla.</span></div>}
          </div>
        </Card>
        {selected && <CallDetail call={selected} />}
      </div>
    </div>
  );
}
