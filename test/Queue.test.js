import { assert, expect } from 'chai'
import Queue from '../src/Queue'

describe('Queue Test', () => {
    let queue;
    beforeEach(() => {
        queue = new Queue();
    })

    it('should return queue size of 4', done => {
        queue.addNode(10)
        queue.addNode(20)
        queue.addNode(30)
        queue.addNode(40)
        assert.equal(4, queue.getNodeCount())
        done()
    })

    it('should return \'[10]-[20]-[30]-[40]\'', done => {
        queue.addNode(10)
        queue.addNode(20)
        queue.addNode(30)
        queue.addNode(40)
        assert.equal('[10]-[20]-[30]-[40]', queue.toString())
        done()
    })

    it('should return queue size of 3', done => {
        queue.addNode(10)
        queue.addNode(20)
        queue.addNode(30)
        queue.addNode(40)
        queue.removeNode()
        assert.equal(3, queue.getNodeCount())
        done()
    })

    it('should return [20]-[30]-[40]', done => {
        queue.addNode(10)
        queue.addNode(20)
        queue.addNode(30)
        queue.addNode(40)
        queue.removeNode()
        assert.equal('[20]-[30]-[40]', queue.toString())
        done()
    })

    it('should return 115', done => {
        queue.addNode(115)
        queue.addNode(120)
        queue.addNode(130)
        assert.equal(115, queue.peek())
        done()
    })

    it('should return null when queue is empty when peek()', done => {
        assert.isNull(queue.peek())
        done()
    })

    it('should return null when queue is empty when getHead()', done => {
        assert.isNull(queue.getHead())
        done()
    })

    it('should return null when queue is empty when getTail()', done => {
        assert.isNull(queue.getTail())
        done()
    })

    it('should return null for both head and tail when queue is empty', done => {
        assert.equal(queue.getHead(), queue.getTail())
        done()
    })

    it('should return true', done => {
        assert.isTrue(queue.isEmpty())
        done()
    })

    it('should throw \'TypeError\' when string type value is passed in', done => {
        assert.throws(() => {
            queue.pushNode('10')
        }, TypeError)
        done()
    })
})