import { Source, Perceptron } from ".";

const createNetwork = (x1val, x2val) => {
    const x1 = new Source(x1val)
    const x2 = new Source(x2val)

    return new Perceptron([
        [x1, 0.3],
        [x2, 0.3]
    ], -0.5, (val) => {
        return val <= 0 ? 0 : 1
    })
}

console.log('i)')
console.log(createNetwork(0, 0).calculate())

console.log('ii)')
console.log(createNetwork(0, 1).calculate())

console.log('i)')
console.log(createNetwork(1, 0).calculate())

console.log('ii)')
console.log(createNetwork(1, 1).calculate())