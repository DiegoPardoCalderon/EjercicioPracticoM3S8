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

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~Segunda parte viernes 05-05-2023

var equipo1 = {
    marca:"IBM",
    modelo: "R400",
    ram: 8,
    disco: 240,
    tipo: "HDD"
}

var equipo2 = {
    marca:"Asus",
    modelo: "A15",
    ram: 32,
    disco: 500,
    tipo: "SDD"
}

var proxyEquipo1 = new Proxy(equipo1, {
    get: function(objeto, propiedad){
        if(propiedad == "tipo"){
            return objeto[propiedad].toUpperCase();
        }else {
            return objeto[propiedad]
        }
    },
    set: function(objeto, propiedad, nuevo_valor){
        switch (propiedad) {
            case "ram": 
                if(nuevo_valor != 8 && nuevo_valor != 16 && nuevo_valor != 32){
                    throw "El valores de la RAM debe ser 8, 16 o 32"
                }
                
            break;

            case "disco":
                if(nuevo_valor != 120 && nuevo_valor != 240 && nuevo_valor != 500){
                    throw "el valor de DISCO debe ser 120, 240 o 500"
                }

            break;

            case "tipo":
                if(nuevo_valor.toUpperCase() != "SSD" && nuevo_valor.toUpperCase() != "HDD"){
                    throw "el valor de tipo debe ser SDD o HDD"
                }

            break;
        
            default:
                break;
        }
        objeto[propiedad] = nuevo_valor
    }
})

try {
    proxyEquipo1.ram = 16
    proxyEquipo1.disco= 500
    proxyEquipo1.tipo= "HDD"
    console.log(proxyEquipo1);
    console.log(proxyEquipo1.tipo);
    
} catch (error) {
    console.log(error);
}

