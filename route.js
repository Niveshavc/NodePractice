const fs=require('fs')

const functionList=(request,response)=>{
    const method=request.method
    const url=request.url
    if (url === '/') {
        response.setHeader('Content-Type', 'text/html'); // ✅ Set header before write
        response.write('<html>');
        response.write('<head><title>Message Page</title></head>');
        response.write(`<body>
            <form action="/message" method="POST">
                <input type="text" name="message"/>
                <button type="submit">Send</button>
            </form>
        </body>`);
        response.write('</html>');
        return response.end(); // ✅ Return here to avoid running rest of the code
    }

    if(url==='/message' && method==='POST'){
        const body=[];
        request.on('data',(c)=>{
            console.log(c)
            body.push(c)
        })
        request.on('end',()=>{
            const parsedBody=Buffer.concat(body).toString()
            console.log(parsedBody)
            const message=parsedBody.split('=')[1]
            fs.writeFileSync('message.txt',message)
        })
        
        response.statusCode=302
        response.setHeader('Location','/')
        return response.end()
    }

     

    // If not '/', run this block
    response.setHeader('Content-Type', 'text/html'); // ✅ Header first
    response.write('<html>');
    response.write('<head><title>Welcome</title></head>');
    response.write('<body><h1>My name is Nivesh. What about your name?</h1></body>');
    response.write('</html>');
    response.end();
}

module.exports=functionList