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
  
  enqueue(val){
    var addedNode = new Node(val);
    if(this.length === 0 ){
      this.start = this.last = addedNode;
    }else{
      var ogStart = this.start;
      this.start = addedNode;
      addedNode.next = ogStart;
    }
    this.length++;
  }
  
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

var q = new Queue();
q.enqueue('A');
q.enqueue('B');
// q.enqueue('C')
q