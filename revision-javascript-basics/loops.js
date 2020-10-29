const arr  = [1,4,9,16,25,36,49]
for(let i=0; i<arr.length; i++){
    console.log(arr[i]);
}
arr.forEach((item, idx) => {
    console.log(item, idx);
})
