export default async function handler(req, res) {
  // CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'POST only' });

  try {
    const resp = await fetch(
      'https://fxatolhgodoxqjwfphppk.supabase.co/rest/v1/SurveyAnswer',
      {
        method: 'POST',
        headers: {
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4YXRvbGhnZG94cWp3ZnBocHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NTU2ODcsImV4cCI6MjA5NzUzMTY4N30.oSCcN2XK7CHJggNVGh9nTg_SvyiU8WgvElrHJynR8CY',
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4YXRvbGhnZG94cWp3ZnBocHBrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODE5NTU2ODcsImV4cCI6MjA5NzUzMTY4N30.oSCcN2XK7CHJggNVGh9nTg_SvyiU8WgvElrHJynR8CY',
          'Content-Type': 'application/json',
          'Prefer': 'return=minimal',
        },
        body: JSON.stringify(req.body),
      }
    );
    res.status(resp.status).json(await resp.json().catch(() => ({})));
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
}
