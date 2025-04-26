export default defineEventHandler((event) => {
  console.log('herererere in middleware')
  const memoryUsage = process.memoryUsage();
  // console.log(`[Memory] Heap used: ${(memoryUsage.heapUsed / 1024 / 1024).toFixed(2)} MB`);
});