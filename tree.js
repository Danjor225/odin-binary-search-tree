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

          if(element < parentNode.attribute){
            parentNode.leftChildNode = newNode
            newNode.toLeft = true
          } else {
            parentNode.rightChildNode = newNode
            newNode.toLeft = false
          }


        });

        return rootNode

    }

    function insert(value){
        let parentNode =  getRelevantBaseNode(value, root)
        let newNode = nodeFactory(value)
        if(value < parentNode.attribute){
            parentNode.leftChildNode = newNode
            newNode.toLeft = true
          } else {
            parentNode.rightChildNode = newNode
            newNode.toLeft = false
          }

    }

    function deleteItem(value){
        let nodeToRemoveParent = getSpecificNodeParent(value)
        let nodeToRemove
        
        if(nodeToRemoveParent.leftChildNode != null && nodeToRemoveParent.leftChildNode.attribute == value){
            nodeToRemove = nodeToRemoveParent.leftChildNode
        }

        if(nodeToRemoveParent.rightChildNode != null && nodeToRemoveParent.rightChildNode.attribute == value){
            nodeToRemove = nodeToRemoveParent.rightChildNode
        }


        let noOfChildren = getNoOfChildren(nodeToRemove)

        if(noOfChildren == 0){
            if(nodeToRemove.isLeft){
                nodeToRemoveParent.leftChildNode = null
                
            } else {
                nodeToRemoveParent.rightChildNode = null
                
            }

        } else if(noOfChildren == 1){
            console.log('One Child')
            if(nodeToRemove.isLeft){
                nodeToRemoveParent.leftChildNode = nodeToRemove.leftChildNode ? nodeToRemove.leftChildNode : nodeToRemove.rightChildNode
                
            } else {
                nodeToRemoveParent.rightChildNode = nodeToRemove.leftChildNode ? nodeToRemove.leftChildNode : nodeToRemove.rightChildNode
                
            }
           
       

        } else if (noOfChildren == 2){
            console.log('2 children')
            let nodeToSwapWithParent = getLowestRightNodeParent(nodeToRemove)
            nodeToRemove.attribute = nodeToSwapWithParent.leftChildNode.attribute
            nodeToSwapWithParent.leftChildNode = null
        }

    }

    

    function getNoOfChildren(nodeToCheck){
        let count = 0

        if(nodeToCheck.leftChildNode != null){
            count ++
        }

        if(nodeToCheck.rightChildNode != null){
            count ++
        }

        return count
    }
    function getSpecificNodeParent(value){

        let currentNode = root
        let nextNode = value < root.attribute ? root.leftChildNode : root.rightChildNode
        while(nextNode.attribute != value){
            
            currentNode = nextNode
            nextNode = value < currentNode.attribute ? currentNode.leftChildNode : currentNode.rightChildNode

        }

        return currentNode


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

    function getLowestRightNodeParent(nodeToStartFrom){


        let currentNode = nodeToStartFrom
        let nextNode = nodeToStartFrom.rightChildNode
        
        while(nextNode.leftChildNode){
            currentNode = nextNode
            nextNode = currentNode.leftChildNode
           
        }

        return currentNode
    }

    function getRootNode(){
        return root
    }

    return{getRootNode, insert, deleteItem}

}

export {treeFactory}