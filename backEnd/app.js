const express = require('express')
const app = express()
const cors = require('cors')
const bookRoute = require("./routes/bookRoutes")
const userRouter = require('./routes/userRouters')


require('./db/conn') 
app.use(express.json())
app.use(cors());

app.use((req,res,next)=> {
    console.log("HTTP Methos - " +req.method+ ", URL - "+req.url);
    next();
})

app.use('/api/b1',bookRoute);

app.use("/users",userRouter);
// app.use("/note",noteRouter)

app.listen(5000, () => {
    console.log(` server start at http://localhost:5000`)
})


