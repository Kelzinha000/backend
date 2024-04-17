import http from 'node:http'
import path from 'node:path';

const PORT = 3333
const participants = []
const server = http.createServer((request, response )=>{
    const {url, method}= request
    console.log('URL: ',url)
    if(url === '/participants' && method === 'GET'){
        //   console.log('GET participants ')
        response.setHeader('Content-Type', 'application/json')
        response.end(JSON.stringify(participants))
    }else if(url === "/participants/count" && method === 'GET'){
        console.log('GET /participants/count')
    }else if(url === "/participants/count/over18" && method === 'GET'){
        console.log('GET /participants/count/over18')
    }else if(url === "/participants/city/most" && method === 'GET'){
        console.log('GET /participants/city/most')
    }else if(url === "/participants" && method === 'POST'){
        // console.log('POST /participants ')
        let body = ''
        request.on('data', (chunk)=>{
            body += chunk
        })
        request.on('end',()=>{
            const participant = JSON.parse(body)
            if(participant.age < 16){ // condicional da idade, tranformou em um objeto com o comado JSON.parse
               response.writeHead(403, {"Content-Type":"application/json"})
                return response.end(
                JSON.stringify({message: "Apenas usuário maiores que 15 anos podem acessar essa página"})
               ) 
            } if(participant.password !== participant.confirmPassword){
                 response.writeHead(400, {"Content-Type": "application/json"})
                 return response.end(
                    JSON.stringify({message: "Apenas usuário maiores que 15 anos podem acessar essa página"})
                 )
            }
        participant.id = participant.length + 1
        participant.push(participant)
        response.writeHead(201, {"Content-Type": "application/json"})
        JSON.stringify({message: "Apenas usuário maiores que 15 anos podem acessar essa página"})
            console.log(participant)
            response.end()
        })
    }else if(url.startsWith("/participants") && method === 'PUT'){
        // console.log('PUT /participants ')
        const participantId = url.split('/')[2]

        let body = ''
        request.on('data', (chunck)=>{
            body += chunck
        })
        request.on('end', ()=>{ 
         const UpdateParticipant = JSON.paser(body)
         const index = participant.findIndex(
            (participant)=> participant.id == participantId
         )
         if(index !== -1){
          participants[index] = {...participants[index],...UpdateParticipant}
          response.setHeader('Content-Type','application/json')
          response.end(JSON.stringify(participantId[index])) 
        }else{
        response.writeHead(404, {"Content=Type": "application/json"})
        return response.end(
            JSON.stringify({message:"Participantes não encontrado"})
        )
         }
        })
    }else if(url.startsWith("/participants") && method === 'DELETE'){
        // console.log('DELETE participants ')
        const participantId = url.split("/")[2]
        const 
    }else if(url.startsWith("/participants/") && method === 'GET'){
        // console.log('DELETE Único participants ')
        const participantId = url.split('/')[2]
        const findParticipant = participants.find((participant)=>{
        return participant.id == participantId
        })

        if(!findParticipant){
            response.writeHead(404, {"Content-Type": "application/json"})
            JSON.end(JSON.stringify(findParticipant))
        }
    }else{
        response.writeHead(404, {"Content-Type": "application/json"});
        response.end(
            JSON.stringify({codigo: 404, message: "Página não encontrada"})
        )
    }
});

server.listen(PORT, ()=>{
    console.log(`Servidor está ON`+PORT)
})