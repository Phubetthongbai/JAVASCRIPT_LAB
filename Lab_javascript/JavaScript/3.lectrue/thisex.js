const cat = {
    name : "Pipey",
    age : 8,
    WhatName(){
        return this.name;
    },
};

console.log(cat.WhatName());

cat.name = "Nezzar";
console.log(cat.WhatName());