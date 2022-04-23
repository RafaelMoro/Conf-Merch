const fs = require('fs')
fs.writeFileSync('./.env', `API=${process.env.CLIENT_ID}\n`)