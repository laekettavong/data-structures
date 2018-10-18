module.exports = class Node {
    constructor(value) {
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