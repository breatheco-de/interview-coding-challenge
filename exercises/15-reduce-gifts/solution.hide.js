function reduceGifts(prices = [], k = 3, threshold = 14) {
  if (k <= 0 || prices.length < k) return 0;

  const arr = [...prices];
  let removed = 0;

  while (true) {
    let changed = false;

    for (let i = 0; i <= arr.length - k; i++) {
      const window = arr.slice(i, i + k);
      const sum = window.reduce((acc, n) => acc + n, 0);

      if (sum > threshold) {
        const maxValue = Math.max(...window);
        const idx = i + window.indexOf(maxValue);
        arr.splice(idx, 1);
        removed += 1;
        changed = true;
        break;
      }
    }

    if (!changed || arr.length < k) break;
  }

  return removed;
}

const input = { prices: [3, 2, 1, 4, 6, 5], k: 3, threshold: 14 };
console.log(reduceGifts(input.prices, input.k, input.threshold));
