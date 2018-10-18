import { assert, expect } from 'chai'
import LinkedList from '../src/LinkedList'

describe('LinkedList Test', () => {
    let linkedList;
    beforeEach(() => {
        linkedList = new LinkedList(10);
    })

    it('should return length of 5 when unique values are used', done => {
        linkedList.addNode(20)
        linkedList.addNode(30)
        linkedList.addNode(40)
        linkedList.addNode(50)
        assert.equal(5, linkedList.getNodeCount())
        done()
    })

    it('should return length of 3 duplicate values are allowed', done => {
        linkedList.addNode(10)
        linkedList.addNode(10)
        assert.equal(3, linkedList.getNodeCount())
        done()
    })

    it('should return length of 4 when duplicate values are not allowed', done => {
        linkedList = new LinkedList(10, false);
        linkedList.addNode(20)
        linkedList.addNode(30)
        linkedList.addNode(30)
        linkedList.addNode(20)
        linkedList.addNode(40)
        assert.equal(4, linkedList.getNodeCount())
        done()
    })

    it('should return \'[10]*-->[20]*-->[30]\'', done => {
        linkedList.addNode(20)
        linkedList.addNode(30)
        assert.equal('[10]*-->[20]*-->[30]', linkedList.toString())
        done()
    })

    it('should return \'[10]*-->[40]*-->[20]*-->[30]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(30)
        assert.equal('[10]*-->[40]*-->[20]*-->[30]', linkedList.toString())
        done()
    })

    it('should return \'[10]*-->[20]*-->[30]*-->[40]*-->[50]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(50)
        linkedList.addNode(30)
        linkedList.sortAscending()
        assert.equal('[10]*-->[20]*-->[30]*-->[40]*-->[50]', linkedList.toString())
        done()
    })

    it('should return \'[10]*-->[20]*-->[30]*-->[40]*-->[50]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(50)
        linkedList.addNode(30)
        linkedList.sortDescending()
        assert.equal('[50]*-->[40]*-->[30]*-->[20]*-->[10]', linkedList.toString())
        done()
    })

    it('should return \'[10]*-->[20]*-->[30]*-->[40]*-->[50]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(50)
        linkedList.addNode(30)
        linkedList.sortDescending()
        assert.equal('[50]*-->[40]*-->[30]*-->[20]*-->[10]', linkedList.toString())
        done()
    })

    it('should return \'[10]*-->[40]*-->[30]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(30)
        linkedList.deleteNode(20)
        assert.equal('[10]*-->[40]*-->[30]', linkedList.toString())
        done()
    })

    it('should return \'[50]*-->[10]*-->[40]*-->[20]*-->[30]\'', done => {
        linkedList.addNode(40)
        linkedList.addNode(20)
        linkedList.addNode(30)
        linkedList.setNewHead(50)
        assert.equal('[50]*-->[10]*-->[40]*-->[20]*-->[30]', linkedList.toString())
        assert.equal(50, linkedList.getHead().getValue())
        done()
    })

    it('should have same array elements', done => {
        linkedList.addNode(20)
        linkedList.addNode(30)
        assert.sameMembers([10, 20, 30], linkedList.getNodeValues())
        done()
    })

    it('should contain node with value of 20', done => {
        linkedList.addNode(20)
        linkedList.addNode(30)
        assert.isTrue(linkedList.contains(20))
        done()
    })

    it('should not contain node with value of 50', done => {
        linkedList.addNode(20)
        linkedList.addNode(30)
        assert.isFalse(linkedList.contains(50))
        done()
    })

    it('should node throw \'TypeError\' when non numeric value is passed in', done => {
        assert.throws(() => {
            linkedList.addNode('20')
        }, TypeError)
        done()
    })
})