<h1 align="center">Custom Maze Generation (with Animation!)</h1>
<p align="center" style="margin-bottom: 2px;">
	<img src="assets/maze.gif" width=30% width=30%/>
</p>
<p align="center" style="margin-top:0px;">Figure 1: Maze Generation with DFS Shortest Path Finder (Speed up 2x)</p>
<p align="center">
	<img src="https://img.shields.io/github/license/LeeSinLiang/Custom-Maze-Generation-Animation.svg?style=flat-square" alt="license"/>
	<img alt="Code language count" src="https://img.shields.io/github/languages/count/LeeSinLiang/Custom-Maze-Generation-Animation?color=blue&style=flat-square" />
	<img alt="GitHub top language" src="https://img.shields.io/github/languages/top/LeeSinLiang/Custom-Maze-Generation-Animation?color=blue&style=flat-square" />
</p>

## Maze Generation
1. DFS Traversal.
2. Random shuffle 4 directions (Up, Down, Left, Right) while traversing to destination.
3. Repeat step 1-2 with random start coords in main path and random end coords. This will be our available paths to traverse.
4. Once we finished setting our available path, start constructing maze's wall by traversing while making sure wall does not collide with path. Again, the coords are shuffled.
5. Run DFS to find the shortest path to traverse after the maze construction.
6. Voilà!

## Resources

 - [Depth First Search (DFS) Explained](https://www.youtube.com/watch?v=PMMc4VsIacU)
 - [Flood Fill Animation](https://github.com/LeeSinLiang/FloodFillingAnimation)
 - [p5.js by TheCodingTrain](https://www.youtube.com/playlist?list=PLRqwX-V7Uu6Zy51Q-x9tMWIv9cueOFTFA)
 - [p5.js Official Website](https://p5js.org/)

## Original Demo (Non speed up)
maze_generation/assets/maze_original.mp4
