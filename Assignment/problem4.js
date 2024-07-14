function password(obj){
    // const p = Object.keys(obj);
    // const len = obj.birthYear.toString();
    if(Object.keys(obj).length < 3 ||
    obj.birthYear.toString().length <4
    ){
        return ('invalid')
    }
    const name = obj.siteName.charAt(0).toUpperCase();
    let convertName = name+obj.siteName.slice(1);
    return (`${convertName}#${obj.name}@${obj.birthYear}`)
}

console.log(password({name:'nahid', birthYear:202, siteName: 'facebook'}))