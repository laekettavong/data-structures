import Node from './Node'

const removeDuplicates = Symbol('removeDuplicates');

module.exports = class LinkedList {
    constructor(value, allowDuplicates) {
        this.head = new Node(value)
        // allow duplicate values by default
        this.isAllowDuplicates = allowDuplicates != null && typeof allowDuplicates == 'boolean' ? allowDuplicates : true
    }

    /***** PRIVATE FUNCTIONS *****/
    [removeDuplicates] = () => {
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
        return values
    }

    /***** PUBLIC FUNCTIONS *****/
    getHead = () => {
        return this.head
    }

    addNode = (value) => {
        if (this.head == null) {
            this.head = new Node(value)
            return
        }

        if (!this.isAllowDuplicates && this.contains(value)) {
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

    contains = (value) => {
        let current = this.head
        while (current != null) {
            if (current.getValue() === value) return true
            current = current.getNext()
        }
        return false
    }

    getNodeValues = () => {
        const values = []
        if (this.head == null) return values
        let current = this.head
        while (current != null) {
            values.push(current.getValue())
            current = current.getNext()
        }
        return values
    }

    getValueArray = () => {
        return this.isAllowDuplicates ? this.getNodeValues() : this[removeDuplicates]()
    }

    sortAscending = () => {
        this.sort(this.getValueArray().sort((a, b) => a - b))
    }

    sortDescending = () => {
        this.sort(this.getValueArray().sort((a, b) => b - a))
    }

    sort = (values) => {
        this.head = new Node(values.shift())
        let current = this.head
        values.forEach(value => {
            current.setNext(new Node(value))
            current = current.getNext()
        })
    }

    getNodeCount = () => {
        let count = 0;
        if (this.head == null) return count
        let current = this.head
        while (current != null) {
            current = current.getNext()
            count++
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