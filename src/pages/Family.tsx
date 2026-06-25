import { useMemo, useState } from 'react';
import { Card, SectionTitle } from '../components/Card';
import { ToggleRow } from '../components/ToggleRow';

type FamilyMember = {
  id: number;
  name: string;
  phone: string;
  email: string;
  relation: string;
  role: string;
  priority: number;
  status: string;
  alerts: string;
  responseTime: string;
  lastSeen: string;
  permissions: string[];
  notificationRules: { high: boolean; medium: boolean; low: boolean; weekly: boolean };
};

function initials(name: string) {
  return name.split(' ').map(part => part[0]).join('').slice(0, 2).toUpperCase();
}

function statusTone(status: string) {
  return status === 'Aktiv' ? 'success' : 'warning';
}

function MemberCard({ member, selected, onSelect }: { member: FamilyMember; selected: boolean; onSelect: () => void }) {
  return (
    <button className={`familyMemberCard ${selected ? 'selected' : ''}`} onClick={onSelect}>
      <div className="avatar largeAvatar">{initials(member.name)}</div>
      <div className="familyMemberText">
        <div className="familyMemberTop"><b>{member.name}</b><span className={`miniBadge ${statusTone(member.status)}`}>{member.status}</span></div>
        <span>{member.relation} · {member.role}</span>
        <small>Prioritet {member.priority} · {member.alerts}</small>
      </div>
    </button>
  );
}

function PermissionPills({ items }: { items: string[] }) {
  return <div className="pillRow">{items.map(item => <span key={item}>{item}</span>)}</div>;
}

function AddRelativeMock() {
  const [step, setStep] = useState(1);
  const steps = [
    { title: 'Kontaktuppgifter', text: 'Ange namn, relation och telefonnummer till personen som ska kunna få varningar.' },
    { title: 'Välj roll', text: 'Primär anhörig får alltid hög risk först. Backup får bara varning om primär inte svarar.' },
    { title: 'Skicka inbjudan', text: 'ScamGuard skickar en trygg och enkel inbjudan med förklaring av vad rollen innebär.' }
  ];
  return (
    <Card className="inviteFlowCard">
      <SectionTitle title="Lägg till anhörig" action="Mockflöde" />
      <div className="stepper">{steps.map((s, i) => <button key={s.title} className={step === i + 1 ? 'active' : ''} onClick={() => setStep(i + 1)}>{i + 1}</button>)}</div>
      <div className="mockForm">
        <span className="eyebrow">Steg {step} av 3</span>
        <h3>{steps[step - 1].title}</h3>
        <p>{steps[step - 1].text}</p>
        {step === 1 && <div className="formGrid"><label>Namn<input value="Karin Falk" readOnly /></label><label>Relation<input value="Dotter" readOnly /></label><label>Telefon<input value="+46 70 555 18 22" readOnly /></label></div>}
        {step === 2 && <div className="roleOptions"><button className="selected"><b>Primär anhörig</b><span>Får hög risk direkt</span></button><button><b>Anhörig</b><span>Får rapporter och valda varningar</span></button><button><b>Observatör</b><span>Kan följa historik utan att ändra skydd</span></button></div>}
        {step === 3 && <div className="invitePreview"><b>Förhandsvisning</b><p>Hej Karin. Du har blivit inbjuden att hjälpa till att skydda Ingrid med ScamGuard. Du får bara varningar när något verkar riskfyllt.</p></div>}
      </div>
      <div className="actionBar"><button className="primaryButton" onClick={() => setStep(Math.min(3, step + 1))}>{step === 3 ? 'Skicka inbjudan' : 'Nästa steg'}</button><button className="secondaryButton flush" onClick={() => setStep(1)}>Börja om</button></div>
    </Card>
  );
}

function FamilyTimeline({ events }: { events: any[] }) {
  return <Card><SectionTitle title="Familjehändelser" />
    <div className="familyTimeline">
      {events.map(event => <div className={`familyTimelineItem ${event.type}`} key={event.id}><span>{event.time}</span><div><b>{event.title}</b><p>{event.detail}</p></div></div>)}
    </div>
  </Card>;
}

export function Family({ data }: { data: any }) {
  const family = data.family as FamilyMember[];
  const [selectedId, setSelectedId] = useState(family[0]?.id ?? 0);
  const selected = useMemo(() => family.find(member => member.id === selectedId) ?? family[0], [family, selectedId]);

  return (
    <div className="familyExperience">
      <div className="familyHero card">
        <div>
          <span className="eyebrow">Family Experience v0.7.0</span>
          <h2>Familjen ser det viktiga. ScamGuard sköter resten.</h2>
          <p>Anhöriga får bara varningar när det behövs. Senioren slipper teknik, stress och onödiga notiser.</p>
        </div>
        <div className="familyHeroStats">
          <div><strong>{family.filter(f => f.status === 'Aktiv').length}</strong><span>aktiva</span></div>
          <div><strong>{data.metrics.familyAlerts}</strong><span>varningar</span></div>
          <div><strong>2 min</strong><span>snabbast svar</span></div>
        </div>
      </div>

      <div className="familyGrid">
        <div className="familyLeft">
          <Card>
            <SectionTitle title="Anhöriga" action="Prioritet" />
            <div className="familyMembersStack">
              {family.map(member => <MemberCard key={member.id} member={member} selected={selected.id === member.id} onSelect={() => setSelectedId(member.id)} />)}
            </div>
          </Card>
          <FamilyTimeline events={data.familyEvents} />
        </div>

        <div className="familyRight">
          <Card className="memberDetailCard">
            <div className="memberDetailHeader">
              <div className="avatar xlAvatar">{initials(selected.name)}</div>
              <div><span className="eyebrow">Vald anhörig</span><h2>{selected.name}</h2><p>{selected.relation} · {selected.role}</p></div>
              <span className={`miniBadge ${statusTone(selected.status)}`}>{selected.status}</span>
            </div>
            <div className="detailGrid familyDetailGrid">
              <div className="miniInfo"><span>Telefon</span><b>{selected.phone}</b></div>
              <div className="miniInfo"><span>E-post</span><b>{selected.email}</b></div>
              <div className="miniInfo"><span>Svarstid</span><b>{selected.responseTime}</b></div>
              <div className="miniInfo"><span>Senast aktiv</span><b>{selected.lastSeen}</b></div>
            </div>
            <SectionTitle title="Behörigheter" />
            <PermissionPills items={selected.permissions} />
          </Card>

          <Card>
            <SectionTitle title="Notifieringar" />
            <ToggleRow label="Hög risk" desc="Skickas alltid direkt till prioriterad anhörig." on={selected.notificationRules.high} />
            <ToggleRow label="Medelrisk" desc="Skickas när samtalet bör följas upp." on={selected.notificationRules.medium} />
            <ToggleRow label="Låg risk" desc="Visas normalt bara i historiken." on={selected.notificationRules.low} />
            <ToggleRow label="Veckorapport" desc="Sammanfattning av skyddet varje söndag." on={selected.notificationRules.weekly} />
          </Card>
        </div>
      </div>

      <AddRelativeMock />
    </div>
  );
}
