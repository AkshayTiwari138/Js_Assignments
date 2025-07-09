let arr= [1,3,4,2]
for( let i=0; i<arr.length;i++){
    let num=arr[i]
    for(let j=0; j<arr.length;j++){
        if(num>arr[j]){
            swap(arr,i,j)
        }
    }
}
function swap(arr,i,j){
   let temp=arr[i]
    arr[i]=arr[j]
    arr[j]=temp;

}
console.log(arr)