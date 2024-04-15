import http, {request } from 'node:http'

const PORT = 3333;

const participants =[]

const server = http.createServer((request, response)=>{
    const {method, url} = request ;
    if(url === '/participants' && method === "GET"){  
     response.setHeader('Content-Type','application/json');
     response.end(JSON.stringify(participants));

    }else if(url === '/participants/count' && method === "GET"){  
        response.setHeader('Content-Type','application/json');
        response.end(JSON.stringify(participants.length));
    
    }else if(url === '/participants' && method === "POST"){
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk.toString()
        })
        request.on('end', ()=>{  
        const novoParticipants = JSON.parse(body)
        novoParticipants.id = participants.length + 1
        participants.push(novoParticipants)
        response.writeHead(201, {'Content-Type': 'application/json'})
        response.end(JSON.stringify(novoParticipants))
        })

    }else if(url === '/participants/' && method === "GET"){
     const participantId = url.split('/')[2]
     const participant = participants.find((participant) => participant.id == participantId )   

     if(participant){
        response.setHeader("Content-Type", "application/json");
        response.end(JSON.stringify(participant))
    }else{
        response.writeHead(404, {"Content-Type":"application/json"})
        response.end(JSON.stringify({message: "Participante não encontrado"}))
    }

    }else if(url === '/participants/count/over18' && method === "GET"){
        if(idade >= "18" ){
        response.setHeader('Content-Type','application/json');
        response.end(JSON.stringify(participants.length));
        } 
    }

})
server.listen(PORT,()=>{
  console.log(`Servidor on PORT: ${PORT}`)
})