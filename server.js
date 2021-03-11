const http = require('http');

const server = http.createServer((req, res) => {
  const {headers, url, method} = req;
  console.log(`headers:${JSON.stringify(headers)}, url:${url}, method:${method}`);
  res.write('hello');
  res.end();
})
const PORT = 5000;
server.listen(PORT, () => console.log(`Listening port ${PORT}`))
