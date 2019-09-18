function fibonacci(n) {
  if (n <= 0) return "Invalid input"
  if (n === 1) return 0
  if (n === 2) return 1
  return (fibonacci(n-1) + fibonacci(n-2))
}

console.time('timer')
console.log(fibonacci(20))
console.timeEnd('timer')