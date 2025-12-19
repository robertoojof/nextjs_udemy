export async function simulateDelay(
  delayMs: number,
  verbose: boolean = false,
): Promise<void> {
  if (delayMs <= 0) return;

  return new Promise<void>(resolve => {
    setTimeout(() => {
      if (verbose) {
        console.log(`Simulated delay of ${delayMs}ms`);
      }
      resolve();
    }, delayMs);
  });
}
