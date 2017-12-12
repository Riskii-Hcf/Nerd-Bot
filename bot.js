const Discord = require('discord.js');


const bot = new Discord.Client();


const PREFIX = "/"

const hexcols = [0xcc0000, 0xcc3300, 0xcc6600, 0xcc9900, 0xcccc00, 0x99cc00, 0x66cc00, 0x33cc00, 0x00cc00, 0x00cc33, 0x00cc66, 0x00cc99, 0x00cccc, 0x0099cc, 0x0066cc, 0x0033cc, 0x0000cc, 0x3300cc, 0x6600cc, 0x9900cc, 0xcc00cc, 0xcc0099, 0xcc0066, 0xcc0033];

bot.on('ready', () => {
  bot.user.setGame(`do /help ty`);
  console.log(`[Start] ${new Date()}`);
});


bot.on("guildMemberAdd", function(member) {
let joinleaves = member.guild.channels.find("name","general");

joinleaves.sendMessage(member.toString() + " welcome to the server!");

if(!joinleaves) return;

console.log(`A member joined a server!`)
});

bot.on("guildMemberRemove", function(member) {

let joinleaves = member.guild.channels.find("name","general");

if(!joinleaves) return;

joinleaves.send(member.toString() + " has left... We will miss you! :cry:");
console.log('A member left a server!')
});

var eb = ["You can help youself right?",
"Not right now Please",
"Nope",
"NOOOOOOO",
"It is certain",
"It is decidedly so",
"Without a doubt",
"Yes, definitely",
"You may rely on it",
"As I see it, yes",
"Most likely",
"Outlook good",
"Yes",
"Signs point to yes",
"Reply hazy try again",
"Ask again later",
"Better not tell you now",
"Cannot predict now",
"Concentrate and ask again",
"Don't count on it",
"My reply is no",
"My sources say no",
"Outlook not so good",
"Very doubtful"];

var Cats = [
'http://images4.fanpop.com/image/photos/16100000/Cute-Kitten-kittens-16122946-500-313.jpg',
'https://i.ytimg.com/vi/cbP2N1BQdYc/maxresdefault.jpg',
'https://i.ytimg.com/vi/abVsdp3i34k/maxresdefault.jpg',
'https://i.ytimg.com/vi/W-PBFMECvTE/maxresdefault.jpg',
'https://i.pinimg.com/736x/b1/88/31/b18831f96720e907c4769168687d7fd1--cat-lovers-adorable-animals.jpg',
'https://i.pinimg.com/736x/46/ea/93/46ea9346ef8df3bf00a97f5a91747f33--kitty-cats-cute-adorable-cats.jpg',
'http://s4.thingpic.com/images/xj/8f2gBmoEaViv3wTTYDDrbR3A.jpeg',
'https://i.ytimg.com/vi/9JNkS3QGT6U/maxresdefault.jpg',
'http://a.fod4.com/images/user_photos/1343865/335cd5249b648648fb0b086282cbaf32_original.jpg',
'https://i.pinimg.com/736x/58/c9/ea/58c9eadb259b3caf945540d0fa6b123d--tabby-cats-kitty-cats.jpg',
'https://i.pinimg.com/originals/a3/9b/d9/a39bd9b96eaa4bd6a7ca902bf9ef1475.jpg',
'https://i.pinimg.com/736x/65/a8/13/65a813e23a297305035a11c7d92ccbc4--cute-black-cats-black-kittens.jpg',
'http://random.cat/i/h8cHb.jpg',
'http://random.cat/i/3DqhJ.jpg',
'http://random.cat/i/076_-_ESQXAkp.gif',
'http://random.cat/i/YGb6f.jpg',
'http://random.cat/i/249053_10151615620946211_1427883182_n.jpg',
'http://random.cat/i/blueheart.jpg',
'http://random.cat/i/fXrvDfx.gif',
'http://random.cat/i/012_-_era1pJR.gif',
'http://random.cat/i/chern.jpg',
'http://random.cat/i/Vt3Qp.jpg',
'http://random.cat/i/tumblr_lyhfkmzyQJ1qzz46co1_500.jpg',
'http://random.cat/i/YxXmB.jpg',
'http://random.cat/i/960033_717282513470_976736117_n.jpg',
'http://random.cat/i/TcEeO.jpg',
'http://random.cat/i/NYJU4.jpg',
'http://random.cat/i/081_-_DWzDbUH.gif',
'http://random.cat/i/Uv3oc.jpg',
'http://random.cat/i/058_-_B6h4tVG.gif',
'http://random.cat/i/011_-_QsNMiQ4.gif',
'http://random.cat/i/XY3qM.jpg',
'http://random.cat/i/RQl59.jpg',
'http://random.cat/i/2013-10-19%2016.06.51.jpg',
'http://random.cat/i/1390506_717274913700_2064202282_n.jpg',
'http://random.cat/i/AwLr7.jpg',
'http://random.cat/i/cat_did_u_forget.gif',
'http://random.cat/i/JAH3e.jpg',
'http://random.cat/i/img_20160601_161316.jpg',
'http://random.cat/i/img_20170317_192801.jpg',
'http://random.cat/i/nXneX.jpg',
'http://random.cat/i/063_-_Fo0pLxB.gif',
'http://random.cat/i/3U009.jpg',
'http://random.cat/i/AS1or.jpg',
'http://random.cat/i/620250631cf8a46ec91352736f35e3ca.jpeg',
'http://random.cat/i/h8cHb.jpg',
'http://random.cat/i/CzuBN.jpg',
'http://random.cat/i/4L2BRJq.jpg',
'http://random.cat/i/BynjQ.jpg',
'http://random.cat/i/BFnfE.png',
'http://random.cat/i/GGQAB.jpg',
'http://random.cat/i/6209621231_2cb229f9e2_z.jpg',
'http://random.cat/i/EFlSK.jpg',
'http://random.cat/i/RgvdW.jpg',
'http://random.cat/i/img_20160930_175800.jpg',
'https://cdn.discordapp.com/attachments/381064041440739340/381146656877576192/image.jpg',
'http://random.cat/i/oFi6C.jpg'
];

var parseTime = function(milliseconds) {
        var seconds = Math.floor(milliseconds/1000); milliseconds %= 1000;
        var minutes = Math.floor(seconds/60); seconds %= 60;
        var hours = Math.floor(minutes/60); minutes %= 60;
        var days = Math.floor(hours/24); hours %= 24;
        var written = false;
        return (days?(written=true,days+" days"):"")+(written?", ":"")
            +(hours?(written=true,hours+" hours"):"")+(written?", ":"")
            +(minutes?(written=true,minutes+" minutes"):"")+(written?", ":"")
            +(seconds?(written=true,seconds+" seconds"):"")+(written?", ":"")
            +(milliseconds?milliseconds+" milliseconds":"");
    };

bot.on("message", function(message) {
    if (message.author.equals(bot.user)) return;

    if (!message.content.startsWith(PREFIX)) return;

    var args = message.content.substring(PREFIX.length).split(" ");

    switch (args[0].toLowerCase()) {
case "credit":
message.reply("Hey There! I am **NERD BOT**, coded by Telk#6039 and 123silly using **Discord.JS**. For commands type /commands ! :wink:\n **Telk** did most of the work xD");
break;
case "info":
message.reply("Hey There! I am **NERD BOT**, coded by Telk#6039 and 123silly#5224 using **Discord.JS**. For commands type /commands ! :wink:\n **Telk** did most of the work xD");
break;
case "help":
var basicc = new Discord.RichEmbed()
.setTitle(`Basic Commands`)
.setDescription(`Nerd Bot`)
.addField(`/8ball`, `use a magic :8ball: ball in discord!`)
.addField(`/info`, `Displays Bot Info`)
.addField(`/credit`, `Displays Bot Credit and creators names`)
.addField(`/serverinfo`, `Displays the Info about current server you are in`)
.addField(`/stupid`, `Doesn't need a desc`)
.addField(`/stats`, `Displays My Status`)
.addField(`/aye`, `Nothing rlly ....`)
.addField(`/userinfo`, `Displays your user info`)
.addField(`/coinflip`, `Flips a virtual Coin`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.author.sendEmbed(basicc)
var musicc = new Discord.RichEmbed()
.setTitle(`:notes: Music Commands :notes:`)
.setDescription(`Nerd Bot`)
.addField(`/play`, `Plays Quality Music :wink:`)
.addField(`/p`, `An alternatif for /play`)
.addField(`/search`, `Another alternatif for /play`)
.addField(`/queue`, `Displays the current queue on the server`)
.addField(`/skip`, `Skips the current song`)
.addField(`pause`, `Pauses the queue`)
.addField(`resume`, `Resumes the paused queue`)
.addField(`leave`, `Makes the Bot leave the voice channel`)
.addField(`/clearqueue`, `clears the queue`)
.addField(`/stop`, `clears the queue and leaves the voice channel`)
.addField(`/volume`, `Sets the volume 1-200`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.author.sendEmbed(musicc)
var specialc = new Discord.RichEmbed()
.setTitle(`Special Commands!`)
.setDescription(`This makes the bot cool`)
.addField(`/cat`, `Sends a random picture of a cat`)
.addField(`/repeat`, `The bot will copy the first word you said`)
.addField(`/cheese`, `Sends a random cheese`)
.addField(`/cc`, `Clears the last 100 words - If it is older than 4 days it wont work`)
.setFooter(`All commands above are by Telk#6039`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.author.sendEmbed(specialc)
var announcementc = new Discord.RichEmbed()
.setTitle(`/Announcement`)
.setDescription(`Nerd Bot`)
.addField(`/announcement`, `How to trigger the Custom announcement`)
.addField(`Rules`, `do not use 'spaces' for exchange use - or _ thank you`)
.setFooter(`Credit Telk#6039 for this command`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.author.sendEmbed(announcementc)
message.author.sendMessage("Invite me here: https://discordapp.com/oauth2/authorize?&client_id=384676114641190921&scope=bot&permissions=8")

//Aye this is /help ok deal with me
break;
case "serverinfo":
message.delete("serverinfo")
var sie = new Discord.RichEmbed()
.setTitle(`According to my Nerd stats ... I found this`)
.setDescription(`The information about this server is here:`)
.addField(`Name:`, message.guild.name, true)
.addField(`ID:`, message.guild.id, true)
.addField(`Owner:`, message.guild.owner, true)
.addField(`Server Region:`, message.guild.region, true)
.addField(`Channels:`, message.guild.channels.size, true)
.addField(`Membercount:`, message.guild.memberCount, true)
.addField(`Server Created At:`, message.guild.createdAt, true)
.setFooter(`Made by Telk#6039 and 123silly#5224`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.channel.sendEmbed(sie)
break;
case "8ball":
if (args[1]) {
  message.channel.sendMessage(':8ball: ' + message + '? - `' + eb[Math.floor(Math.random() * eb.length)] + '`');
} else {
  message.channel.sendMessage("Please provide a question");
}
break;
case "stupid":
message.delete("stupid")
message.reply("Are you serius . . . You think this is a command you **stupid** person");
break;
case "stats":
var statsembed = new Discord.RichEmbed()
.setTitle(`NerdBot Status`)
.setDescription(`Here is my status:`, true)
.addField(`Up Time:`, parseTime(bot.uptime), true)
.addField(`Servers: `, `${bot.guilds.array().length}`, true)
.addField(`Members: `, `${bot.users.size}`, true)
.addField(`Channels: `, `${bot.channels.size}`, true)
.addField(`Status: `, `ONLINE`, true)
.setFooter(`Made by Telk#6039 and 123silly#5224`)
.setColor(hexcols[~~(Math.random() * hexcols.length)]);
message.channel.sendEmbed(statsembed);
break;
case "aye":
message.reply("Aye m8!");
break;
case "userinfo":
if (args[1]) {

let useri = message.mentions.users.first();
var ui = new Discord.RichEmbed()
.setTitle(`--==User Info==--`)
.setDescription(`<@${useri.id}>'s Info:`)
.setThumbnail(useri.avatarURL)
.addField("Account Created:", `${useri.createdAt}`)
.addField(`Username:`, `${useri.username}`)
.addField(`Status:`,`${useri.presence.status}`)
.addField(`Avatar:`, `${useri.avatarURL}`)
.addField("ID:", `${useri.id}`)
.setFooter("Made by Telk#6039 and 123silly#5224")
.setColor(0xff0000)
message.channel.sendEmbed(ui)
} else {
  message.channel.sendMessage("Whose user info you asking for m8?");
}
break;
case "cheese":
var cheese = Math.floor((Math.random() * 3) + 1);
    if (cheese === 1) {
var cheesea = new Discord.RichEmbed()
.setTitle(`Cheese`)
.setDescription(`Info:`)
.setThumbnail(`https://cdn.discordapp.com/avatars/384676114641190921/0e47d7efccbd42d621d5e27e2c261dea.png?size=2048`)
.addField("Name:", `Pixel Cheese`)
.addField(`Quality:`, `There ain't no quality for this one cause it is just a picture`)
.addField(`Description:`, `My Favotire Cheese #NerdBot`)
.addField(`Image Link:`, `https://cdn.discordapp.com/avatars/384676114641190921/0e47d7efccbd42d621d5e27e2c261dea.png?size=2048`)
.addField("Taste:", `No Taste`)
.setFooter("Made by Telk#6039, a Cheesey Man")
.setColor(0xffff00)
message.channel.sendEmbed(cheesea)
} else if (cheese === 2) {
  var cheeseb = new Discord.RichEmbed()
  .setTitle(`Cheese`)
  .setDescription(`Info:`)
  .addField("Name:", `Meme Cheese`)
  .addField(`Quality:`, `Some are very good`)
  .addField(`Description:`, `Dat was a cheesey MEME`)
  .addField(`Image Link:`, `none`)
  .addField("Taste:", `Some are very strong and some are weak`)
  .setFooter("Made by Telk#6039, a Cheesey Man")
  .setColor(0xffff00)
  message.channel.sendEmbed(cheeseb)
} else if (cheese === 3) {
  var cheesec = new Discord.RichEmbed()
  .setTitle(`Cheese`)
  .setDescription(`Info:`)
  .setThumbnail(`https://cdn.discordapp.com/attachments/385763143751696394/387618424433541120/download.jpeg`)
  .addField("Name:", `Swiss Cheese`)
  .addField(`Quality:`, `Some Are very nice`)
  .addField(`Description:`, `The real pic of my icon`)
  .addField(`Image Link:`, `https://cdn.discordapp.com/attachments/385763143751696394/387618424433541120/download.jpeg`)
  .addField("Taste:", `Pretty Dank`)
  .setFooter("Made by Telk#6039, a Cheesey Man")
  .setColor(0xffff00)
  message.channel.sendEmbed(cheesec)

}
break;
case "announcement":
var anc = new Discord.RichEmbed()
.setTitle(`Announcement`)
.addField(args[1], `By ${message.author.username}`)
.setFooter("A Quality Announcement")
.setColor(0x0033cc)
message.channel.sendEmbed(anc)
break;
case "cat":
message.channel.sendMessage(Cats[Math.floor(Math.random() * Cats.length )]);
break;
case "cc":
message.channel.fetchMessages({limit: 100}).then(messages => message.channel.bulkDelete(messages));
message.reply("Chat Has Been Cleared");
break;
case "repeat":
message.channel.sendMessage(args[1])
break;
case "embed":
var embed = new Discord.RichEmbed()
.setTitle(`This is an Embed`)
.addField(`It is quality`, `This is an example`)
.setFooter("A Quality Embed xD")
.setColor(0x0033cc)
message.channel.sendEmbed(embed)
break;
case "warn":
let modRoless = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRoless.id)) {
let wMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":arrow_right: The Member Has Been Warned! :point_left:");
message.mentions.users.first().send(`:x: **You have been warned on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else
{
 return message.reply(":x: **You dont have role called Mod** :x:");
}
break;
case "unwarn":
let modRolex = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRolex.id)) {
let uMember = message.guild.member(message.mentions.users.first());
message.channel.sendMessage(":arrow_right: The Member Has Been Unwarned! :point_left:");
message.mentions.users.first().send(`:tada: **You have been unwarned on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
}
else
{
 return message.reply(":x: **You dont have role called Mod** :x:");
}
break;
case "ban":
   let modRolesss = message.guild.roles.find("name", "Mod");
   if(message.member.roles.has(modRolesss.id)) {
     let banMember = message.guild.member(message.mentions.users.first());
     message.guild.member(banMember).ban();
     message.channel.sendMessage(":arrow_right: The Member Has Been **PERM BANNED** From The Server! :point_left:");
     message.mentions.users.first().send(`:x: **You have been PERM BANNED! on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
   } else {
     return message.reply(":x: **You dont have role called Mod** :x:");
   }
break;
case "kick":
   let modRoles = message.guild.roles.find("name", "Mod");
   if(message.member.roles.has(modRoles.id)) {
     let kickMember = message.guild.member(message.mentions.users.first());
     message.guild.member(kickMember).kick();
     message.channel.sendMessage(":arrow_right: The Member Has Been Kicked From The Server! :point_left:");
     message.mentions.users.first().send(`:x: **You have been KICKED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
   } else {
     return message.reply(":x: **You dont have role called Mod** :x:");
   }
break;
case "mute":
let modRolez = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRolez.id)) {
 let muteMember = message.guild.member(message.mentions.users.first());
 muteMember.addRole(muteMember.guild.roles.find("name", "Muted"));
 message.channel.sendMessage(":arrow_right: The Member Has Been Muted! :point_left:");
 message.mentions.users.first().send(`:x: **You have been MUTED on ${message.guild.name}! :thinking: Please contact <@${message.author.id}> for more information!** :x:`)
}
else {
 return message.reply(":x: **You dont have role called Mod** :x:");
}
break;
case "unmute":
let modRolezz = message.guild.roles.find("name", "Mod");
if(message.member.roles.has(modRolezz.id)) {
let unMember = message.guild.member(message.mentions.users.first());
unMember.removeRole(unMember.guild.roles.find("name", "Muted"));
message.channel.sendMessage(":arrow_right: :tada: The Member Has Been Unmuted! :tada: :point_left:");
message.mentions.users.first().send(`:tada: **You have been unmuted on ${message.guild.name}! :wink: Please contact <@${message.author.id}> for more information!** :tada:`)
}
else {
 return message.reply(":x: **You dont have role called Mod** :x:");
}
break;
case "coinflip":
var result = Math.floor((Math.random() * 2) + 1);
    if (result === 1) {
    message.reply('The coin landed on heads');
} else if (result === 2) {
message.reply('The coin landed on tails');
}
break;


}
});



bot.login(process.env.BOT_TOKEN);
