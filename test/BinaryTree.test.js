import { assert, expect } from 'chai'
import sinon from 'sinon'
import BinaryTree from '../src/BinaryTree'

describe('BinaryTree Test', () => {
    let binaryTree
    let spy
    beforeEach(() => {
        spy = sinon.spy(console, 'log')
        binaryTree = new BinaryTree(10)
    })

    afterEach(() => {
        spy.restore()
    })

    it('should return node value of 10', done => {
        assert.equal(10, binaryTree.getValue())
        done()
    })

    it('should return null for both child nodes', done => {
        assert.isNull(binaryTree.getLeft())
        assert.isNull(binaryTree.getRight())
        done()
    })

    it('should return value of 5 for the left child node', done => {
        binaryTree.insertNode(5)
        assert.equal(5, binaryTree.getLeft().getValue())
        done()
    })

    it('should return value of 15 for the right child node', done => {
        binaryTree.insertNode(15)
        assert.equal(15, binaryTree.getRight().getValue())
        done()
    })

    it('should return value of 15, then 13 for left child and 17 for right child', done => {
        binaryTree.insertNode(15)
        binaryTree.insertNode(13)
        binaryTree.insertNode(17)
        assert.equal(15, binaryTree.getRight().getValue())
        assert.equal(13, binaryTree.getRight().getLeft().getValue())
        assert.equal(17, binaryTree.getRight().getRight().getValue())
        done()
    })

    it('should ouput 5 10 15 in separate lines on printInOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.printInOrder()
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(10))
        assert.isTrue(spy.calledWith(15))
        done()
    })


    it('should ouput 10 5 15 in separate lines on printPreOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.printPreOrder()
        assert.isTrue(spy.calledWith(10))
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(15))
        done()
    })

    it('should ouput 5 15 10 in separate lines on printPostOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.printPostOrder()
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(15))
        assert.isTrue(spy.calledWith(10))
        done()
    })

    it('should ouput 3 5 8 10 13 15 17 in separate lines on printInOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.insertNode(8)
        binaryTree.insertNode(3)
        binaryTree.insertNode(17)
        binaryTree.insertNode(13)
        binaryTree.printInOrder()
        assert.isTrue(spy.calledWith(3))
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(8))
        assert.isTrue(spy.calledWith(10))
        assert.isTrue(spy.calledWith(13))
        assert.isTrue(spy.calledWith(15))
        assert.isTrue(spy.calledWith(17))
        done()
    })

    it('should ouput 10 3 5 8 13 15 17 in separate lines on printPreOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.insertNode(8)
        binaryTree.insertNode(3)
        binaryTree.insertNode(17)
        binaryTree.insertNode(13)
        binaryTree.printPreOrder()
        assert.isTrue(spy.calledWith(10))
        assert.isTrue(spy.calledWith(3))
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(8))
        assert.isTrue(spy.calledWith(13))
        assert.isTrue(spy.calledWith(15))
        assert.isTrue(spy.calledWith(17))
        done()
    })

    it('should ouput 3 5 8 13 15 17 10 in separate lines on printPostOrder()', done => {
        binaryTree.insertNode(5)
        binaryTree.insertNode(15)
        binaryTree.insertNode(8)
        binaryTree.insertNode(3)
        binaryTree.insertNode(17)
        binaryTree.insertNode(13)
        binaryTree.printPostOrder()
        assert.isTrue(spy.calledWith(3))
        assert.isTrue(spy.calledWith(5))
        assert.isTrue(spy.calledWith(8))
        assert.isTrue(spy.calledWith(13))
        assert.isTrue(spy.calledWith(15))
        assert.isTrue(spy.calledWith(17))
        assert.isTrue(spy.calledWith(10))
        done()
    })

    it('should node throw \'TypeError\' when non numeric value is passed in', done => {
        assert.throws(() => {
            binaryTree.insertNode('15')
        }, TypeError)
        done()
    })
})