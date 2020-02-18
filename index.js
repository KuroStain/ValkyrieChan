const Discord = require("discord.js");
const client = new Discord.Client;
const config = require("./config.json");

var prefix = config.prefix;

client.on("ready", () => {
    console.log(`${client.user.username} lista para las pruebas!`);
    client.user.setActivity("Ensamblando redes neuronales...")
});

client.on("message", async message =>{
    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const comando = args.shift().toLowerCase();
    // console.log(comando);

    if(!message.content.startsWith(prefix)) return;
    if(message.author.bot) return;

    switch (comando){
        case "hola":
            message.reply(" disculpa, pero aún estoy en una fase muy temprana de desarrollo y no se me permite responder a, según se me indico, jiles reculiaos. ヾ(￣▽￣) Bye~Bye~");
            // console.log("Case: Hola");
            break;
        case "test":
            message.channel.send("El mensaje llega correctamente.");
            // console.log("Case: test");
            break;
    };
});

client.login(config.token);