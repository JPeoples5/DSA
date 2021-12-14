# Graphs

## Definition:

### Graph is a collection of nodes + connections (spider-web)

---

## Uses:

- Social Networks
- Location / Mapping
- File System Optimizations
- Recommendations

---

## Terminology

- Vertex: a node
- Edge: connection bewtween nodes
- Weighted Graph: Adding value to the edges
- Undirected Graph: no directions associated with an edge
- Directed Graph: direction matters,direction assigned to edges, sometimes modeled with arrows

---

- |V|: number of vertices
- |E |: number of edges

## Adjacency Matrix

- a 2d array of rows and columns.
- each vertex is listed on the x and the y headers
- the intersection of the vertexs will hold a 0 or a 1 to show if they have a connection/edge

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
