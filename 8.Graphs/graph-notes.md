# Graphs

## Definition:

### Graph is a collection of nodes + connections (spider-web)

---

## Uses:

- Social Networks
- Location / Mapping
- File System Optimizations
- Recommendations
- gps
- ***

## Terminology

- Vertex: a node
- Edge: connection bewtween nodes
- Weighted Graph: Adding value to the edges
- Cycle: a edge leaving and coming back to the same vtx
- Undirected Graph: no directions associated with an edge
- Directed Graph: direction matters,direction assigned to edges, sometimes modeled with arrows

---

- |V|: number of vertices
- |E |: number of edges

## Adjacency Matrix (1 and 0 like the matrix)

- a 2d array of rows and columns.
- each vertex is listed on the x and the y headers
- the intersection of the vertexs will hold a 0 or a 1 to show if they have a connection/edge
- A sparse AM is one with many 0, taking up unneeded space

```
| - | A | B | C |
|---|---|---|---|
| A | 0 | 1 | 0 |
| B | 1 | 0 | 1 |
| C | 0 | 1 | 0 |
```

## Adjacency List

-
- use a arr to store the edges
- this uses the position of the nodes
- use a hash table/ map

```
{
    A: [0,5],
    B: [0,2],
    C: [4,4]
}
```

## Big O:

| Operation     | Adjacent List    | Adjacency Matrix |
| ------------- | ---------------- | ---------------- |
| Add Vertex    | O(1)             | O(\|V^2\|)       |
| Add Edge      | O(1)             | O(1)             |
| Remove Vertex | O(\|V\| + \|E\|) | O(\|V^2\|)       |
| Remove Edge   | O(\|E\|)         | O(1)             |
| Query         | O(\|V\| + \|E\|) | O(1)             |
| Storage       | O(\|V\| + \|E\|) | O(\|V^2\|)       |

| Adjacent List                           | Adjacency Matrix                 |
| --------------------------------------- | -------------------------------- |
| + Can take up less space                | - Take up more space             |
| + Fater to visit all edges              | -Slower to visit all edges       |
| - Can be slower to lookup specific edge | + Faster to lookup specific edge |

# Traversal

- There is no root in graphs, we need to specify
- will have to visit vtx twice

# Depth First Traversal

- What does depth mean on a spiderweb?
- keep track of the nodes already visited

## Recursive PsuedoCode

```
recursiveDFT(vtx){
    if(vtx is empty){
        return // base case
    }
    add vtx to results list
    mark vtx as visited
    for each neighbor in vtxs neighbors{
            if (neighbor is not visited){
                recursively call DFS on neighbor
            }
    }
}
```
