function counter(val) {
    let count = 1;
    if(val===0){
        return count;
    }
    return function inner(iVal){
        count++;
        if(iVal===0){
            return count;
        }
        return inner;
    }
}

console.log(counter(0));
console.log(counter()(0));
console.log(counter()()()(0));
console.log(counter()()()()()()(0));
