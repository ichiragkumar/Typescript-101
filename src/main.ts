
import express from "express";
import { Request, Response } from "express";
const app = express();


app.get("/", (req:Request, res:Response) => {
	res.json({
		message: "Hi there"
	});
});



app.listen(3000, ()=>{
	console.log("server is running at port 3000");
	
})