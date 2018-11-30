import { assert, expect } from 'chai'
import Node from '../src/Node'

describe('Node Test', () => {
    it('should node value of 10', done => {
        const node = new Node(10)
        assert.equal(10, node.getValue())
        done()
    })

    it('should not have any valid next neighbor', done => {
        const node = new Node(10)
        assert.equal(null, node.getNext())
        done()
    })

    it('next node value whould be 20', done => {
        const node = new Node(10)
        node.setNext(new Node(20))
        assert.equal(20, node.getNext().getValue())
        done()
    })

    it('should node throw \'TypeError\' when string type value is passed in', done => {
        assert.throws(() => {
            const node = new Node('10')
        }, TypeError)
        done()
    })

    it('should node throw \'TypeError\' when an array is passed in', done => {
        assert.throws(() => {
            const node = new Node([10])
        }, TypeError)
        done()
    })

})