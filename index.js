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
    // console.log("Argumento: "+args);
    const comando = args.shift().toLowerCase();
    // console.log("Comando: "+comando);

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
        case "ayuda":
            message.reply(" con que necesitas ayuda? ~~(si eres chico no puedo hacer nada al respecto)~~");
            let help = new Discord.RichEmbed()
            help.setAuthor(client.user.username, client.user.displayAvatarURL)
            help.setColor("RANDOM")
            help.setFooter("El Tomás la chupa", client.user.displayAvatarURL)
            help.setTimestamp()
            help.setTitle("Comandos disponibles")
            help.setDescription("Enviame la opcion de los comandos que necesitas")
            help.addField(":one: Libro de reclamos y reportes", "La Chocola qla administra esas weas que nadie usa.")
            help.addField(":two: Radio Rhytm", "Bot principal de musica")
            help.addField(":three: Groovy", "Radio secundaria, su unico chiste es que reproduce playlist de spotify, pero apenas.")
            help.addBlankField()
            help.addField(":four: Cancelar", "ヾ(￣▽￣) Bye~Bye~")
            message.channel.send(help);

            // Respuesta asolicitud
            
            // client.on("message", message => {

            //     let resp = message.content.trim();
            //     console.log("La respuesta es: "+resp);

            //     if(resp == 1){
            //         message.reply(" revisa tus DM (1). ヽ(✿ﾟ▽ﾟ)ノ");
            //     }else if (resp == 2){
            //         message.reply(" revisa tus DM (2). ヽ(✿ﾟ▽ﾟ)ノ");
            //     }else if (resp == 3){
            //         message.reply(" revisa tus DM (3). ヽ(✿ﾟ▽ﾟ)ノ");
            //     }

            //     return;

            //     switch (resp){
            //         case "1":
            //             message.reply(" revisa tus DM (1). ヽ(✿ﾟ▽ﾟ)ノ");
            //             break;
            //         case "2":
            //             message.reply(" revisa tus DM. (2) ヽ(✿ﾟ▽ﾟ)ノ");
            //             break;
            //         case "3":
            //             message.reply(" revisa tus DM. (3) ヽ(✿ﾟ▽ﾟ)ノ");
            //             break;
            //         default:
            //             message.channel.send("No se ponga weon... si le estan dando las opciones, no es tan dificil mi niño. ~~Saco wea...~~");
            //             break;
            //     }
            // })
            // return;

            // Metodo colector

            const filter = m => m.content.includes('1', '2', '3') && m.author.id === message.author.id;
            console.log("respuesta: "+filter);
            message.channel.awaitMessages(filter, { maxMatches: 1, time: 30000, errors: ['time'] })
            .then(collected => {
                message.channel.send(`${collected.first().author} got the correct answer!`);
            })


    };
});

client.login(config.token);