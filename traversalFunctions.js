function traversalFunctionsFactory(root){
        
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

    return {levelOrder, inOrder}
}

    export {traversalFunctionsFactory}