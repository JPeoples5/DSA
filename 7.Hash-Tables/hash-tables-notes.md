# Hash Tables

- Insertion: O(1)
- Deletion: O(1)
- Access: O(1)

## What is a Hash Table:

- Hash tables are used to store key value pairs.
- They are like arrays but they are not ordered
- unlike arrays hash tables are fast for:
  - lookup
  - adding
  - removing

## Hash Tables In Languages:

- Python : Dictionaries
- JS: Objecs and Maps
- Java, Go: Maps
- Ruby: Hashes

In order to look up values by key we need a way to convert keys into valid array indicies:

Pass in a string. ——outcomes——> a hashed value

Hash functions are usually a one way function

## What makes a good hash:

- Fast(constant time)
- Doesn’t cluster outputs at a specific indices but distributes uniformly
- Same input yields same output,

## Prime Numbers:

- using large prime numbers reduces collisions

## Separate Chaining

- at each index in our arr we store values using another data structure like an array or linked list

- Thre is a collision at index 1 and **val1** and **val2** are store in a arr at position 1

- Our solutions uses this method

```
  0    1    2    3
[..., ..., ..., ...]
     val1
     val2
```

## Linear Probing

- When we find collision we search through the table to find the next empty slot
- alows us to store a single val at a single idx
