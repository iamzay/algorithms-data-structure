/* dfs遍历图 */
function dfs(graph,startNode){
  DFS(graph,startNode,[]);
}

function DFS(graph,current,visited){
  if(visited[current]){
    return;
  }

  console.log(current);
  visited[current]=true;
  for(let i=0;i<graph.length;++i){
    if(graph[current][i]){
      DFS(graph,i,visited);
    }
  }
}

/* var graph = [[1, 0, 0, 0, 1, 0],
 *              [0, 0, 1, 0, 1, 0],
 *              [0, 1, 0, 1, 0, 0],
 *              [0, 0, 1, 0, 1, 1],
 *              [1, 1, 0, 1, 0, 0],
 *              [0, 0, 0, 1, 0, 0]];
 * dfs(graph,0);*/
export default dfs;
