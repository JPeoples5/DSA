class Node{
	constructor(val){
		this.val = val;
		this.next = null;
	}
}

class SinglyLinkedList{
    constructor(){
      this.length = 0;
      this.head = null;
      this.tail = null;
    }
    push(val){
        var additionalNode = new Node(val);
        // condition if SinglyLinkedList has 0 nodes
        if (!this.head){
          this.head = additionalNode;
          this.tail = additionalNode;
        }else{
          this.tail.next = additionalNode;
          this.tail = additionalNode;
        }
       this.length++;
    }
    traverse(){
      var current = this.head;
      while(current){
        console.log(current.val)
        cuurent = current.next
      }
    }
  
    pop(){
    if(!this.head) return undefined;
    // if there is a head. set current noode to head and tail 
    var current = this.head
    var newTail = current;
     // while not on the last node
     
    while(current.next){
      //  nT---> Crnt--> C---> null
      //  A-----> B----> C---> null
      newTail = current; //A
      current = current.next; //B
    }
      //severe the 'current' node
      this.tail = newTail;
      this.tail.next = null;
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      //return the severed node (last node)
      return current;
    }
  
    shift(){
      if (!this.head) return undefined;
      var currentHead = this.head
      this.head = currentHead.next
      
      this.length--;
      if(this.length === 0){
        this.head = null;
        this.tail = null;
      }
      currentHead.next = null;
      return currentHead;
    }
  
    unshift(val){
      var newHead = new Node(val);
      if (!this.head){
        newHead = this.head;
        newHead = this.tail;
      }else{
      // else is important as to not set next to itself
      // I like the OGHead but not needed
      var OGHead = this.head;
      newHead.next = OGHead;
      this.head = newHead;
      }
      this.length++;
      return this;
    }
}