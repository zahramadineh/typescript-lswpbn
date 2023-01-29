import { Tree } from './types';
import iterativeSearch from './iterativeSearch';

const frontier = 3; // number of root's children to determine the type of tree
export function findPath(tree: Tree, id: number): Tree[] | undefined {
  // implement your code here

  // wide tree
  // if (tree.items.length > frontier) return iterativeSearch(tree, id, 'dfs');
  // deep tree
  // else return iterativeSearch(tree, id, 'bfs');

  return iterativeSearch(tree, id, 'bfs'); // in this example bfs has better performance than bfs
}
