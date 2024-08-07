/* #4 dirname filename
-   __dirname: percorso cartella corrente
-   __filename : nome del file
-   require: funzione per usare moduli , richiama i moduli
-   module: info sul modulo corrente
-   process:info relative all'mabinete di esecuzione esempio produzione o test 

    console.log("DIRNAME: ",__dirname);
    console.log("FILENAME: ",__filename);
    console.log("REQUIRE: ",require);
    console.log("MODULE: ",module);
    console.log("PROCESS: ",process);
*/
/* #5 moduli
-   moduli pacchetti -> dipendenze: interni (fatti da noi) , built-in (di node), esterni
-   esmpio di modulo
-   esportare module.export 
-   importare modulo con require
-   sintassi alternativa
-   funzioni invocate da require

backtick ` : ALT + 96
tilde ~ : ALT + 126
commentare : CTRL + ù
//const salutare=require('./utils') //il "." indica che è un nostro file 

const saluta=require('./utils') //il "." indica che è un nostro file 

const exportObject=require('./nomi') // il comando require esegue anche il codice 

//const nomi=require('./nomi')
//console.log(nomi)
// saluta(nomi.persona1)
// saluta("Anna")
// saluta(nomi.persona2)
// saluta(nomi.persona3)
// saluta(nomi.persona4)

console.log(exportObject)

saluta(nomi.persona4)

*/
/* #6 moduli buil in
-   cosa sono
-   importare modulo OS
-   userinfo,uptime,version,arch
-   importare modulo path
-   separator, join (con sottocartelle),basename,resolve (èpercorsi assoluti)

        console.log(os.arch())
        console.log(os.userInfo())
        console.log(os.uptime())
        console.log(os.version())

        const prova ={
        nome: os.type(),
        release : os.release(),
        memoria: os.totalmem(),
        disponibile: os.freemem() 
        }

        console.log(prova)

        const path=require('path')

        console.log("separatore: ",path.sep) //separatore


        const percorso = path.join('/dir','sottodir','prova.txt')

        console.log("percorso: ",percorso)

        console.log("nomefile: ",path.basename(percorso))

        const percorsoassoluto=path.resolve(__dirname,'dir','sottodir','prova.txt')
        console.log("percorsoass: ",percorsoassoluto)

*/
/* #7 FS asincrono e sincrono
-   FS sincrono (readFileSync, writeFileSync)
-   leggere file , scrivere file (override, append con {flag:a}), creare un file
-   FS asincrono (readFile, writeFile)
-   sync vs async 
-   blocking code : blocca l'esecuzione di altri user, no-blocking code: non blocca l'esecuzione di altri user
//SYNC
//  const {readFileSync,writeFileSync} = require ('fs')

//  console.log("comincio sync...")

//  const prova=readFileSync('./cartella/prova.txt','utf-8')
//  const ciao=readFileSync('./cartella/ciao.txt','utf-8')

//  writeFileSync('./cartella/prova.txt','bella')

//  console.log("ho finito sync...")

//  console.log("passo al prossimo compito")
// writeFileSync('./cartella/prova.txt',' per te ',{flag:'a'}) //va in append
// writeFileSync('./cartella/bella.txt',' bella ') //crea file


//ASYNC
// const {readFile,writeFile} = require ('fs')
// console.log("comincio async...")
// readFile('./cartella/prova.txt','utf-8',(error,result)=>{ //funzione di callback quando ha finito di fare la lettura la richiama
//     if (error){console.log(error);return}
//     const prova = result;

//     readFile('./cartella/ciao.txt','utf-8',(error,result)=>{ 
//         if (error){console.log(error);return}
//         const ciao = result;

//         writeFile('./cartella/bella.txt',' ciao ciaoissimo ',(error,result)=>{
//             if (error){console.log(error);return}
//             console.log("ho finito async...")
//         })
//     })
// })
// console.log("passo al prossimo compito")
*/
/* #8 modulo server http
-   creare server 
-   creare server con risposta di default
-   mettere server in ascolto
-   gestire richieste routing errore

const http=require('http');
const server=http.createServer((req,res)=>{
if(req.url === "/"){
    res.end("ciao");

} else //senza else va in errore perchè deve scrivere res una sola volta e poi uscire
if(req.url === "/max"){
    res.end("ciao sono max");

}
else
{res.end(`<h1> errore </h1><p> Torna alla <a href="/"> home page </a> non funziona</p>`);}

})

server.listen(3000);
*/
/* #9 npm node package manage
-   pacchetto (codice riutilizzabile) folder che contiene codice js
-   pacchetto (package) <--> dipendenza (dependency) <--> modulo (module)
-   non c'è controllo sulla pubblicazione --> evitare pacchetti inutili
-   comandi 
    npm
    npm --version
    npm i/install nome_pacchetto
    npm install -g nome_pacchetto
    npm uninstall
-   differenze tra istallazione locale e globale    
*/
/* #10 pacchetto json
-   package.json è un file manifest cone le info del nostro progetto
-   si crea manualmente , npm init, npm init -y
-   come è composto
-   installiamo dipendenze : lodash e bootstrap
    npm i lodash
-   disinstalliamo pacchetto npm "npm uninstall" o eliminando package-lock, node-modules e dependency
-   package-lock.json
-   spiegazioni versioni x.y.z major-minor-patch
*/
/* #11 Nodemon
-   facilità l'avvio dell'applicazione e mantiene sempre uprunning l'applicazione 
-   modifica al package.json , aggiungendo 
    "scripts": {
        "start": "nodemon index.js"
    },
    cosi che l'applicazione ad ogni salvataggio rimane up-running
    basta fare "node start"
*/
/* #12 event emitters
-   creare un eventemitter
-   metodi on ed emit
-   passare valori

// const EventEmitter = require('events');

// const cust=new EventEmitter();

// cust.on('messaggio',(nome , anno)=>{
// console.log(`Ciao sono evento messaggio di ${nome} , ${anno}`)

// }); //rimane in ascolto dell'evento "messaggio"

// cust.on('messaggio',()=>{
//     console.log("Ciao sono evento messaggio2")
    
//     }); //rimane in ascolto dell'evento "messaggio"

// cust.emit('messaggio','MAX','2024'); //invia un messaggio
*/
/* #16 introduzione express 
-   pulizia progetto (rimane solo file index.js)
-   npm init -y (crea file package.json)
-   installare express nodemon
    npm i express (consente di gestire api in maniera semplificata)
    npm i nodemon (consente di automatizzare lo start e stop dell'applicativo)
-   import express
-   gestire richieste pagine home ...
*/
/* #17 aggiungere file statici
-   creare cartelle public / static
-   app.use cartella
-   creare pagine html home about contatti
const express = require('express')
const app = express()
app.use(express.static('public')) //per utilizzare le pagine statiche nella directory public

//   app.get('/', function (req, res) {
//     res.send('Hello World')
//   })

app.get('/', function (req, res) {
    res.sendFile('homepage.html',{root: __dirname+"/public"})
    })



//   app.get('/contatti', function (req, res) {
//     res.send('contatti')
//   })

app.get('/contatti', function (req, res) {
    res.sendFile('contatti.html',{root: __dirname+"/public"})
    })

//   app.get('/about',  (req, res) => {
//     res.send('about')
//   })

app.get('/about', function (req, res) {
    res.sendFile('about.html',{root: __dirname+"/public"})
    })

// app.all('*',(req,res)=>{ //sempre alla fine delle varie app.
//     res.send('<h1>Risorsa non trovata </h1>')
// })
  
    app.all('*',(req,res)=>{ //sempre alla fine delle varie app.
        res.sendFile('404.html',{root: __dirname+"/public"})
     })
app.listen(3000)
*/
/* #19 - #21 express json
-   pulire codice 
-   res json esempio
-   res json con file esterno

// ho costruito una specie di database nel file persone.js 
const express = require('express')
const app = express()
const {persone}=require('./persone') //{persone} ne fa lo spacchettamento

app.get('/', function (req, res) {
    res.sendFile('homepage.html',{root: __dirname+"/public"})
    })


    // mi ritorna tutto il database di persone
app.get('/persone', function (req, res) {
    res.json({persone});
    })

    // mi ritorna tutto il database di persone ma solamente 3 attributi 
app.get('/persona', function (req, res) {
        const nuovePersone = persone.map( (persona) =>  // la funzione map suddivide l'array in singoli elementi e su ognuno estrae i 3 parametri 
        {   const {nome,cognome,eta} = persona
            return {nome,cognome,eta}
        })
        res.json(nuovePersone)
})

    // mi ritorna solo la persona con id =2
app.get('/persone/2',  (req, res)=> { //estrae solo l'elemento dell'array che ha id='2' o altri 
    
    const persona = persone.find( (persona) =>  persona.id === "2")
    res.json(persona)
}
)
    // mi ritorna solo la persona con id =1
app.get('/persone/1',  (req, res)=> { //estrae solo l'elemento dell'array che ha id='1' o altri 
    const persona = persone.find( (persona) =>  persona.id === "1")
    res.json(persona)
}
)
    // mi ritorna solo la persona con id passato in input 
app.get('/dinamicaPersona/:id', function (req, res) { //estrae solo l'elemento dell'array che ha id passato 
    const {id} = req.params
    console.log(id)
    const persona = persone.find( (persona) => persona.id === id)
    res.json(persona)
})

app.listen(3000)

*/
/* #22 QUERY STRING  (url param)
-   query string 
-   aggiungere persone
-   aggiungere input per la ricerca
-   search e limit
-   gestire risultato vuoto

// ho costruito una specie di database nel file persone.js 
const express = require('express')
const app = express()
const {persone}=require('./persone') //{persone} ne fa lo spacchettamento

app.get('/', function (req, res) { //richiama la home page
    res.sendFile('homepage.html',{root: __dirname+"/public"})
    })


    // mi ritorna tutto il database di persone
app.get('/persone', function (req, res) {
    res.json({persone});
    })

    // mi ritorna tutto il database di persone ma solamente 3 attributi 
app.get('/persona', function (req, res) {
        const nuovePersone = persone.map( (persona) =>  // la funzione map suddivide l'array in singoli elementi e su ognuno estrae i 3 parametri 
        {   const {nome,cognome,eta} = persona
            return {nome,cognome,eta}
        })
        res.json(nuovePersone)
})

    // mi ritorna solo la persona con id =2
app.get('/persona/2',  (req, res)=> { //estrae solo l'elemento dell'array che ha id='2' o altri 
    
    const persona = persone.find( (persona) =>  persona.id === "2")
    res.json(persona)
}
)

    
    // mi ritorna solo la persona con id =1
app.get('/persona/1',  (req, res)=> { //estrae solo l'elemento dell'array che ha id='1' o altri 
    const persona = persone.find( (persona) =>  persona.id === "1")
    res.json(persona)
}
)
    //UTILIZZO DEL req.param col carattere ":"
    // mi ritorna solo la persona con id passato in input 
app.get('/personeDinamiche/:id', function (req, res) { //estrae solo l'elemento dell'array che ha id passato 
    const {id} = req.params
    console.log(id)
    const persona = persone.find( (persona) => persona.id === id)
    if(!persona)
    {
        return res.status(404).json({messaggio: "non trovato",code: 404})
    }
    res.json(persona)
})

    //UTILIZZO DEL req.query col carattere "?"
    //es . http://localhost:3000/persone/search?nome=luca&cognome=rossi

    //questa get riceve in input http://localhost:3000/persone/search?query=A

    app.get('/persone/search',  (req, res)=> { 
        
        const {query,limit} =req.query //suddivide la res query negli unici due parametri
        let personeFiltrate = [...persone] //assegna ad una variabile il contenuto dell'array persone
        console.log("stampo query",query)
        console.log("stampo query",limit)
        //console.log("stampo personeFiltrate",persone)
        if (query) //se query ha dei valori 
        {
            personeFiltrate=personeFiltrate.filter( (persona) => { //creo una funzione alla quale passo ogni elemento dell'array che chiamo persona
               //l'oggetto persona può referenziare tutti gli attributi 
                return persona.nome.startsWith(query) //e ritorno le perone che inziamo per il valore indicato in query
            }
            )
        }
        
        if (limit) //se query ha dei valori 
        {
            personeFiltrate=personeFiltrate.slice(0,Number(limit)) //da solo il numero di risultati indicato nel limit 
        }

        if (personeFiltrate.length<1){
            return res.status(200).json({success: "true", data: []})
        }

        res.status(200).json(personeFiltrate)
    })
    

app.listen(3000)
*/
/* #23 MIDDLEWARE
-   creare un middleware di esempio per due endpoint (req,res,next)
-   parametro next
-   app.use
-   app.use per alcuni percorsi
-   multiple funzioni middleware app.use ([func1,func2])
-   interrompere il flusso con un middleware  (esempio autorizzazione)
-   middleware custom / espress (static) / terze parti
const express = require('express')
const app = express()
const middlewareProva = require ('./middlewareProva')
const auth = require ('./auth')

//app.use(middlewareProva) //consente di applicare il middleawareProva a tutta l'app anzichè ripeterlo per ogni get
//app.use('/persone',middlewareProva) //consente di applicare il middleawareProva solo ad alcuni percorsi da un path in poi
//app.use('/persone',[auth,middlewareProva]) //posso inserire più middleware e va inserito prima degli endpoint
app.use(middlewareProva) //posso inserire più middleware e va inserito prima degli endpoint
// app.get('/',middlewareProva, function (req, res) { //richiama la home page ma metto in mezzo la chiamata al middlewareProva
//     res.sendFile('homepage.html',{root: __dirname+"/public"})
//     })
// app.get('/about',middlewareProva, function (req, res) { //richiama la home page
//     res.sendFile('about.html',{root: __dirname+"/public"})
//     })

app.get('/',  (req, res)=> { //richiama la home page ma metto in mezzo la chiamata al middlewareProva
    res.sendFile('homepage.html',{root: __dirname+"/public"})
    })
app.get('/about',  (req, res)=> { //richiama la home page
    res.sendFile('about.html',{root: __dirname+"/public"})
    })

    app.get('/persone/ciao',  (req, res)=> { //richiama la home page
        res.sendFile('about.html',{root: __dirname+"/public"})
        })
    app.get('/persone/miao',  (req, res)=> { //richiama la home page
        res.sendFile('about.html',{root: __dirname+"/public"})
        })        
    
        app.get('/areaprivata',auth,  (req, res)=> { //richiama la home page
            res.send('AREA PRIVATA')
            })        
        
        

app.listen(3000)

*/
/* #24,25,26,27
-   postman
-   uso api GET,POST,PUT,DELETE
   const express = require('express')
    const app = express()
    const {persone}=require('./persone')

    app.use(express.json()) //uso questo middleware per gestoire i json 

    app.get('/',  (req, res)=> { //richiama la home page ma metto in mezzo la chiamata al middlewareProva
        res.sendFile('homepage.html',{root: __dirname+"/public"})
    })

    app.get('/api/persone/',  (req, res)=> { 
        res.status(200).json({success:true,data:persone})
        })

    app.get('/api/persone/:id',  (req, res)=> { 
        const {id} = req.params
        const persona = persone.find( (persona) => persona.id === id)
        if(!persona)
        {
            return res.status(404).json({messaggio: "non trovato",code: 404})
        }
        res.json({success:true,data:persona})
    })

    app.post('/api/persone',  (req, res)=> { 
        const persona = req.body
        console.log(persona)
        persone.push(persona)
        res.status(200).json({success:true,data:persone})
        })

    app.put('/api/persone/:id',  (req, res)=> { 
        const {id} = req.params
        const persona = req.body
        persone[Number(id)-1]=persona
        res.status(200).json({success:true,data:persone})
    })

    app.delete('/api/persone/:id',  (req, res)=> { 
        const {id} = req.params
        const index = persone.findIndex( (persona) => persona.id === id)
        persone.splice(index,1)
        res.status(200).json({success:true,data:persone})
    })  

app.listen(3000)
*/
/* #28 ROUTING
-   creare file di routing 
-   importare modulo
-   utilizzare router
-   esempio con piu router
*/
    const express = require('express')
    const app = express()
    const personeRouter=require('./routes/personeRoutes')

    app.use(express.json()) //uso questo middleware per gestoire i json 
    app.use('/api/persone',personeRouter) //uso questo router per questo path ma posso usarne anche piu di uno 

    app.get('/',  (req, res)=> { //richiama la home page ma metto in mezzo la chiamata al middlewareProva
        res.sendFile('homepage.html',{root: __dirname+"/public"})
    })

    app.listen(3000)