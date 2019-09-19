function lis(arr) {
    let mainLen;

    for (let i=0; i<arr.length; i++) {
        mainLen = 1
        console.log(`i: ${arr[i]}`)
        for (let j=0; j<i; j++) {
            console.log(`j: ${arr[j]}`)
            if (arr[j] < arr[i]) { 
                let newLen = mainLen + 1 
                if (mainLen < newLen) { mainLen = newLen }
                console.log(`mainLen: ${mainLen}`)
            }
        }
    }

    return mainLen
}

arr = [5,7,4,-3,9,1,10,4,5,8,9,3]
console.log(lis(arr))