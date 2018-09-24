#include <iostream>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void PostOrderTraversal(TreeNode *root) {
    if(root == NULL) {
        return;
    }

    stack<TreeNode*> reverse,result;
    reverse.push(root);
    while(!reverse.empty()){
        auto current = reverse.top();
        result.push(current);
        reverse.pop();
        if(current->left != NULL) {
            reverse.push(current->left);
        }
        if(current->right != NULL) {
            reverse.push(current->right);
        }
    }
    // now result stack contains post-order traversal
}