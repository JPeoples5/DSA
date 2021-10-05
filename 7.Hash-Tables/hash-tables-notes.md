# Hash Tables

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
