function lis(arr) {
  let sequences = Array(arr.length).fill(1)

  for (let i=1; i<arr.length; i++) {
    for (let j=0; j<i; j++) {
      if ( (arr[j] < arr[i]) && (sequences[i] < sequences[j] + 1) ) {
        sequences[i] = sequences[j] + 1
      }
    }
  }

  return Math.max(...sequences)
}

const arr = [5,7,4,-3,9,1,10,4,5,8,9,3]
const arr2 = [-1,3,4,5,2,2,2,2]
const arr3 = [3,2,6,4,5,1]

console.log(lis(arr))
console.log(lis(arr2))
console.log(lis(arr3))