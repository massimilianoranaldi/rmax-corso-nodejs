// i middleware di solito sono su file a parte
const auth= (req,res,next) =>{ //creo un middleware 
    const {user} = req.query
if(user == 'Luca')
{
    console.log('accesso effettuato')
}
else
{
    console.log('accesso NON effettuato')
    res.status(401).send('accesso NON effettuato')
}

    
    next() // in alternativa anche res.send("dal middleware") cosi non torno al chiamante
}
module.exports =auth