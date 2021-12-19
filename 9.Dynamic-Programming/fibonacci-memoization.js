// Big O: 2^n (exponential)
function badFib(n) {
	if (n <= 2) return 1
	return badFib(n - 2) + badFib(n - 1)
}

// const memo = { '1': 1, '2': 1, '3': 2, '4': 3 }
// Big O: O(N)
const fib = (n, memo = {}) => {
	memo[1] = memo[2] = 1
	if (memo[n]) return memo[n]
	let result = fib(n - 1, memo) + fib(n - 2, memo)

	memo[n] = result
	return result
}

// upside down call stack
/*
                 fib(5)
              /          \
         fib(4)     +     fib(3)
          /  \              /    \
      fib(3) + fib(2)   fib(2) + fib(1) 
       /   \
   fib(2) + fib(1)  
  
  */

// fib(3) can be solved by the result of the base case fib(1) + fib(2)
// the function will continue on this premise
