import {nodeFactory} from './node.js'


function treeFactory(treeArray = []){

    let root = buildTree(treeArray)

    function buildTree(array){

        let rootNode

        array.forEach(element => {

            if(!rootNode){
                rootNode = nodeFactory(element)
                return
            }
            
          let parentNode =  getRelevantBaseNode(element, rootNode)
          let newNode = nodeFactory(element)
          parentNode.leftChildNode = element < parentNode.attribute ? newNode : null
          parentNode.rightChildNode = element > parentNode.attribute ? newNode : null


        });
        console.log(rootNode)

    }

    function getRelevantBaseNode(numberToAssign, rootNode){
        let currentNode = rootNode
        let nextNode = numberToAssign < rootNode.attribute ? rootNode.leftChildNode : rootNode.rightChildNode
        while(nextNode){
            
            currentNode = nextNode
            nextNode = numberToAssign < currentNode.attribute ? currentNode.leftChildNode : currentNode.rightChildNode

        }

        return currentNode

    }

    return{root}

}

export {treeFactory}