import express from "express"
import bodyParser from "body-parser"


const app = express();

const PORT = 3000
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    res.send("Hi")
})

app.listen(PORT, () => {
    console.log(`Server is Listening at ${PORT}`)
})



