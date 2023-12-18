const kvArray = [
    { key: 1, Value : 10},
    { key: 2, Value : 20},
    { key: 3, Value : 30},

];

const reformatdArray = kvArray.map (({key,value})=>({[key]:value}));
console.log(reformatdArray);
console.log(kvArray);