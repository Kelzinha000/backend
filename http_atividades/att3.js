const { parse } = require('path');
const url = require('url')
const adress = ' https://www.example.com/path/to/resource?param1=value1#section'
const parseUrl = new url.URL(adress);

console.log('protocolo:',parseUrl.protocol)
console.log('nome da host',parseUrl.host)
console.log('caminho da url',parseUrl.pathname)
console.log('parâmetros de consulta',parseUrl.origin)
console.log('fragmento da URL',parseUrl.search)



