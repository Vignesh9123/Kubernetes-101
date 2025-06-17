import express, {Request, Response} from 'express'

const app = express()


app.get("/pid", (req: Request, res: Response)=>{
	res.json({pid:process.pid})
})

app.listen(3000, ()=>{
	console.log("Server running on port 3000")	
})
