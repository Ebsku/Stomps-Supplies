# Retro-Bot

A bot made to serve https://discord.gg/XXj7HekPEE.

# Features

- Modmail
- Moderation commands (ban, kick, etc)
- Fun commands
- Random message from a file on mention

# How to configure?

- Create 'Cafe Waiter Bot/.env' file containing
token=your_bot_token

- Change "modmailChannel" to your modmail channel id in config.json.
- Change "randomMessagesPath" to the path of your random messages.

Example config:

{
    "modmailChannel": "1102160118377885788",
    "randomMessagesPath": "../../resources/messages.json"
}

# How to run the bot?

- To run the bot run "npm run bot" inside of the 'Cafe Waiter Bot' directory.
- If you want to build it into a docker image run "npm run build"

# Made by Ebsku#0949
