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
  
    get(index){
      if(index < 0 || index > this.length) return null;
      var current = this.head;
      for(let i = 0; i < index; i++){
          current = current.next;
        }
        return current;
      }
  
      get2(index){
        if(index < 0 || index >= this.length) return null;
        var counter = 0;
        var current = this.head;
        while(counter !== index){
            current = current.next;
            counter++;
        }
        return current;
    }
  
    set(index, val){
      var targetNode = this.get(index)
      if(targetNode){
        targetNode.val = val;
        return true;
      }else{
        return false;
      }
    }
  
    insert(index, val){
      if(index < 0 || index > this.length) return false;
      if(index === this.length) return this.push(val);
      if(index === 0) return this.unshift(val);
      
      
      var previousNode = this.get(index -1);
      var oldNode = this.get(index);
      var newNode = new Node(val);
      
      previousNode.next = newNode;
      newNode.next = oldNode;
      this.length++
    }
    remove(index){
      if(index < 0 || index >= this.length) return undefined;
      if(index === 0) return this.shift();
      if(index === this.length -1) return this.pop();
      
      var previousNode = this.get(index -1);
      var targetNode = this.get(index);
      var nodeAfterTarget = this.get(index + 1);
      previousNode.next = nodeAfterTarget;
      this.length--;
    }
    print(){
      var arr = [];
      var current = this.head;
      while(current){
        arr.push(current.val);
        current = current.next;
      }
      console.log(arr)
    }
  
  
  //             T      n              H
  //            A  -- >  B  -->  C-->  D-->  null

  // null <--   A  <--   B <--   C  <--D

  //            D -->  C -->   B  -->  A --> null  
    reverse(){
      if(!this.head) return undefined
      //swap head and tail properties
      var current = this.head 
      this.head = this.tail // D
      this.tail = current // A
      
      var prev = null;
      var temp = null;
      
      
      for(let i = 0; i < this.length; i++){
        temp = current.next // B
        current.next = prev // null
        
        
        prev = current //A
        current =temp
      }
      return this;
    }
}
