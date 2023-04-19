// '#' as available path, originPath: correctPath
// TODO: do shortest by including mode to change from 0 to '#'

let rows = 100;
let columns = 100;
let maze = [];
let traverse_done = false;
let end = [rows - 1, columns - 1];
let done = false;
const speed = 0.01;
let j = 0,
	ms = 0,
	r = 0,
	c = 0;

for (let i = 0; i < rows; i++) {
	maze[i] = new Array(columns).fill(0);
}

maze = generatePath(maze, [0, 0], [rows - 1, columns - 1], 3);
solution = maze_wall(maze, 0, 0);
maze = solution[0];
traverse = solution[1];
shortestPath = solve(maze, [0,0],[99,99],'#');

function setup() {
	let cnv = createCanvas(600, 600);
	let x = (windowWidth - width) / 2;
	let y = (windowHeight - height) / 2;
	cnv.position(x, y);
	frameRate(60);
}

function draw() {
	const cellWidth = width / columns;
	if (traverse_done == false) {
		const y = height * (traverse[j][0] / rows);
		const x = width * (traverse[j][1] / columns);
		noStroke();
		done == true ? fill("rgb(0, 255, 0)") : fill("rgb(0, 0, 0)");
		square(x, y, cellWidth);
		j += 1;
		if (j == traverse.length) {
			if (done == true) {
				traverse_done = true;
			} else {
				traverse = shortestPath;
				j = 0;
				done = true;
			}
		}
	}
}
