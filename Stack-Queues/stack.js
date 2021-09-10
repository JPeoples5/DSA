//stack 
// in a stack push and pop should be in constant time O(1)
//in a singly linked list pop is not. O(n)

/*
Insertion - O(1)
Removal - O(1)
/*Searching - O(N)
Access - O(N)
*/

class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Stack{
  constructor(){
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  // to the front / top of the stack
  push(val){
    var addedNode = new Node(val);
    if(!this.first){
      this.first = this.last = addedNode;
    }else{
      var originalFirst = this.first;
      this.first = addedNode;
      addedNode.next = originalFirst;
    }
    
    this.length++;
    return this.length; 
  }
  // from the front /top of the stack  
  pop(){
    if(this.length === 0) return null;
    var originalFirst = this.first;
    if(this.length === 1){
      this.last = null;
    }
    this.first = originalFirst.next;
    this.length--;
    return originalFirst;
  } 
}
