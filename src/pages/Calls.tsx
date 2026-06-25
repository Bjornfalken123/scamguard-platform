import { Card, SectionTitle } from '../components/Card';
import { CallCard } from '../components/CallCard';

export function Calls({ data }: { data: any }) {
  return <Card><SectionTitle title="Samtalshistorik" action="Filtrera" /><div className="tabs"><button>Alla</button><button>Screenade</button><button>Blockerade</button><button>Varningar</button></div><div className="stack">{data.calls.map((c: any) => <CallCard key={c.id} call={c} />)}</div></Card>;
}
