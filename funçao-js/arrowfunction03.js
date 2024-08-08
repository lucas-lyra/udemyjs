let compComThis = function (param){
    console.log(this === param);
    
}
compComThis(global)

const obj = {} 
compComThis = compComThis.bind(obj)
compComThis(global)
compComThis(obj)


let compComThisArrow = param => console.log(this === param);
compComThisArrow(global)
compComThisArrow(module.exports)

comparacomthisarrow = compComThisArrow.bind(obj)
comparacomthisarrow (obj)
comparacomthisarrow(module.exports)
