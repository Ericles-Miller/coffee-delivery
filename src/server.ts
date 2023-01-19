import express from 'express';

const app = express()

app.listen()

app.get("/", (request,response) =>{
	return response.json({message:"Hello World"});
});

app.listen(3333)