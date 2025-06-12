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

          if(element<parentNode.attribute){
            parentNode.leftChildNode = newNode
          } else {
            parentNode.rightChildNode = newNode
          }


        });

        return rootNode

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

    function getRootNode(){
        return root
    }

    return{getRootNode}

}

export {treeFactory}