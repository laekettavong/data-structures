import Node from './Node'

module.exports = class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.count = 0
    }

    getHead = () => {
        return this.head
    }

    getTail = () => {
        return this.tail
    }

    isEmpty = () => {
        return this.head == null
    }

    peek = () => {
        return this.head != null ? this.head.getValue() : null
    }

    addNode = (value) => {
        const node = new Node(value)
        if (this.tail != null) {
            this.tail.setNext(node)
        }
        this.tail = node
        if (this.head == null) {
            this.head = node
        }
        this.count++
    }

    removeNode = () => {
        const value = this.head.getValue()
        const node = this.head.getNext()
        this.head = node
        if (this.head == null) {
            this.tail = null
        }
        this.count--
        return value
    }

    getNodeCount = () => {
        return this.count
    }

    toString() {
        let current = this.head
        let output = '';
        while (current != null) {
            output += `[${current.getValue()}]`
            current = current.getNext()
            if (current != null) {
                output += `-`
            }
        }
        return output
    }

}