function add(a,b){
    if(a===undefined || b===undefined){
        return 0;
    }
    return a+b;
}
console.log(add(1,2));
console.log(add(1));

function maxNum(arr){
    if(! Array.isArray(arr)){
        return 0;
    }
    return Math.max(...arr);
}
let a=[1,2,5,2,4,1,9];
let o={id:12334,name:"小乖",age:"18"};
console.log(maxNum(a));

//数组的去重
function arrayToHeavy(arr){
    let arr1=[];
    arr.forEach(item=>{
        if(arr1.indexOf(item)===-1){
            arr1.push(item);
        }
    })
    return arr1;
}
console.log(arrayToHeavy(a));