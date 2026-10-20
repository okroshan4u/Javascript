const crypto = require("crypto");
// this is 
const input = "Roshan"

const hash = crypto.createHash("sha256").update(input).digest('hex')

console.log(hash)
