# Dynamic Programming

## Overlapping Subproblems

- Dy Prop needs overlapping sub problems
- If it can be broken down into subproblems which are used several times
  - ex: Fibonacci Sequence (1 1 2 3 5 8)

#### Non overlapping Subproblems

- Ex: merge sort
  - This is involves subprroblems but they are not overlapping

## Optimal Subsctructure , needed

- We can constuct the optimal solution by the answer of sub problems
- Shortest Path
  ```
      A --> B--> C--> D
            \       /
             \___>E
  ```
- By calculating the smallest distanc between each letter we can then find the shortest distance from A - D

## KMemoization

- Storing the results of expensive function calls and returning the cached result when the same input occurs again

## Tabulation - Bottom Up

- Storing the results of a previous result in a "table" (array)
- Better space complexity
