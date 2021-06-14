const socket=require("socket.io");
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
} else {
    console.log("Running in PRODUCTION");
}
const app = require("./src/app");
const http = require("http");
const chalk=require("chalk");

const PORT = process.env.PORT || 5000;

const server = http.createServer(app);
const io=socket(server,{
    cors:{
        origin:"*",
        method:["POST","GET"],
    }
});

io.on("connect",(socket)=>{
    socket.on("connectedYo",()=>{
        console.log(chalk.blue("socket connected to client "))
    })
})

server.listen(PORT, () => {
    console.info(chalk.bgGreen.black(`Started Server on port ${PORT}`));
    console.info(chalk.bgBlue.black(`Server created by TechTeron`));
});
