
function isPrime(num){
    if (num < 2){
        return false;
    }
    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}

function countPrimeNumbers() {
    let n = 2
    let j = 100;
    let count = 0
    while (n < j) {
        if (isPrime(n)){
            count++;
        }
    n ++;
    }
    
    return count
}
const t0 = performance.now()
setTimeout(() => {
    for(let i = 0; i<100 ; i++){
        console.log(i);
        countPrimeNumbers()
}

}, 0);
const t1 = performance.now()

const t = t1 - t0;
console.log(`Execution time of printing countPrimeNumbers was ${t} milliseconds.`);
