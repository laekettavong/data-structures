import Node from './Node'
import LinkedList from './LinkedList'

module.exports = class BinaryTree {
    constructor(value) {
        if (typeof value !== 'number') throw new TypeError('Numeric value only')
        this.value = value
        this.left = null
        this.right = null
    }

    insertNode = (value) => {
        if (this.value >= value) {
            if (this.left == null) {
                this.left = new this.constructor(value)
            } else {
                this.left.insertNode(value)
            }
        } else {
            if (this.right == null) {
                this.right = new this.constructor(value)
            } else {
                this.right.insertNode(value)
            }
        }
    }

    contains = (value) => {
        if (this.value == value) {
            return true
        } else if (this.value > value) {
            if (this.left == null) {
                return false
            } else {
                return this.left.contains(value)
            }
        } else {
            if (this.right == null) {
                return false
            } else {
                return this.right.contains(value)
            }
        }
    }

    /* 
    * in-order sequence
    *   1. left side of root
    *   2. root
    *   3. right side of root
    */
    printInOrder = () => {
        if (this.left != null) {
            this.left.printInOrder()
        }
        console.log(this.value)
        if (this.right != null) {
            this.right.printInOrder()
        }
    }

    /* 
    * pre-order sequence
    *   1. root
    *   2. left side of root
    *   3. right side of root
    */
    printPreOrder = () => {
        console.log(this.value)
        if (this.left != null) {
            this.left.printInOrder()
        }

        if (this.right != null) {
            this.right.printInOrder()
        }
    }

    /* 
    * post-order sequence
    *   1. left side of root
    *   3. right side of root
    *   3.root
    */
    printPostOrder = () => {
        if (this.left != null) {
            this.left.printInOrder()
        }

        if (this.right != null) {
            this.right.printInOrder()
        }
        console.log(this.value)
    }

    getValue = () => {
        return this.value
    }

    getLeft = () => {
        return this.left
    }

    getRight = () => {
        return this.right
    }
}