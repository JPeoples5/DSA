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
	// Todo - last one woot woot
	removeVertex(v) {
		null
	}
}

let g = new Graph()
g.addVertex("Jeremiah")
g.addVertex("Jonah")
g.addVertex("Jordan")
g.addEdge("Jeremiah", "Jonah")
g.addEdge("Jeremiah", "Jordan")

g.removeEdge("Jeremiah", "Jonah")

console.log(g)
