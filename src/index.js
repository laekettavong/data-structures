const LinkedList = require('./LinkedList')
const Node = require('./Node')

const linkedList = new LinkedList(10);
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
//linkedList.deleteNode(10)
//linkedList.deleteNode(50)
console.log(linkedList.toString(), linkedList.getNodeCount());
linkedList.removeDuplicates()
console.log(linkedList.toString(), linkedList.getNodeCount());
//console.log(linkedList.getNodeCount());
//console.log(linkedList.hasValue(20));

