import {treeFactory} from './tree.js'

let newTreeFactory = treeFactory([30, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

const prettyPrint = (node, prefix = '', isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.rightChildNode !== null) {
    prettyPrint(node.rightChildNode, `${prefix}${isLeft ? '│   ' : '    '}`, false);
  }
  console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.attribute}`);
  if (node.leftChildNode !== null) {
    prettyPrint(node.leftChildNode, `${prefix}${isLeft ? '    ' : '│   '}`, true);
  }
};

prettyPrint(newTreeFactory.getRootNode())
newTreeFactory.insert(6)
newTreeFactory.insert(0)
newTreeFactory.insert(2)
newTreeFactory.insert(1)
newTreeFactory.insert(200)
newTreeFactory.insert(123)
newTreeFactory.insert(111)
newTreeFactory.insert(92)
newTreeFactory.insert(65)
prettyPrint(newTreeFactory.getRootNode())
newTreeFactory.deleteItem(6)
prettyPrint(newTreeFactory.getRootNode())
newTreeFactory.deleteItem(6345)
prettyPrint(newTreeFactory.getRootNode())
newTreeFactory.deleteItem(7)
newTreeFactory.deleteItem(7)
prettyPrint(newTreeFactory.getRootNode())
newTreeFactory.deleteItem(67)
newTreeFactory.deleteItem(800)
newTreeFactory.insert(0)
prettyPrint(newTreeFactory.getRootNode())
// console.log(newTreeFactory.find(0))
// console.log(newTreeFactory.find(800))

// newTreeFactory.levelOrder()
// newTreeFactory.inOrder()
// console.log(newTreeFactory.height(8))
// console.log(newTreeFactory.height(0))
// console.log(newTreeFactory.height(30))
// console.log(newTreeFactory.depth(4))
// console.log(newTreeFactory.depth(2))
// console.log(newTreeFactory.depth(800))

console.log(newTreeFactory.isBalanced())
newTreeFactory.rebalance()
prettyPrint(newTreeFactory.getRootNode())
console.log(newTreeFactory.isBalanced())