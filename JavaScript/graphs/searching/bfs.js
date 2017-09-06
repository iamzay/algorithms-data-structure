function buildPath(parent,targetNode){
  let path=[];
  path.push(targetNode);
  while(parent[targetNode]){
    targetNode=parent[targetNode];
    path.push(targetNode);
  }
  return path.reverse();
}

/* 使用bfs寻找startNode到targetNode的最短路径 */
function bfs(graph,startNode,targetNode){
  let visited=[];
  let queue=[];
  let parent=[];

  queue.push(startNode);
  visited[startNode]=true;
  parent[startNode]=null;

  while(queue.length){
    const current=queue.shift();
    if(current===targetNode){
      return buildPath(parent,targetNode);
    }
    for(let i=0;i<graph.length;++i){
      if(graph[current][i]&&!visited[i]&&i!==current){
        visited[i]=true;
        parent[i]=current;
        queue.push(i);
      }
    }
  }
}

/* var graph = [[1, 1, 0, 0, 1, 0],
 *              [1, 0, 1, 0, 1, 0],
 *              [0, 1, 0, 1, 0, 0],
 *              [0, 0, 1, 0, 1, 1],
 *              [1, 1, 0, 1, 0, 0],
 *              [0, 0, 0, 1, 0, 0]];
 * var shortestPath = bfs(graph, 1, 5); // [1, 2, 3, 5]
 * console.log(shortestPath);*/

export default bfs;
