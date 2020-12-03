const set = new Set([11,22,55,11]);
set.forEach(function(value,_,map){
    console.log(`The key is: ${_}, value is: ${value}`)
})