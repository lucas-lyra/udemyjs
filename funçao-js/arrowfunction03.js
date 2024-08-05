let compComThis = function (param){
    console.log(this === param);
    
}
compComThis(global)