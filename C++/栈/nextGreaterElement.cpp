#include <iostream>
#include <climits>
#include <vector>
#include <stack>
using namespace std;

struct elem{
  elem(int _id,int _value):id(_id),value(_value){}
  int id;
  int value;
};

int main(){
  int n;
  cin>>n;
  vector<int> arr;
  vector<int> ans(n,0);
  int tmp;
  for(int i=0;i<n;++i){
    cin>>tmp;
    arr.push_back(tmp);
  }
  // 在栈中的是还未计算出NGE的元素
  stack<elem> s;
  s.push(elem(0,arr[0]));
  for(int i=1;i<n;++i){
    while(!s.empty()){
      if(arr[i]>s.top().value){
        elem e=s.top();
        ans[e.id]=arr[i];
        s.pop();
      } else
        break;
    }
    s.push(elem(i,arr[i]));
  }
  while(!s.empty()){
    elem e=s.top();
    s.pop();
    ans[e.id]=-1;
  }
  for(int i=0;i<n;++i)
    cout<<ans[i]<<" ";
}
