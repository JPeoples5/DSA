```
       10
    6     15
  3   7   8  20
```

Queue: []
dataArr: [ 10, 6, 15, 3, 8, 20 ]

# BFS - Iteratively

## Steps:

- Create a queue and a variable tos tore the values of the nodes visted
- Place the root node in the queue

  - Dequeue a node from the queue and push the value fo the node iinto the var that stores the nodes
  - If thre is a left proprty on the node dequeued - add it to the quueue

- return the var that was storing all of the values
