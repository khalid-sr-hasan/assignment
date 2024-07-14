function deleteInvalids(array){
    if(!Array.isArray(array)){
        return ('invalid')
    }
    let a = [];
    for(let arr of array){
        if(!isNaN(arr) && typeof arr !== 'object'){
            a.push(arr);
            
        }
    }
    return a;
};

const array = deleteInvalids(['a', 10, null, NaN])
console.log(array)

