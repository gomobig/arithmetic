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



const checkPhone = (phone) => {
    console.log(phone)
    var reg = /^1[0-9]{10}$/
    return reg.test(phone)
}

console.log(checkPhone(151))
console.log(checkPhone(25158114927))
console.log(checkPhone(151581149271))
console.log(checkPhone(1234567890))
console.log(checkPhone(15158114927))