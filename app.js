import express, { Router } from "express";
import postsRouter from "./routers/posts.js"
import modelsRouter from "./routers/models.js"
import notFound from "./middlewares/notFound.js"

const app = express();
const port = 4416;

app.use(express.static("public"));
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Welcome Tifosi❤️")
})
app.use("/posts", postsRouter)
app.use("/models", modelsRouter)
app.use(notFound);

app.listen(port, () => {
    console.log(`Il server è pronto a bootstrappare sulla porta ${port} :)`)
})