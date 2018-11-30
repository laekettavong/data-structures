module.exports = class Node {
    constructor(value) {
        if (typeof value !== 'number') throw new TypeError('Numeric value only')
        this.value = value
        this.next = null
    }

    getValue = () => {
        return this.value
    }

    getNext = () => {
        return this.next
    }

    setNext = (node) => {
        this.next = node
    }
}