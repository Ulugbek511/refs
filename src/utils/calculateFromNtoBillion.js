export function calculateFromNtoBillion(n) {
    let sum = n;
    for (let i = 1; i <= 1000000; i++) {
      sum += i;
    }
    return sum;
  }
  