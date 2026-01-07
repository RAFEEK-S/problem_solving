
// find wheather number in ranges 

const range = (m,n,x) => {
        if(n>m && n<x){
           return "yes number is in ranges"
        }else {
           return "number not in the range"
        }
}
console.log(range(5,6,7))