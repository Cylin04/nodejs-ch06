const express= require('express')
const bodyParser= require('body-parser')
const app = express()

app.use(bodyParser.json())

const tours=[
    {id:0,name:'Hood River',price:99.99},
    {id:1,name:'Oregon Coast',price:149.95}
]

app.get('/api/tours',(req,res)=>res.json(tours))

app.put('/api/tours/:id',(req,res)=>{
    const p = tours.find(p=>p.id === parseInt(req.params.id))
    if(!p) return res.status(404).json({error: 'no such tour exists'})
    if(req.body.name) p.name = req.body.name
    if(req.body.price) p.price= req.body.price
    res.json({success: true})
})


app.get('*',(req,res)=>res.send('<p>Use a tool like <a href="https://www.youtube.com/>Postman</a>'+
`or <a href="https://curl.haxx.se/">curl</a>to try the following:</p>`+
`<pre>`+`GET/api/tours\n`+ `PUT/api/tour/0 with JSON body{"price":129.99}\n` +
`GET/api/tours`))


const port = process.env.PORT || 3000
app.listen(port,()=>console.log(`\nnavigate to http://localhost: ${port}\n`))