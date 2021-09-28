class Node {
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    insert(val){
        var newNode = new Node(val);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        var current = this.root;
        while(true){
            if(val === current.val) return undefined;
            if(val < current.val){
                if(current.left === null){
                    current.left = newNode;
                    return this;
                }
                current = current.left;
            } else {
                if(current.right === null){
                    current.right = newNode;
                    return this;
                } 
                current = current.right;
            }
        }
    }
    find(val){
        if(!this.root) return false;
        var current = this.root;
        var found = false;
        while(current && !found){
            if(val < current.val){
                current = current.left;
            } else if(val > current.val){
                current = current.right;
            } else {
                found = current;
            }
        }
        if(!found) return undefined;
        return found;
    }
  BFS(){
  var dataArr = [];
  var queue =[];
  var node = this.root
  //always start with the root
  queue.push(this.root);
   
   while(queue.length){
     node = queue.shift();
     dataArr.push(node.val);
     if(node.left) queue.push(node.left);
     if(node.right) queue.push(node.right);
      
   }
    return dataArr;
  }
  
  DFSPreOrder(){
    // dataArr is the order in which nodes were visited
    var data = [];
    var current = this.root;
    function traverse(node){
      dataArr.push(node.val)
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    
    traverse(current);
    return data;
  }
  
  DFSPostOrder(){
    var data = [];
    var current = this.root;
    
    function traverse(node){
      if(node.left) traverse(node.left);
      if(node.right) traverse(node.right);
      data.push(node.val)
    }
    traverse(current)
    return data;
  }
  DFSInOrder(){
    var data = [];
    var current = this.root;
    function traverse(node){
      if(node.left) traverse(node.left)
      data.push(node.val)
      if(node.right) traverse(node.right)
    }
    traverse(current);
    return data;
  }
}


/*     10
   6     15
 3  8      20
*/

var tree = new BinarySearchTree();
tree.insert(10)
tree.insert(6)
tree.insert(15)
tree.insert(3)
tree.insert(8)
tree.insert(20)
console.log("=============")
tree.DFSInOrder()




