import { assert, expect } from 'chai'
import Graph from '../src/Graph'
import Node from '../src/GraphNode'

describe('Graph Test', () => {
    let graph
    let node10
    let node20
    let node30
    let node40
    let node50
    let node60

    beforeEach(() => {
        graph = new Graph()
        node10 = new Node(10)
        node20 = new Node(20)
        node30 = new Node(30)
        node40 = new Node(40)
        node50 = new Node(50)
        node60 = new Node(60)
    })

    it('should return node size of two', done => {
        graph.addNode(node10)
        graph.addNode(node20)
        assert.equal(2, graph.size())
        done()
    })

    it('should throw \'Error\' when attempting to add the same node multiple times', done => {
        assert.throws(() => {
            graph.addNode(node10)
            graph.addNode(node10)
        }, Error)
        done()
    })

    it('should contain node10 and node20, but not node30', done => {
        graph.addNode(node10)
        graph.addNode(node20)
        assert.isTrue(graph.contains(node10))
        assert.isTrue(graph.contains(node20))
        assert.isFalse(graph.contains(node30))
        done()
    })

    it('should return two values, 10 and 20', done => {
        graph.addNode(node10)
        graph.addNode(node20)
        assert.equal(10, graph.findNode(node10).getValue())
        assert.equal(20, graph.findNode(node20).getValue())
        done()
    })


    it('should throw \'Error\' when only node is passed in', done => {
        assert.throws(() => {
            graph.addNode(node10)
            graph.linkNodes(node10)
        }, TypeError)
        done()
    })

    it('should throw \'Error\' when a node attempts to connect to itself', done => {
        assert.throws(() => {
            graph.addNode(node10)
            graph.linkNodes(node10, node10)
        }, Error)
        done()
    })

    it('should throw \'TypeError\' when a node attempts to another node not in the graph', done => {
        assert.throws(() => {
            graph.addNode(node10)
            graph.linkNodes(node10, node20)
        }, TypeError)
        done()
    })

    it('should throw \'TypeError\' when nothing is passed in', done => {
        assert.throws(() => {
            graph.linkNodes()
        }, TypeError)
        done()
    })

    it('should return the correct neighbors for the given node', done => {
        graph.addNode(node10)
        graph.addNode(node20)
        graph.addNode(node30)
        graph.addNode(node40)
        graph.addNode(node50)
        graph.linkNodes(node10, node20)
        graph.linkNodes(node10, node40)
        graph.linkNodes(node10, node50)
        graph.linkNodes(node50, node30)
        const node10Neighbors = graph.getNeighborsForNode(node10)
        assert.equal(20, node10Neighbors[0].getValue())
        assert.equal(40, node10Neighbors[1].getValue())
        assert.equal(50, node10Neighbors[2].getValue())
        const node50Neighbors = graph.getNeighborsForNode(node50)
        assert.equal(10, node50Neighbors[0].getValue())
        assert.equal(30, node50Neighbors[1].getValue())
        done()
    })

    it('should return the correct string representation of the graph', done => {
        graph.addNode(node10)
        graph.addNode(node30)
        graph.addNode(node40)
        graph.addNode(node50)
        graph.linkNodes(node10, node50)
        graph.linkNodes(node10, node30)
        graph.linkNodes(node30, node40)
        graph.linkNodes(node40, node50)
        graph.linkNodes(node30, node50)
        const output = graph.toString()
        assert.isTrue(output.includes('(10)--(30)(50)'))
        assert.isTrue(output.includes('(30)--(10)(40)(50)'))
        assert.isTrue(output.includes('(40)--(30)(50)'))
        assert.isTrue(output.includes('(50)--(10)(30)(40)'))
        assert.isFalse(output.includes('(20)'))
        done()
    })
})