// Your CryptoCompare API key
export const apiKey =
  "c90f7879c4934b4c9eb2c37e58b667599b50dbaca2cabc96e81a6f991a8eb281";

// Makes requests to CryptoCompare API
export async function makeApiRequest(path: string) {
  try {
    const url = new URL(`https://min-api.cryptocompare.com/${path}`);
    url.searchParams.append("api_key", apiKey);
    const response = await fetch(url.toString());
    return response.json();
  } catch (error: any) {
    throw new Error(`CryptoCompare request error: ${error.status}`);
  }
}

// Generates a symbol ID from a pair of the coins
export function generateSymbol(
  exchange: string,
  fromSymbol: string,
  toSymbol: string
) {
  const short = `${fromSymbol}/${toSymbol}`;
  return {
    short,
  };
}

// Returns all parts of the symbol
export function parseFullSymbol(fullSymbol: string) {
  const match = fullSymbol.match(/^(\w+):(\w+)\/(\w+)$/);

  if (!match) {
    return null;
  }
  return { exchange: match[1], fromSymbol: match[2], toSymbol: match[3] };
}
