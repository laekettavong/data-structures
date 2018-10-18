const Node = require('./Node')

module.exports = class LinkedList {
    constructor(value, allowDuplicates) {
        this.head = new Node(value)
        // allow duplicate values by default
        this.isAllowDuplicates = allowDuplicates != null && typeof allowDuplicates == 'boolean' ? allowDuplicates : true
    }

    getHead = () => {
        return this.head
    }

    addNode = (value) => {
        if (this.head == null) {
            this.head = new Node(value)
            return
        }

        if (!this.isAllowDuplicates && this.hasValue(value)) {
            return
        }

        let current = this.head;
        while (current.getNext() != null) {
            current = current.getNext()
        }
        current.setNext(new Node(value))
    }

    setNewHead = (value) => {
        const newHead = new Node(value)
        if (this.head == null) {
            this.head = newHead
            return
        }
        newHead.setNext(this.head)
        this.head = newHead
    }

    deleteNode = (value) => {
        if (this.head == null) return

        if (this.head.getValue() === value) {
            this.head = this.head.getNext()
            return
        }

        let current = this.head
        while (current.getNext() != null) {
            if (current.getNext().getValue() == value) {
                current.setNext(current.getNext().getNext())
                return
            }
            current = current.getNext()
        }
    }

    hasValue = (value) => {
        let current = this.head
        while (current != null) {
            if (current.getValue() === value) return true
            current = current.getNext()
        }

        return false
    }

    removeDuplicates = () => {
        if (this.head == null) return
        const values = []
        let current = this.head
        let prev = this.head
        while (current != null) {
            if (!values.includes(current.getValue())) {
                values.push(current.getValue())
                prev = current
                current = current.getNext()
            } else {
                this.deleteNode(current.getValue())
                current = prev.getNext().getNext()
            }
        }
    }

    getNodeCount = () => {
        let count = 0;
        if (this.head == null) return count
        let current = this.head
        while (current != null) {
            count++
            current = current.getNext()
        }
        return count
    }

    toString() {
        let current = this.head
        let output = '';
        while (current != null) {
            output += `[${current.getValue()}]`
            current = current.getNext()
            if (current != null) {
                output += `*-->`
            }
        }
        return output
    }
}