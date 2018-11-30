import { assert, expect } from 'chai'
import sinon from 'sinon'
import Node from '../src/GraphNode'

describe('GraphNode Test', () => {
    let spy
    let graph
    let node10
    let node20
    let node30
    let node40
    let node50
    let node60

    beforeEach(() => {
        spy = sinon.spy(console, 'log')
        node10 = new Node(10)
        node20 = new Node(20)
        node30 = new Node(30)
        node40 = new Node(40)
        node50 = new Node(50)
        node60 = new Node(60)
    })

    afterEach(() => {
        spy.restore()
    })

    it('should return 10 for node10', done => {
        assert.equal(10, node10.getValue())
        done()
    })

    it('should ouput \'(10)\' for node10', done => {
        node10.printValue()
        assert.isTrue(spy.calledWith('(10)'))
        done()
    })

    it('should return true for isLinkedTo()', done => {
        node10.linkToNode(node20)
        assert.isTrue(node20.isLinkedTo(node10))
        done()
    })

    it('should return the correct neighbor count', done => {
        assert.equal(0, node10.size())
        node10.linkToNode(node20)
        assert.equal(1, node10.size())
        node10.linkToNode(node30)
        assert.equal(2, node10.size())
        done()
    })

    it('should return the correct neighbor value', done => {
        node10.linkToNode(node20)
        node10.linkToNode(node30)
        assert.equal(20, node10.getLinkedNodes()[0].getValue())
        assert.equal(30, node10.getLinkedNodes()[1].getValue())
        done()
    })

    it('should return false, a node cannot link to itself', done => {
        assert.isFalse(node10.isLinkedTo(node10))
        done()
    })

    it('should return false, a node cannot link to itself', done => {
        node10.linkToNode(node20)
        node10.linkToNode(node30)
        assert.isTrue(node10.isLinkedTo(node20))
        assert.isTrue(node10.isLinkedTo(node30))
        done()
    })

    it('should throw \'Error\' when string type value is passed in', done => {
        assert.throws(() => {
            node1.linkToNode(node1)
        }, Error)
        done()
    })

    it('should return value of 30 for node30', done => {
        node10.linkToNode(node20)
        node10.linkToNode(node30)
        assert.equal(30, node10.getLinkAt(1).getValue())
        done()
    })

    it('should throw \'TypeError\' when number value is not passed in', done => {
        assert.throws(() => {
            node10.linkToNode(node20)
            node10.linkToNode(node30)
            node10.getLinkAt('2')
        }, TypeError)
        done()
    })

    it('should throw \'RangeError\' when invalid look up index is used', done => {
        assert.throws(() => {
            node10.linkToNode(node20)
            node10.linkToNode(node30)
            node10.getLinkAt(4)
        }, RangeError)
        done()
    })
})

