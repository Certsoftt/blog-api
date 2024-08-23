import express from "express"
import dotenv from "dotenv"

dotenv.config({path: './.env'})

const app = express()
//application/json
app.use(express.json())
//body req
app.use(express.urlencoded({extended: true}))
const port = process.env.PORT || 5000
const host = process.env.HOST || '127.0.0.1'

let posts = [
    {
      id: 1,
      title: "The Rise of Decentralized Finance",
      content:
        "Decentralized Finance (DeFi) is an emerging and rapidly evolving field in the blockchain industry. It refers to the shift from traditional, centralized financial systems to peer-to-peer finance enabled by decentralized technologies built on Ethereum and other blockchains. With the promise of reduced dependency on the traditional banking sector, DeFi platforms offer a wide range of services, from lending and borrowing to insurance and trading.",
      author: "Alex Thompson",
      date: "2023-08-01T10:00:00Z",
    },
    {
      id: 2,
      title: "The Impact of Artificial Intelligence on Modern Businesses",
      content:
        "Artificial Intelligence (AI) is no longer a concept of the future. It's very much a part of our present, reshaping industries and enhancing the capabilities of existing systems. From automating routine tasks to offering intelligent insights, AI is proving to be a boon for businesses. With advancements in machine learning and deep learning, businesses can now address previously insurmountable problems and tap into new opportunities.",
      author: "Mia Williams",
      date: "2023-08-05T14:30:00Z",
    },
    {
      id: 3,
      title: "Sustainable Living: Tips for an Eco-Friendly Lifestyle",
      content:
        "Sustainability is more than just a buzzword; it's a way of life. As the effects of climate change become more pronounced, there's a growing realization about the need to live sustainably. From reducing waste and conserving energy to supporting eco-friendly products, there are numerous ways we can make our daily lives more environmentally friendly. This post will explore practical tips and habits that can make a significant difference.",
      author: "Samuel Green",
      date: "2023-08-10T09:15:00Z",
    },
  ];

//get a post
app.get('/posts/:id', (req, res)=>{
    let id = Number(req.params.id)
    let useId = id - 1
    if(id){
        res.status(200).json(posts[useId])
    }
})
//get all post
app.get('/', (req, res)=>{
    res.status(200).json(posts)
})
//add new post
//edit a post
//delete a post
//delete all post

app.listen(port, host, ()=>{
    console.log(`server started on ${process.env.NODE_ENV} mode. Visit: http://${host}:${port}`)
})