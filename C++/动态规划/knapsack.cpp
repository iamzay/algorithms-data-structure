#define maxn 99
int d[maxn][maxn];
int knapsack1(int *v,int *w,int n,int c){
  for(int i=0;i<=n;++i)
    for(int j=0;j<=c;++j){
      if(i==0)
        d[i][c]=0;
      else if(j>=v[i])
        d[i][c]=max(d[i-1][c],d[i-1][c-v[i]+w[i]]);
      else
        d[i][c]=d[i-1][c];
    }
  return d[n][c];
}
