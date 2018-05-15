
export class Source {
    value = 0

    constructor(value) {
        this.value = value
    }

    calculate() {
        return this.value
    }
}

export class Perceptron {

    inputs = [];
    bias = 0;
    thresholdFunc;

    constructor(inputs, bias, thresholdFunc = (val) => val) {
        this.inputs = inputs
        this.bias = bias
        this.thresholdFunc = thresholdFunc
    }

    calculate() {
        const weightedValues = this.inputs.map(([input, weight]) => {
            return input.calculate() * weight
        })

        const summed = weightedValues.reduce((prev, current) => {
            return prev + current
        }, 0)

        return this.thresholdFunc(summed + this.bias)
    }
}
