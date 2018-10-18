import Node from './Node'

module.exports = class Queue {
    constructor() {
        this.top = null;
        this.count = 0
    }

    getTop = () => {
        return this.top
    }

    isEmpty = () => {
        return this.top == null;
    }

    peek = () => {
        return this.top != null ? this.top.getValue() : null
    }

    pushNode = (value) => {
        const node = new Node(value)
        node.setNext(this.top)
        this.top = node
        this.count++
    }

    popNode = () => {
        const value = this.top.getValue()
        this.top = this.top.getNext()
        this.count--
        return value
    }

    getNodeCount = () => {
        return this.count
    }

    toString() {
        let current = this.top
        let output = '';
        while (current != null) {
            output += `[${current.getValue()}]\n`
            current = current.getNext()
        }
        return output
    }
}
