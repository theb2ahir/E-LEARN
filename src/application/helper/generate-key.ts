
import crypto from 'crypto'
const tokenKey = crypto.randomBytes(64).toString('hex');
console.log(tokenKey)