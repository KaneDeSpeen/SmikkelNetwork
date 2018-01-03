const Discord = require("discord.js");

const TOKEN = "Mzk3ODMyOTk3MTg2ODMwMzM2.DS6kFQ.JEsaEl3-uleaY792xYUIc6DZ40I";
const PREFIX = "(!)";

function generateHex() {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

var fortunes = [
    "Yes",
    "No",
    "Maybe",
    "She man",
    "Sup",
    "fucc u",
    "dog go shit or something"
];

var bot = new Discord.Client();

bot.on("ready", function() {
    console.log("Ok... My data is loading... Wait a minute! ...I have now started up! What can I do for you?");
    bot.user.setGame('(!)help')
});

bot.on("message", function(message) {
    if (message.author.bot) return;

    if(!message.guild) return message.reply(`${message.author},  Je kan pas mij gebruiken als je mij hebt toegevoegd op jou server https://discordapp.com/oauth2/authorize?client_id=397832997186830336&scope=bot&permissions=8`);

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
        case "ping":
            message.channel.sendMessage("Pong!");
            break;
        case "info":
            message.channel.sendMessage("I'm a super dope bot created by Kane");
            break;
        case "question":
            if (args[1]) message.channel.sendMessage(fortunes[Math.floor(Math.random() * fortunes.length)]);
            else message.channel.sendMessage("Can't read that");
            break;
        case "tutorials":
            var embed = new Discord.RichEmbed()
                .setFooter("Copyrighted by Kane")
                .addField("Online", "There are currently no tutorials online.. Soon there will be more tutorials! So stay informed of my channel!", true)
                .addField("Requested tutorials", "There are currently no requested tutorials online.. Soon there will be more tutorials! So stay informed of my channel!", true)
                .addField("Soon", "There are currently notutorials online.. Soon there will be more tutorials! So stay informed of my channel!", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "profile":
            var embed = new Discord.RichEmbed()
                .setThumbnail(message.author.avatarURL)
                .setFooter("Copyrighted by Kane")
                .setTitle("This is your profile info!")
                .addBlankField()
                .setColor(0x00FFFF)
                .addField("Full Username:", message.author.tag)
                .addField("ID", message.author.id)
            message.channel.sendEmbed(embed);
            break;
        case "yt":
            var embed = new Discord.Client()
                .setFooter("Copyrighted by Kane")
                .addBlankField()
                .setTitle("This is Kane's YouTube channel!")
                .addField("URL :", "https://wwww.youtube.com/c/KaneDoetGamez")
                .addBlankField()
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        case "help":
            var embed = new Discord.RichEmbed()
                .setFooter("Copyrighted by Kane")
                .addBlankField()
                .setTitle("This is the help menu of: SmikkelNetwork BOT")
                .addField("Help", "Do (!)help to see the help message!", true)
                .addField("Ping", "Do (!)ping and the bot say something back!", true)
                .addField("Info", "Do (!)info to see who made the discord bot!", true)
                .addField("Question", "Do (!)question (your question here) and the bot say a answer back!", true)
                .addField("Profile", "Do (!)profile to see your profile!", true)
                .addField("Tutorials", "Do (!)tutorials to see ho many and what of kind tutorials are currently online!", true)
                .addField("Kane's YT channel", "Do (!)yt to get the URL of Kane's YouTube channel!", true)
                .setColor(0x00FFFF)
            message.channel.sendEmbed(embed);
            break;
        default:
            message.channel.sendMessage("Invalid command, use (!)help for help!");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.users)) return;

    if (message.content == "Hoi") {
        message.channel.sendMessage("Hoi! SmikkelBeertje");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.users)) return;

    if (message.content == "Hey") {
        message.channel.sendMessage("Hey! SmikkelBeertje");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.users)) return;

    if (message.content == "Hoe gaat het?") {
        message.channel.sendMessage("Goed!");
    }
});

bot.on("message", function(message) {
    if (message.author.equals(bot.users)) return;

    if (message.content == "hoe gaat het?") {
        message.channel.sendMessage("Goed!");
    }
});

bot.login("Mzk3ODMyOTk3MTg2ODMwMzM2.DS6kFQ.JEsaEl3-uleaY792xYUIc6DZ40I");
