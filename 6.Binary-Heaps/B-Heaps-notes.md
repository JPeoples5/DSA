# What is a Binary Heap?

- Very similar to a binary search tree but with some different rules

## MaxBinaryHeap:

- parent nodes are always larger than child nodes
- the value of each parent node is always greater than its child node
- The parent is greater than the children, but no rules between sibling nodes
- Compact as possible. every left and right child node must exist before going deeper
  - Fill out from left to right

## In a MinBinaryHeap

- parent nodes are always smaller than child nodes
- children are larger than their parent

## B Heap Maths:

- If the tree was flattened into an array,
- The left child of n is stored @ 2n+1
- The right child of n is store @ 2n+2

### To find the parent of n:

    ``` (n-1) /2 …floored* ```

## Removing From a Heap:

- remove from the root
- replace with the most recently added
- adjust the heap (sink down)
