const arrayofNumber = [1,2,3,4];

const sum = arrayofNumber.reduce((accumulator,curretValue) => {
    return accumulator + curretValue;
})

console.log(sum);