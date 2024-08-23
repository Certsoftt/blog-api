import express, { response } from "express"
import dotenv from "dotenv"
import axios from 'axios'
import path, {dirname} from 'path'
import {fileURLToPath} from 'url'

dotenv.config({path: './.env'})

const app = express()
const port = process.env.PORT || 8000
const host = process.env.HOST || '127.0.0.1'
const __dirname = dirname(fileURLToPath(import.meta.url))
const API_URL = `http://${host}:8080`

//middlewares
//application/json
app.use(express.json())
//body request
app.use(express.urlencoded({extended: true}))
//static files
app.use(express.static(path.join(__dirname, "public", "static")))

//homepage - all post
app.get('/', async (req, res)=>{
    let response = await axios.get(`${API_URL}/`)
    try{
        res.render("index.ejs", {
            contents: response.data,
            title: "All Post",
            currentYear: new Date().getFullYear(),
            editButton: "Edit",
            viewButton: "View"
        })
    }catch(err){
        res.render("index.ejs", {content: JSON.stringify(err.message)})
    }
})
//single post
app.post('/posts/:id', async (req, res)=>{
    let id = req.params.id
    let response = await axios.get(`${API_URL}/posts/${id}`)
    try{
        res.render("edit.ejs", {
            content: response.data,
            title: "All Post",
            currentYear: new Date().getFullYear(),
        })
    }catch(err){
        res.render("edit.ejs", {content: JSON.stringify(err.message)})
    }
})
app.listen(port, host, ()=>{
    console.log(`server started on ${process.env.NODE_ENV} mode. Visit: http://${host}:${port}`)
})