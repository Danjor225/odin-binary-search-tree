function traversalFunctionsFactory(rootTraversal){
        let root = rootTraversal

        function setRootTraversal(rootTraversal){
            root = rootTraversal
        }
    function levelOrder(callback){

        if(!callback){
            throw new Error('No callback was given for level order')
            
        }
        let traversedTree = false
        let treeQueue = [root]
       
      
        while(!traversedTree){

           
            callback(treeQueue[0])
                
            if(treeQueue[0].leftChildNode) treeQueue.push(treeQueue[0].leftChildNode)
            if(treeQueue[0].rightChildNode) treeQueue.push(treeQueue[0].rightChildNode)
            treeQueue.shift()
             

        
      

            if(treeQueue.length == 0){
                traversedTree = true
            }

        }

        
    }

    function inOrder(callback, node = root){

        if(!callback){
            throw new Error('No callback was given for  Inorder')
            
        }
        if(node == null){
            return
        }
        inOrder(callback, node.leftChildNode)
        callback(node)
        inOrder(callback, node.rightChildNode)

    }

    function preOrder(callback, node = root){
        if(!callback){
            throw new Error('No callback was given for  Inorder')
            
        }
        if(node == null){
            return
        }
        callback(node)
        preOrder(callback, node.leftChildNode)
        preOrder(callback, node.rightChildNode)
    }

    function postOrder(callback, node = root){
         if(!callback){
            throw new Error('No callback was given for  Inorder')
            
        }
        if(node == null){
            return
        }
        postOrder(callback, node.leftChildNode)
        postOrder(callback, node.rightChildNode)
        callback(node)
        
    }

    function findNodelevelOrder(node){
        let depthCount = 0
        let traversedTree = false
        let treeQueue = [node]
       if(node == null) return depthCount
      
        while(!traversedTree){

           let levelSize = treeQueue.length

           for(let x = 0 ; x < levelSize ; x ++){
            if(treeQueue[0].leftChildNode) treeQueue.push(treeQueue[0].leftChildNode)
            if(treeQueue[0].rightChildNode) treeQueue.push(treeQueue[0].rightChildNode)
            treeQueue.shift()
           }
                
           
            

        
      

            if(treeQueue.length == 0){
                return depthCount
            }
            depthCount ++
        }

        return depthCount

        
    }

    return {levelOrder, inOrder, postOrder, preOrder, findNodelevelOrder, setRootTraversal}
}

    export {traversalFunctionsFactory}