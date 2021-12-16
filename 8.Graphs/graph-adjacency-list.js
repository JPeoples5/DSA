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
			if (!vtx) return null

			// obj for O(1) lookup
			visited[vtx] = true
			results.push(vtx)

			//loop over aL's key's values
			for (let valueItem in adjacencyList) {
				console.log(valueItem)
				if (!visited[valueItem]) return dfs(valueItem)
			}
		}
		dfs(start)
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

console.log(g)
g.recursiveDFS("A")

/*
            A
          /  \
         B    C
         |    |
         D ---E
         \    /
            F
    
*/
