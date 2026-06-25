const json = (data) => new Response(JSON.stringify(data, null, 2), {headers:{'content-type':'application/json; charset=utf-8'}});
const mock = {
  status:{ok:true, version:'0.3.1', name:'ScamGuard Platform'},
  dashboard:{protected:true, screenedToday:3, highRiskToday:0, mediumRiskToday:1, blockedWeek:7, familyActive:3},
  calls:[
    {id:'call_001', time:'08:14', from:'+46 8 12 34 56', label:'Okänt nummer', result:'Godkänd', risk:'Låg', summary:'AI frågade vad samtalet gällde. Personen uppgav vårdcentral och matchade tillåtet mönster.'},
    {id:'call_002', time:'10:42', from:'+46 70 991 44 22', label:'Misstänkt bankärende', result:'Blockerad', risk:'Hög', summary:'Uppringaren bad om BankID och ville skapa tidspress. Anhörig notifierades.'},
    {id:'call_003', time:'Igår', from:'+46 73 555 12 12', label:'Leveransavisering', result:'Screenad', risk:'Medel', summary:'AI bad om ärendenummer. Samtalet släpptes inte vidare utan markerades för granskning.'}
  ],
  family:[{name:'Anna', role:'Dotter', status:'Aktiv'},{name:'Peter', role:'Son', status:'Aktiv'},{name:'Karin', role:'Granne', status:'Backup'}]
};
export default { async fetch(request, env){
  const url = new URL(request.url);
  if(url.pathname === '/api/health') return json(mock.status);
  if(url.pathname === '/api/dashboard') return json(mock.dashboard);
  if(url.pathname === '/api/calls') return json(mock.calls);
  if(url.pathname === '/api/family') return json(mock.family);
  return env.ASSETS.fetch(request);
}};
