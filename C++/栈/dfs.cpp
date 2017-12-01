// 二叉树的深度优先搜索用栈实现
void dfs(Node *root){
  stack<Node *> s;
  s.push(root);
  while(!s.empty()){
    auto cur=s.pop();
    // process cur
    if(cur->left) s.push(cur->left);
    if(cur->right) s.push(cur->right);
  }
}
