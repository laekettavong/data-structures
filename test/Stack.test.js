import { assert, expect } from 'chai'
import Stack from '../src/Stack'

describe('Stack Test', () => {
    let stack;
    beforeEach(() => {
        stack = new Stack();
    })

    it('should return 4 nodes in stack', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        stack.pushNode(30)
        stack.pushNode(40)
        assert.equal(4, stack.getNodeCount())
        done()
    })

    it('should return 40 on peek()', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        stack.pushNode(30)
        stack.pushNode(40)
        assert.equal(40, stack.peek())
        done()
    })

    it('should return 2 nodes in stack', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        stack.pushNode(30)
        stack.pushNode(40)
        stack.popNode()
        stack.popNode()
        assert.equal(2, stack.getNodeCount())
        done()
    })

    it('should return true on toString()', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        stack.pushNode(30)
        const str = `[30]\n[20]\n[10]\n`
        assert.equal(str, stack.toString())
        done()
    })

    it('should return true on getTop() when stack has no nodes', done => {
        assert.isNull(stack.getTop())
        done()
    })

    it('should return false on getTop() when stack is not empty', done => {
        stack.pushNode(10)
        assert.isNotNull(stack.getTop())
        done()
    })

    it('should return true on isEmpty() when stack has no nodes', done => {
        assert.isTrue(stack.isEmpty())
        done()
    })

    it('should return false on isEmpty() when stack contains nodes', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        assert.isFalse(stack.isEmpty())
        done()
    })

    it('should return true on toString() when popNode is invoked thre times', done => {
        stack.pushNode(10)
        stack.pushNode(20)
        stack.pushNode(30)
        stack.pushNode(40)
        stack.pushNode(50)
        stack.popNode()
        stack.popNode()
        stack.popNode()
        const str = `[20]\n[10]\n`
        assert.equal(str, stack.toString())
        done()
    })

    it('should node throw \'TypeError\' when string type value is passed in', done => {
        assert.throws(() => {
            stack.pushNode('10')
        }, TypeError)
        done()
    })
})