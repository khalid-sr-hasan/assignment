function checkName(name){
    if(typeof name !== 'string'){
        return ('invalid')
    }
    const InputName = name.charAt(name.length -1)
    const lowerCase = InputName.toLowerCase();
    const lastLatter = ['a', 'y', 'i', 'e', 'o', 'u', 'w'];

    if(lastLatter.includes(lowerCase)){
        return ('bad name')
    }else{
        return ('Good Name')
    }
};

console.log(checkName('nahida'))