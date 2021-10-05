# DFS -PreOder:

- Description : Visit one whole side of the tree before adding to data list.

```
     10
    6     15
  3  8      20
```

```
output ---> [ 10, 6, 3, 8, 15, 20 ]
```

## General Steps

- Visit the node.
- Look at the left
- Look at the right

## Rescursive Solution steps.

1. Create a variable to store the values visted
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node
   -Push the vaals of the node to the varibale that store the values.

   - If the node has a left property call the helper function wiht the left property on the node
   - If the node has a right property call the helper function with the right property on the node

4. Invoke the helper function with the current variable
5. Return the array of values

# DFS - Post Order:

- Description: visit the node only after visiting the children.

```
       10
    6     15
  3  8      20
```

```
output---> [ 3, 8, 6, 20, 15, 10 ]
```

## Rescursive Solution steps.

1. Create a variable to store the values visted
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node

   - If the node has a left property call the helper function wiht the left property on the node
   - If the node has a right property call the helper function with the right property on the node
     -Push the vaals of the node to the varibale that store the values.

4. Invok the helper function with the current variable
5. Return the array of values

# DFS - In Order:

- Description: traverse the entire left branch then visit the node then traverse the entire right side and then add the node

```
      10
    6     15
  3  8      20
```

```
output ---> [ 3, 6, 8, 10, 15, 20 ]
```

# Rescursive Solution steps.

1. Create a variable to store the values visted
2. Store the root of the BST in a variable called current
3. Write a helper function which accepts a node

   - If the node has a left property call the helper function wiht the left property on the node
     -Push the vaals of the node to the varibale that store the values.
   - If the node has a right property call the helper function with the right property on the node

4. Invok the helper function with the current variable
5. Return the array of values
