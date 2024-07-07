const express = require('express')
const router = express.Router()
const {persone}=require('../persone') //risalgo di una directory



router.get('/',  (req, res)=> { 
    res.status(200).json({success:true,data:persone})
    })

    router.get('/:id',  (req, res)=> { 
    const {id} = req.params
    const persona = persone.find( (persona) => persona.id === id)
    if(!persona)
    {
        return res.status(404).json({messaggio: "non trovato",code: 404})
    }
    res.json({success:true,data:persona})
})

router.post('/',  (req, res)=> { 
    const persona = req.body
    console.log(persona)
    persone.push(persona)
    res.status(200).json({success:true,data:persone})
    })

    router.put('/:id',  (req, res)=> { 
    const {id} = req.params
    const persona = req.body
    persone[Number(id)-1]=persona
    res.status(200).json({success:true,data:persone})
})

router.delete('/:id',  (req, res)=> { 
    const {id} = req.params
    const index = persone.findIndex( (persona) => persona.id === id)
    persone.splice(index,1)
    res.status(200).json({success:true,data:persone})
})  

module.exports = router