import {treeFactory} from './tree.js'

let newTreeFactory = treeFactory([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324])

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
prettyPrint(newTreeFactory.getRootNode())