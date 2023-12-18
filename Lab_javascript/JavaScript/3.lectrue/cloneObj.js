const obj1 = {
    person : 'Phubet',
    weight : 57
}

//const obj2 = object.assign({},obj1);
const obj2 = {...obj1};
obj2.weight = 70;
console.log(obj1);
console.log(obj2);