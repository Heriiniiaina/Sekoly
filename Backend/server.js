import app from "./app.js";

app.listen(process.env.PORT,()=>{
    console.log(`App run on port ${process.env.PORT}`)
})