/* #5

        const persona1 ="Luca"
        const persona2 ="Marco"
        const persona4 ="Gino"



        // se voglio esportare in questo modo, il comando module.exports={persona1,persona2} deve andare in testa altrimenti
        // viene sovrascritto
                // module.exports={persona1,persona2} //prima
                // module.exports.persona3 ="Max"
                // module.exports.persona4 = persona4
        // in alternativa si puo usare 

        const exportObject={
            persona1,
            persona2,
            persona3: "Max",
            persona4
        };

        module.exports =exportObject

*/