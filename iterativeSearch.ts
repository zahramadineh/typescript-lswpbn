import { Tree } from './types';

export default function iterativeSearch(
  tree: Tree,
  id: number,
  searchType: 'dfs' | 'bfs' = 'dfs'
): Tree[] | undefined {
  let visited = {};
  visited[tree.id] = true;
  let list = [[tree]]; //  create a list of the nodes to visit

  //  iterate over the nodes in the tree
  while (list.length > 0) {
    //  get the current path and lead node in the path
    let path = list.pop();
    let current = path.slice(-1)[0];

    //  if the lead node is the goal, return the path
    if (current.id === id) return path; //.map(node => node.id)

    current.items.map((child) => {
      if (!visited[child.id]) {
        visited[child.id] = true;
        // add child to the path and enqueue the new path
        searchType === 'dfs'
          ? list.push([...path, child])
          : list.unshift([...path, child]);
      }
    });
  }
  console.log('goal not in tree');
}
