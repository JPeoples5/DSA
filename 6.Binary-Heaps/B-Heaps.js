class MaxBinaryHeap{
  constructor(){
    this.values = [];
  }
  
  insert(element){
    this.values.push(element);
    this.bubbleUp();
  }
  
  bubbleUp(){
    let index = this.values.length -1;
    const element = this.values[index];
    while(index > 0){
      let parentIndex = Math.floor((index-1)/2)
      let parent = this.values[parentIndex];
      if(element <= parent) break;
   
       this.values[parentIndex] = element;
       this.values[index] = parent
       index = parentIndex;
      }
  }
  
  extractMax(){
    const originalRoot = this.root;
    const end = this.values.pop();
    this.values[0] = end 
    
    this.sinkDown();
    
    return originalRoot;
  }
  sinkDown(){
    let index = 0;
    const length = this.values.length;
    const element = this.values[0]
    
    while(true){
      let leftChildIndex = 2 *index + 1
      let rightChildIndex = 2* index + 2;
      let leftChildVal;
      let rightChildVal;
      let swap = null;
      
      if(leftChildIndex < length){
        leftChild = this.values[leftChildIndex]
      }
    }
      if (swap === null)break
  }
}

var MBH = new MaxBinaryHeap();


MBH.insert(41)
MBH.insert(39)
MBH.insert(33)
MBH.insert(18)
MBH.insert(27)
MBH.insert(12)
MBH.insert(55)
MBH.insert(100)
MBH.values



