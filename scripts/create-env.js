const fs = require('fs')
fs.writeFileSync('./.env', `CLIENT_ID=${process.env.CLIENT_ID}\n`)