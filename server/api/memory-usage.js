export default defineEventHandler((event) => {
  console.log('herererere')
  const memoryUsage = process.memoryUsage();
  const HEAP_IN_MB =  (memoryUsage.heapUsed / 1024 / 1024).toFixed(2)
  console.log(`[Memory] Heap used: ${HEAP_IN_MB} MB`);
  return HEAP_IN_MB
});