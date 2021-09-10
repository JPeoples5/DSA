class Node{
  constructor(val){
    this.val = val;
    this.next = null;
  }
}

class Queue{
  constructor(){
    this.start = 0;
    this.last = 0;
    this.length = 0;
  }
  
  //add to the end of the line
  enqueue(val){
    var addedNode = new Node(val);
    if(this.length === 0 ){
      this.start = this.last = addedNode;
    }else{
      this.last.next = addedNode;
      this.last = addedNode;
    }
    this.length++;
  }
  //pop off the start
  dequeue(){
    if(!this.start) return
    
    if (this.length === 1 ){
      this.start = this.last = null;
    }else{
      var dequeuedNode = this.start;
      this.start = dequeuedNode.next;
      dequeuedNode.next = null;
    }
    this.length--;
    return dequeuedNode;
  } 
}