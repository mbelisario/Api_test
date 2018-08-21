module.exports = {
    holaMundo: () => {
        console.log("hola mundo");
    },

    sumarDosValores: (val1, val2) => {
        return val1 + val2;
    },

    sumarDosValoresSimple: (val1, val2) => val1 + val2,

    resultadoFile: (error, data) => {
        console.log(data);
    },
}