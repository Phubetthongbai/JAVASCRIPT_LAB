const array = [15,16,17,18,19];

function reducer(accumulator,curretValue,index){
    const returns = accumulator + curretValue;
    console.log(
        `accumulator: ${accumulator},CurrentValue: ${curretValue}, index ${index}, returns: ${returns}`,
    );
    return returns;
}

array.reduce(reducer);