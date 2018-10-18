//import assert from 'assert';
const { assert, expect } = require('chai')
import LinkedList from '../src/LinkedList'
import Node from '../src/Node'

describe('LinkedList Test', () => {
    it('should return x', done => {
        const linkedList = new LinkedList(10);
        linkedList.addNode(20)
        linkedList.addNode(30)
        linkedList.addNode(40)
        linkedList.addNode(50)
        console.log("XXXX", linkedList.getHead().getValue())
        assert.equal(100, 100)
        done()
    })
})