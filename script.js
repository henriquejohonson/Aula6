let http = require('http');
let url = require('url');
let operacoes = require('./matematica')


http.createServer(function(req, res){
    res.writeHead(200,{'Content-Type':'text/html'})
    let q = url.parse(req.url, true).query
    let a = parseInt(q.numA)
    let b = parseInt(q.numB)

    if(q.opcao == "Mais"){
        res.end("Resultado: " + operacoes.mais(a,b))       
    }
    else if(q.opcao == "Menos"){      
        res.end("Resultado: " + operacoes.menos(a,b)) 
    }
    else if(q.opcao == "Vezes"){       
        res.end("Resultado: " + operacoes.vezes(a,b)) 
    }
    else if(q.opcao =="Divisão"){       
        res.end("Resultado: " + operacoes.divisao(a,b)) 
    }            
}).listen(3000);