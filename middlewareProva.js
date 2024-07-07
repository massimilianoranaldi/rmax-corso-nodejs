// i middleware di solito sono su file a parte
const middlewareProva= (req,res,next) =>{ //creo un middleware 
    const {method,url} = req
    const time=new Date().getMinutes()
    console.log(method,url,time)
    // qui abbiamo bisogno di un comando next() per far ritornare il controllo alla funzione get
    // altrimenti gira all'infinito
    next() // in alternativa anche res.send("dal middleware") cosi non torno al chiamante
}
module.exports =middlewareProva