exports.run = (bot, message, args) => {
let mencionado = message.mentions.users.first()

if(message.mentions.users.size < 1) return message.channel.send(`<:no:549911918580858889> **${message.author.tag}**, Você precisa mencionar alguém para lutar!`)

    message.channel.send(`${message.author.tag} desafiou ${mencionado.tag} para uma batalha que vale tudo!`).then(msg=>{
    msg.react('✅').then(r=>{

})
    const bt = (reaction, user) => reaction.emoji.name === '✅' && user.id == mencionado.id;
    const bt2 = msg.createReactionCollector(bt, { time: 30000 });

    bt2.on('collect', r => {
    message.channel.send(`${mencionado.tag} para atacar, digite **atacar**!`).then(msg1 => {
    var collector3 = message.channel.createMessageCollector(user => user.author.id == message.mentions.users.first().id, {
    time: 1000 * 20,
    max: 1
});
    collector3.on('collect', c => {
    msg = c.content;

    if (msg == "atacar") {
    var vida = 100;
    if(vida < 50) {
} else {
    var r2 = Math.floor(Math.random() * (50 - 0))
    vida -= r2
    message.channel.send(`${mencionado.tag}, Você atacou ${message.author.tag} \`${vida}% de vida\`!`)
}
message.channel.send(`${message.author.tag} para atacar, digite **atacar**!`).then(msg1 => {
var collectoresposta3 = message.channel.createMessageCollector(user => user.author.id == message.author.id, {
time: 1000 * 20,
max: 1
});
collectoresposta3.on('collect', c => {
msg = c.content;

if (msg == "atacar") {
var vida2 = 100;
if(vida2 < 50) {
} else {
var resposta3 = Math.floor(Math.random() * (50 - 0))
vida2 -= resposta3
message.channel.send(`${message.author.tag} você atacou ${mencionado.tag} \`${vida2}% de vida\``)
        }

        message.channel.send(`${mencionado.tag} para atacar, digite **atacar**!`).then(msg1 => {
        var collector3 = message.channel.createMessageCollector(user => user.author.id == message.mentions.users.first().id, {
        time: 1000 * 20,
        max: 1
    });
       collector3.on('collect', c => {
        msg = c.content;

        if (msg == "atacar") {
            var resposta4 = Math.floor(Math.random() * (100 - 50))
            vida -= resposta4
            message.channel.send(`${mencionado.tag}, Você atacou ${message.author.tag} \`${vida}% de vida\`!`)
        if(vida <= 0) {
            message.channel.send(`${mencionado.tag} venceu!`)
    } else {
        message.channel.send(`${message.author.tag} venceu!`)
    }
}
})
})
}
                    });
                });
            } else {
        return;
    }
});
});
})
})
}
