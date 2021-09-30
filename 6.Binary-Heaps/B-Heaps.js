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

