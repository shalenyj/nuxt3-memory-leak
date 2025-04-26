const BASE_URL = 'http://localhost:3000';

const urls = [
  `${BASE_URL}`,
  `${BASE_URL}/post/2`,
];

async function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchWithInterval(url, count, intervalMs) {
  for (let i = 0; i < count; i++) {
    try {
      await fetch(url);
    } catch (err) {
      console.error(`[${url}] Request ${i + 1}: Error`, err);
    }
    await delay(intervalMs);
  }
}

const getMemoryUsage = async () => {
  const res = await fetch(`${BASE_URL}/api/memory-usage`);
  const data = await res.json();
  console.log('Memory usage:', data);
};

async function main() {
  await getMemoryUsage();
  for (const url of urls) {
    console.log(`\nStarting requests for ${url}`);
    await fetchWithInterval(url, 50, 200);

    await delay(5000);
    console.log(`Fetching memory usage after ${url}...`);
    try {
      await getMemoryUsage();
    } catch (err) {
      console.error('Failed to fetch memory usage:', err);
    }
  }
}

main();
