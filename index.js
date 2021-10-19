const app = require('express')();
const PORT = 8080;

app.listen(
    PORT,
    () => console.log(`Listening on port ${PORT}`)
)

app.get('/projects', (req,res) => {
res.status(200).send({name:'jack rigan' , age: '20'})
})

app.get('/projects/:id', (req,res) => {
    const {id} = req.params;
    const {name} = req.body;

if(!name) {
    res.status(418).send({message: 'we need a logo'})

}
res.send({
    name : `${name}`
})
})