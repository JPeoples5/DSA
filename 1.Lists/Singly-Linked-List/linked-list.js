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
        if (!this.head){
          this.head = additionalNode;
          this.tail = additionalNode;
        }else{
          // add on to the tail
          this.tail.next = additionalNode;
          //move the tail property to the new end
          this.tail = additionalNode; 
        }
       this.length++;
       return this;
    }
  
}