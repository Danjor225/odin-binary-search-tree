function nodeFactory(attribute, leftChildNode = null, rightChildNode = null, toLeft){
   
    return {attribute, leftChildNode,rightChildNode, toLeft}

}

export {nodeFactory}