const id = Symbol('id');
var persona = {}
persona[id] = 18
persona.nombre = "Diego";
persona.apellidos = "Sandoval";
persona['Edad'] = 28
// console.log(persona)


var llaves = Object.keys(persona)
var valores = Object.values(persona)
var atributes = Object.entries(persona)
var simbolos = Object.getOwnPropertySymbols(persona)

// console.log(persona);
// console.log("Llaves", llaves);
// console.log("valores", valores);
// console.log("atributos", atributos);
// console.log("Simbolos", simbolos);
// console.log(persona[simbolos[0]])

// console.log("~~~~~~~~~~~~~~~~")
// for (const key of atributos) {
//     console.log(key[0], " - ", key[1]);
// }