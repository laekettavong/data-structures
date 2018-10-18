import Node from './GraphNode'

module.exports = class Graph {
    constructor() {
        this.nodes = []
    }

    size = () => {
        return this.nodes.length
    }

    addNode = (node) => {
        if (this.contains(node)) throw new Error('Cannot have duplicate nodes')
        this.nodes.push(node)
    }

    contains = (node) => {
        return this.nodes.find(elem => {
            return elem.getValue() === node.getValue()
        }) ? true : false
    }

    findNode = (node) => {
        return this.nodes.find(elem => {
            return elem.getValue() === node.getValue()
        })
    }

    linkNodes = (startNode, endNode) => {
        const sNode = startNode ? this.findNode(startNode) : null
        const eNode = endNode ? this.findNode(endNode) : null
        if (!sNode || !eNode) throw new TypeError('Invalid nodes')
        sNode.linkToNode(eNode)
    }

    toString = () => {
        let output = '';
        this.nodes.forEach(node1 => {
            output += `\n(${node1.getValue()})`
            let foundIt = false
            this.nodes.forEach((node2, indx) => {
                if (node1.getValue() !== node2.getValue() && node1.isLinkedTo(node2)) {
                    if (!foundIt) {
                        output += `--`
                        foundIt = true
                    }
                    output += `(${node2.getValue()})`
                }
            })
        })
        return output
    }

    getNeighborsForNode = (targetNode) => {
        const neighbors = []
        this.nodes.forEach((node, indx) => {
            if (targetNode.getValue() !== node.getValue() && targetNode.isLinkedTo(node)) {
                neighbors.push(node)
            }
        })
        return neighbors
    }
}