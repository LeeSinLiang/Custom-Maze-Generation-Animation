let originPath = [];

const shuffleArr = (arr) => {
	for (let i = arr.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[arr[i], arr[j]] = [arr[j], arr[i]];
	}
	return arr;
};

const solve = (G, start, end, character) => {
	let queue = [start];
	let visited = {};
	let prev = {};

	visited[start] = true;
	while (queue.length > 0) {
		node = queue.pop();
		coords = [
			[node[0], node[1] + 1],
			[node[0], node[1] - 1],
			[node[0] + 1, node[1]],
			[node[0] - 1, node[1]],
		];
		coords = shuffleArr(coords);
		for (let i of coords) {
			if (
				!(
					i[0] < 0 ||
					i[0] > G.length - 1 ||
					i[1] < 0 ||
					i[1] > G[0].length - 1
				)
			) {
				if (i[0] == end[0] && i[1] == end[1]) {
					prev[i] = node;
					visited[i] = true;
					end = i;
					queue = [];
					return prev;
				} else {
					if (G[i[0]][i[1]] == character) {
						if (!(i in visited)) {
							queue.push(i);
							visited[i] = true;
							prev[i] = node;
						}
					}
				}
			}
		}
	}
	return null;
};

const reconstructPath = (start, end, prev) => {
	path = [end];
	if (end == []) return null;
	i = 0;
	while (
		!(
			path[path.length - 1][0] == start[0] &&
			path[path.length - 1][1] == start[1]
		)
	) {
		path.push(prev[path[path.length - 1]]);
	}
	path = path.reverse();
	if (path[0][0] == start[0] && path[0][1] == start[1]) {
		return path;
	}
	return null;
};
