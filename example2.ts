import { Source, Perceptron } from ".";

const createNetwork = (x1val, x2val) => {
    let x1 = new Source(x1val)
    let x2 = new Source(x2val)

    const p3 = new Perceptron([
        [x1, 1],
        [x2, 1]
    ], -1)

    const p4 = new Perceptron([
        [x1, 1],
        [x2, 1]
    ], -1)

    const p5 = new Perceptron([
        [p3, 1],
        [p4, 1]
    ], -1)

    return p5
}

console.log('i)')
console.log(createNetwork(0, 0).calculate())

console.log('ii)')
console.log(createNetwork(0, 1).calculate())

console.log('iii)')
console.log(createNetwork(1, 0).calculate())

console.log('iv)')
console.log(createNetwork(1, 1).calculate())
