#include <iostream>
#include <stack>
using namespace std;

struct TreeNode {
    int val;
    TreeNode *left;
    TreeNode *right;
    TreeNode(int x) : val(x), left(NULL), right(NULL) {}
};

void PreOrderTraversal(TreeNode *root) {
    if(root == NULL) {
        return;
    }

    stack<TreeNode*> s;
    s.push(root);
    while(!s.empty()) {
        auto current = s.top();
        s.pop();
        cout << current->val;
        if(current->right != NULL) {
            s.push(current->right);
        }
        if(current->left != NULL) {
            s.push(current->left);
        }
    }
}