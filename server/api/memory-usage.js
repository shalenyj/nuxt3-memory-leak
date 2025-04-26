export default defineEventHandler(() => {
  const memoryUsage = process.memoryUsage();
  const HEAP_IN_MB = (memoryUsage.heapUsed / 1024 / 1024).toFixed(2);

  return HEAP_IN_MB;
});