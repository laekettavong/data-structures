import LinkedList from './LinkedList'
import Queue from './Queue'
import Stack from './Stack'
import BinaryTree from './BinaryTree'
import Graph from './Graph'
import Node from './GraphNode'

const runBit = 0b10000; //0b11111

if (runBit & 0b0001) {
    console.log('\n****** [BinaryTree] *****')
    const binaryTree = new BinaryTree(10)
    binaryTree.insertNode(5)
    binaryTree.insertNode(15)
    binaryTree.insertNode(8)
    binaryTree.insertNode(3)
    binaryTree.insertNode(17)
    binaryTree.insertNode(13)
    console.log(binaryTree.getValue())
    console.log(binaryTree.getLeft().getValue())
    console.log(binaryTree.getLeft().getRight().getValue())
    console.log(binaryTree.getRight().getValue())
    console.log(binaryTree.contains(13))
    binaryTree.printInOrder()
    console.log("*****")
    binaryTree.printPreOrder()
    console.log("*****")
    binaryTree.printPostOrder()
    console.log(binaryTree.contains(17))
}

if (runBit & 0b0010) {
    console.log('\n****** [Stack] *****')
    const stack = new Stack()
    stack.pushNode(10)
    stack.pushNode(20)
    stack.pushNode(30)
    stack.pushNode(40)
    stack.popNode()
    console.log(stack.toString())
    console.log(stack.peek())
    console.log(stack.isEmpty())
    const foo = `
    [30]\n
    [20]\n
    [10]\n`

    const bar = `
    [30]\n
    [20]\n
    [10]\n`
    console.log(bar == foo)
}

if (runBit & 0b0100) {
    console.log('\n****** [QUEUE] *****')
    const queue = new Queue()
    queue.addNode(10)
    queue.addNode(20)
    queue.addNode(30)
    console.log(queue.peek())
    console.log(queue.removeNode())
    console.log(queue.peek())
    console.log(queue.getNodeCount())
    console.log(queue.toString())
}

if (runBit & 0b1000) {
    console.log('\n****** [LinkedList] *****')
    const linkedList = new LinkedList(10, false);
    linkedList.addNode(20)
    linkedList.addNode(10)
    linkedList.addNode(30)
    linkedList.addNode(20)
    linkedList.addNode(40)
    linkedList.addNode(50)
    linkedList.addNode(30)
    linkedList.addNode(40)
    linkedList.addNode(60)
    linkedList.addNode(30)
    console.log(linkedList.toString(), linkedList.getNodeCount());
    linkedList.sortAscending()
    console.log(linkedList.toString(), linkedList.getNodeCount());
    linkedList.sortDescending()
    console.log(linkedList.toString(), linkedList.getNodeCount());
    console.log(linkedList.getNodeCount());
    console.log(linkedList.contains(20));
}

if (runBit & 0b10000) {
    console.log('\n****** [Graph] *****')
    const graph = new Graph()
    const node10 = new Node(10)
    const node20 = new Node(20)
    const node30 = new Node(30)
    const node40 = new Node(40)
    const node50 = new Node(50)
    const node60 = new Node(60)
    graph.addNode(node10)
    graph.addNode(node20)
    graph.addNode(node30)
    graph.addNode(node40)
    graph.addNode(node50)
   graph.addNode(node60)
    graph.linkNodes(node10, node50)
    console.log(graph.findNode(node60))
    graph.linkNodes(node10, node30)
    graph.linkNodes(node30, node40)
    graph.linkNodes(node40, node50)
    graph.linkNodes(node30, node50)
    graph.linkNodes(node50, node60)
    console.log(graph.findNode(node10).size())
    console.log(graph.getNeighborsForNode(node30).length)
    console.log(graph.toString())
    console.log(node20.isLinkedTo(node30))
    console.log(node30.isLinkedTo(node40))
    console.log(node40.isLinkedTo(node30))
    console.log(node40.isLinkedTo(node50))
    console.log(node40.isLinkedTo(node10))
    graph.getNeighborsForNode(node30).forEach(node => {
        node.printValue()
    })
}

