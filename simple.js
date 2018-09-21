// 求最大公约数
const gcd = (p, q) => {
    if (q === 0) return p
    const r = p%q
    return gcd(q, r)
}


// 求开方
const square = c => {
    let t = c
    let s = 0.0001
    while(Math.abs(t*t - c) > s) {
        t = t - (t*t - c)/2/t
    }
    return t
}

const logN = (n) => {
    if (n === 0 || n === 1) {
        return 0
    }
    return logN(n-1) + Math.log(n)
}


/**
 * 二项分布概率
 * @param {int} N 试验次数
 * @param {int} k 事件发生的次数
 * @param {double} p 事件发生的概率
 */
let count = 0
let result = {}

const binomial = (N, k, p) => {
  ++count
  if (N === 0 && k ===0) return 1.0
  if (N < 0 || k < 0) return 0.0
  if (!result[`N-${N}k-${k}`]) {
    result[`N-${N}k-${k}`] = (1.0 - p)*binomial(N-1, k, p) + p*binomial(N-1, k-1, p)
  }
  return result[`N-${N}k-${k}`]

    // return (1.0 - p)*binomial(N-1, k, p) + p*binomial(N-1, k-1, p)
}

console.log("---", binomial(10, 5, 0.25))
console.log(count)
console.log(result)
