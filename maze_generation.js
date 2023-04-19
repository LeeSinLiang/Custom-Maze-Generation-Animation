const generatePath = (maze, start, end, nPath) => {
	let nBranch = Math.floor(Math.random() * 20) + 1;

	if (nPath == 0) {
		return maze;
	}
	prev = solve(maze, start, end, 0);
	if (prev != null) {
		prev[start] = start;
		sPath = reconstructPath(start, end, prev);
		for (let i of sPath) {
			maze[i[0]][i[1]] = "#";
		}
		if (originPath.length == 0) originPath = sPath;
	}
	for (let j = 0; j < nBranch; j++) {
		let end = [0, 0];
		while (maze[end[0]][end[1]] == "#") {
			end = [
				Math.floor(Math.random() * (maze.length - 1)),
				Math.floor(Math.random() * (maze[0].length - 1)),
			];
		}
		maze = generatePath(
			maze,
			originPath[Math.floor(Math.random() * (originPath.length - 1))],
			end,
			nPath - 1
		);
		// maze = generatePath(maze, sPath[j], end, nPath - 1);
		// consider doing the actual branch w/ paths
	}
	return maze;
};

const maze_wall = (G, x, y) => {
	let direction = "horizontal";
	let coords_check = [];
	let marked = {};
	let traverse = [];
	let queue = [[x, y, direction]];
	let b = false;

	marked[queue[0]] = true;
	while (queue.length > 0) {
		v = queue.pop();
		if (v[2] == "vertical") {
			coords_check = [
				[v[0], v[1] + 1],
				[v[0], v[1] - 1],
			];
		}
		if (v[2] == "horizontal") {
			coords_check = [
				[v[0] + 1, v[1]],
				[v[0] - 1, v[1]],
			];
		}
		b = false;
		if (G[v[0]][v[1]] != "#") {
			if (
				coords_check[0][0] >= 0 &&
				coords_check[0][0] <= G.length - 1 &&
				coords_check[0][1] >= 0 &&
				coords_check[0][1] <= G[0].length - 1 &&
				coords_check[1][0] >= 0 &&
				coords_check[1][0] <= G.length - 1 &&
				coords_check[1][1] >= 0 &&
				coords_check[1][1] <= G[0].length - 1
			) {
				if (
					G[coords_check[0][0]][coords_check[0][1]] != 1 &&
					G[coords_check[1][0]][coords_check[1][1]] != 1
				) {
					G[v[0]][v[1]] = 1;
					traverse.push([v[0], v[1]]);
				}
				b = true;
			} else if (
				coords_check[0][0] >= 0 &&
				coords_check[0][0] <= G.length - 1 &&
				coords_check[0][1] >= 0 &&
				coords_check[0][1] <= G[0].length - 1 &&
				b == false
			) {
				if (
					G[coords_check[0][0]][coords_check[0][1]] != 1 // &&
					// G[coords_check[1][0]][coords_check[1][1]] != 1
				) {
					G[v[0]][v[1]] = 1;
					traverse.push([v[0], v[1]]);
				}
				b = true;
			} else if (
				coords_check[1][0] >= 0 &&
				coords_check[1][0] <= G.length - 1 &&
				coords_check[1][1] >= 0 &&
				coords_check[1][1] <= G[0].length - 1 &&
				b == false
			) {
				if (G[coords_check[1][0]][coords_check[1][1]] != 1) {
					G[v[0]][v[1]] = 1;
					traverse.push([v[0], v[1]]);
				}
			}
		}
		coords = [
			[v[0] + 1, v[1], "vertical"],
			[v[0], v[1] + 1, "horizontal"],
			[v[0] - 1, v[1], "vertical"],
			[v[0], v[1] - 1, "horizontal"],
		];
		coords = shuffleArr(coords);
		for (let i of coords) {
			if (!(i in marked)) {
				if (
					!(
						i[0] < 0 ||
						i[0] > G.length - 1 ||
						i[1] < 0 ||
						i[1] > G[0].length - 1
					) // check if works
				) {
					queue.push(i);
					marked[v] = true;
				}
			}
		}
	}
	return [G, traverse];
};
