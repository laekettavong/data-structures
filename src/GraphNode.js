module.exports = class Node {
    constructor(value) {
        this.value = value
        this.neighbors = []
    }

    getValue = () => {
        return this.value
    }

    getLinkedNodes = () => {
        return this.neighbors
    }

    size = () => {
        return this.neighbors.length
    }

    isLinkedTo = (node) => {
        if (node.getValue() === this.value) return false
        let result = this.neighbors.find(elem => {
            return elem.getValue() === node.getValue()
        }) ? true : false

        if (!result) {
            result = node.getLinkedNodes().find(elem => {
                return elem.getValue() === this.value
            }) ? true : false
        }
        return result
    }

    linkToNode = (node) => {
        if (node.getValue() === this.value) throw new Error('A node cannot link to itself')
        this.neighbors.push(node)
    }

    getLinkAt = (linkIndex) => {
        if (typeof linkIndex !== 'number') throw new TypeError('Numeric value only')
        if (linkIndex < 0 || linkIndex > this.neighbors.length) throw new RangeError('Invalid index range')
        return this.neighbors[linkIndex]
    }

    printValue = () => {
        console.log(`(${this.value})`)
    }

    toString = () => {
        let output = `(${this.value})`
        this.neighbors.forEach((node, idx) => {
            if (idx === 0) output += `--`
            output += `(${node.getValue()})`
        })
        return output
    }
}
