// Two anchors: Nigeria (the launch market) is priced at ₦3,000/month and
// ₦25,000/year. International pricing is anchored on USD $5/month and $20/year,
// and every other currency is that USD price converted at prevailing rates and
// rounded to a friendly local figure. Adjust here if exchange rates drift.
export const CURRENCIES = {
  NGN: { symbol: '₦', label: '₦ NGN', monthly: 3000, yearly: 25000 },
  USD: { symbol: '$', label: '$ USD', monthly: 5, yearly: 20 },
  GBP: { symbol: '£', label: '£ GBP', monthly: 4, yearly: 16 },
  EUR: { symbol: '€', label: '€ EUR', monthly: 4.5, yearly: 18 },
  GHS: { symbol: 'GH₵', label: '₵ GHS', monthly: 75, yearly: 300 },
  KES: { symbol: 'KSh ', label: 'KSh KES', monthly: 650, yearly: 2600 },
  ZAR: { symbol: 'R', label: 'R ZAR', monthly: 90, yearly: 360 },
};

const EUROZONE = ['AT','BE','CY','DE','EE','ES','FI','FR','GR','HR','IE','IT','LT','LU','LV','MT','NL','PT','SI','SK'];

export function countryToCurrency(cc) {
  if (!cc) return null;
  const map = { NG: 'NGN', US: 'USD', GB: 'GBP', GH: 'GHS', KE: 'KES', ZA: 'ZAR' };
  if (map[cc]) return map[cc];
  if (EUROZONE.includes(cc)) return 'EUR';
  return 'USD';
}

const TZ_HINTS = {
  'Africa/Lagos': 'NGN',
  'Africa/Accra': 'GHS',
  'Africa/Nairobi': 'KES',
  'Africa/Johannesburg': 'ZAR',
  'Europe/London': 'GBP',
};

// Best-effort, client-side only: IP lookup first, then timezone, then locale.
export async function detectCurrencyCode() {
  try {
    const res = await fetch('https://ipapi.co/json/', { signal: AbortSignal.timeout(4000) });
    const j = await res.json();
    if (j && j.country_code) return countryToCurrency(j.country_code);
  } catch {}
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    if (TZ_HINTS[tz]) return TZ_HINTS[tz];
  } catch {}
  try {
    const region = new Intl.Locale(navigator.language).maximize().region;
    if (region) return countryToCurrency(region);
  } catch {}
  return 'USD';
}

const fmt = (n) => {
  const r = Math.round(n * 100) / 100;
  if (r >= 100) return Math.round(r).toLocaleString('en-US');
  return Number.isInteger(r) ? String(r) : r.toFixed(2);
};

export function priceStrings(code) {
  const c = CURRENCIES[code] || CURRENCIES.USD;
  const permo = c.yearly / 12;
  const save = Math.round((1 - c.yearly / (12 * c.monthly)) * 100);
  return {
    code,
    symbol: c.symbol,
    monthly: fmt(c.monthly),
    yearly: fmt(c.yearly),
    permo: `${c.symbol}${fmt(permo)}/mo`,
    save: `${save}%`,
  };
}
