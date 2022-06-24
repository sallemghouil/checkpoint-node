const fs = require('fs');

try {
    const data = fs.readFileSync(process.argv[2], 'utf8')
    console.log(data.toString().split('\n').length-1)
  } catch (err) {
    console.error(err)
  }