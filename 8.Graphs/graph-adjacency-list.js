// nodes, connections

class Graph {
	constructor() {
		this.adjacencyList = {}
	}

	addVertex(vertex) {
		if (!this.adjacencyList[vertex]) {
			this.adjacencyList[vertex] = []
		}
	}

	addEdge(v1, v2) {
		this.adjacencyList[v1].push(v2)
		this.adjacencyList[v2].push(v1)
	}

	removeEdge(v1, v2) {
		if (this.adjacencyList[v1].includes(v2)) {
			this.adjacencyList[v1].splice(this.adjacencyList[v1].indexOf(v2), 1)
		}

		this.adjacencyList[v2] = this.adjacencyList[v2].filter((v) => v !== v1)
	}

	removeVertex(vertex) {
		for (let key in this.adjacencyList) {
			if (this.adjacencyList[vertex]) delete this.adjacencyList[vertex]

			if (this.adjacencyList[key].includes(vertex)) {
				this.adjacencyList[key] = this.adjacencyList[key].filter((arrItem) => arrItem !== vertex)
			}
		}
	}

	recursiveDFS(start) {
		const results = []
		const visited = {}
		// the 'this' concept changes with the second dfs func
		const adjacencyList = this.adjacencyList

		//helper func
		function dfs(vtx) {
			if (!vtx) return undefined

			// obj for O(1) lookup
			visited[vtx] = true
			results.push(vtx)

			//loop over adjList's key's values
			for (let key in adjacencyList) {
				if (!visited[key]) return dfs(key)
			}
		}
		dfs(start)
		return results
	}

	iteratvieDFS(start) {
		const stack = [start] // ex: ['A']
		const visited = {}
		const results = []
		let currentVtx

		visited[start] = true // {'A' : true}

		console.log("adjList", this.adjacencyList)
		while (stack.length) {
			console.log("stack", stack)

			currentVtx = stack.pop() // 'A'
			results.push(currentVtx) // results = ['A']

			this.adjacencyList[currentVtx].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					stack.push(neighbor)
				}
			})
		}
		console.log(results)
		return results
	}
	BFS(start) {
		const queue = [start]
		const visited = {}
		const results = []

		visited[start] = true
		let currentVtx
		while (queue.length) {
			currentVtx = queue.shift()
			results.push(currentVtx)

			this.adjacencyList[currentVtx].forEach((neighbor) => {
				if (!visited[neighbor]) {
					visited[neighbor] = true
					//if unshifted() this becomes DFS
					queue.push(neighbor)
				}
			})
		}

		return results
	}
}

let g = new Graph()

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

// console.log(g)
// g.recursiveDFS("A")

/*
            A
          /  \
         B    C
         |    |
         D ---E
         \    /
            F
    
*/

// Graph {
// 	adjacencyList: {
// 	  A: [ 'B', 'C' ],
// 	  B: [ 'A', 'D' ],
// 	  C: [ 'A', 'E' ],
// 	  D: [ 'B', 'E', 'F' ],
// 	  E: [ 'C', 'D', 'F' ],
// 	  F: [ 'D', 'E' ]
// 		}
//   }
