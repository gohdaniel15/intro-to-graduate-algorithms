function fibonacci(n) {
  if (n <= 0) return "Invalid input"
  const fib = [0, 1]
  for (let i=2; i<=n; i++) {
    fib.push(fib[i-1] + fib[i-2])
  }

  return fib[n-1]
}

console.log(fibonacci(0))
console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.time('timer')
console.log(fibonacci(20))
console.timeEnd('timer')