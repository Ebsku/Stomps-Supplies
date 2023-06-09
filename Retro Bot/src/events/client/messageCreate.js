const { client } = require("discord");
const { EmbedBuilder } = require("discord.js");
const chalk = require("chalk");
const config = require("../../../config.json");


module.exports = {
    name: "messageCreate",
    async execute(message, client) {


        if (message.author.bot) return; 
        
        //Listen for DMs
        if (!message.guild) {      
            const modmail = client.channels.cache.get(config.modmailChannel);
    
            //Log the message to the console
            console.log(
                chalk.green(
                    `Message recieved from: ${message.author.tag}: ${message.content}`
                )
            );

            message.reply("Your message has been sent to the moderators!")
    
            //Send the message to the modmail channel

            const embed = new EmbedBuilder()
                .setColor(client.colour)
                .setTitle("Modmail received!")
                .setDescription(message.content)
                .setTimestamp(Date.now())
                .setAuthor({
                    name: message.author.tag,
                    iconURL: message.author.displayAvatarURL({ dynamic: true })
                });


            modmail.send({
                embeds: [embed],
            });
            return;
        }

        if (message.guild) {
            if (message.content.includes("<@1101950102656000182>")) {
                message.reply(client.getRandomMessage());
            }
            
            
            /*else if (message.reference) {
                if (message.reference.author == client.user) {
                    message.reply(client.getRandomMessage());
                }
            }*/
        }

    },
};