const express = require('express')
const app = express()
var bodyParser = require('body-parser')
var cors = require('cors')

const database = {
  users: [{
    id: '123',
    name: 'Bill',
    email: 'billsheng@deltahack.com',
    entries: 0,
    userType:'Fan',
    joined: new Date()
  }],
  secrets: [{
    users_id: '123',
    hash: '1234'
  },
  {
    users_id: '124',
    hash: 'a'
  }
  ]
}

app.use(cors());
app.use(bodyParser.json());
app.get('/', (req, res) => res.send("connection is established"))

app.post('/signin', (req, res) => {

  console.log(req.body);
  var a = req.body;
  console.log(a.email) 
  console.log(database.users[0].email)
  console.log(a.password)
  console.log(database.secrets[0])

  if (a.email === database.users[0].email && a.password === database.secrets[0].hash) {
    res.send(database.users[0]);
  } else {
    res.send(database.users[0]);
  }
})



app.post('/register', (req, res) => {
  id_increment = database.users[database.users.length - 1].id
  id_increment = parseInt(id_increment) +1
  database.users.push({
    id: id_increment.toString(),
    name: req.body.name,
    email: req.body.email,
    entries: 0,
    joined: new Date(),
    userType:req.body.userType
  })
  res.send(database.users[database.users.length - 1])
})

app.get('/profile/:userId', (req, res) => {
  database.users.forEach(user => {
    if (user.id === req.params.userId) {
      console.log(user)
      return res.send(user);
    }
  })
  // res.json('no user')

})

app.listen(3001, () => console.log('Example app listening on port 3001!'))
