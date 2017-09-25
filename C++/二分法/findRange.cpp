#include <iostream>
#include <vector>
using namespace std;

void findRange(vector<int> &vec,int k){
  int n=vec.size();
  int L,R;
  int l=0,r=n-1;
  while(l<=r){
    int mid=(l+r)/2;
    if(vec[mid]>=k)
      r=mid-1;
    else
      l=mid+1;
  }
  L=l;
  l=0,r=n-1;
  while(l<=r){
    int mid=(l+r)/2;
    if(vec[mid]<=k)
      l=mid+1;
    else
      r=mid-1;
  }
  R=r;
  if(L>R)
    cout<<"not found"<<endl;
  else
    cout<<L<<" "<<R<<endl;
}

int main(){
  vector<int> vec{1,2,3,3,3,4,5};
  for(;;){
    int k;
    cin>>k;
    findRange(vec,k);
  }
}
