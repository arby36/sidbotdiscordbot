``
var Discord = require("discord.js");
var bot = new Discord.Client();
//Voting stuff v
var voteon = false;
var votesy = 0;
var votesn = 0;
var inarow2 = 0;
//This is to store game history v
var his = [];
var aow = 0;
var aol = 0;
var total = 0;
//This is used to store wikipedia challenge stuff
var reg = [];
/*
Code used to attempt readline
const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);
New readline code vvv
*/

var readline = require('readline'),
rl = readline.createInterface(process.stdin, process.stdout);
rl.setMaxListeners(1);
//Bot Code vvv
bot.on('ready', () => { bot.setPlayingGame("with fire.") });
bot.on("message", function(message)
{

	var input = message.content.toUpperCase();

	if(input ===  "&INFO")
	{
		bot.reply(message, "Hello, I am MonoBot! I am currently in alpha. I am an experimental Discord Bot created by developers Nic and Alex, for  use in Monotone!");
		console.log("Info Command Issued.")
	}
	if(input ===  "&PING")
	bot.sendMessage(message.channel, "Pong!", function(err, message){
	    if(!err){
		bot.updateMessage(message, "Pong, *" + (message.timestamp - message.timestamp) + "ms*.")
	    }
		console.log("Ping Command Issued.")
	});
	if(input ===  "&HELP")
	{
		bot.sendMessage(message, "**__MonoBot Command List__**\n\n*Don't include the example brackets when using commands!*\n\n**`&NewVote <Vote Name>`** - *Starts a new vote.*\n**`&Vote <+ or ->`** - *Votes on current poll.*\n**`&EndVote`** - *Ends the current poll.*\n**`&Info`** - *A little bit of info about SidBot.*\n**`&WhoIsTheCoolest`** - *Sid Fun.*\n**`&Live`** - *Sid Fun.*\n**`&WhoAreYou`** - *Sid Fun.*\n**`&Ping`** - *Pong! Test bot latency.*\n**`&Report <@Username> <Reason>`** - *Report a user.*\n**`&KillTask`** - *Kill Bot Task.*\n**`;0;`** - *Simple game!*\n**`&Spam <@Username> <Message>`** - *Spam a message to a user through DM.*\n**`&Kick <@Username>`** - *Kick a member.*\n**`&Ban <@Username>`** - *Ban a member.*\n**`&GameHistory`** - *Stats for ;0;*");
		console.log("Help Command Issued.")
	}
	if(input ===  "&WHOISTHECOOLEST")
	{
		bot.sendMessage(message, "__**Sid is always the coolest.**__");
		console.log("Fun(WhoIsTheCoolest) Command Issued.")
	}
	if(input ===  "&KILLTASK")
    {
    if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
		bot.reply(message, "Bot Task Killed.")
		bot.destory();
        console.log("Bot Logged Out.")
    } else {
        bot.reply(message, " you do not have access to this command.")
    }
	}
	
	//Game Code vvv
	if(input ===  ";0;")
	{
	    //important message about in a row functionality:
        //The bot does not know the difference between users, so if you can fix that, please do...
	        inarow = message.author; 
            var dice1 = Math.floor((Math.random() * 3));
            var dice2 = Math.floor((Math.random() * 3));
            var rand = Math.floor((Math.random() * (128044 - 128000)));
            var str = String.fromCodePoint(128000+rand);
            var toSend = [];
            if(dice1 == dice2)
            {
                inarow2++;
                toSend.push("**You won!** *Your Prize:* [" + str + "], You Have: " + inarow2 + " In a Row!");
                console.log("Game Command Issued by: " + message.author.username + ", who won");
                if (his.length >= 10) {
                    his = [];
                }
                else {
                    his.push(str);
                }
                
                aow++;
            }
            else{
                toSend.push("You lost.");
                console.log("Game Command Issued by: " + message.author.username + ", who lost");
                inarow2 = 0;
                aol++;

            }
            bot.sendMessage(message.channel, toSend);
	}
	if (input === "&GAMEHISTORY") {
	    total = aow + aol;
	    winp = aow / total * 100;
	    console.log("Game History Command Issued");
	    bot.sendMessage(message, "Last 10 Prizes Won (Everyone on server): " + his.toString() + "\nTotal Number of Wins (Everyone on server): " + aow.toString() + "\nTotal Number of Losses (Everyone on server): " + aol.toString() + "\nWin Percentage: " + winp + "%");
	    /*
        This is old code that overloaded the bot, so yeah...
        bot.sendMessage(message, "Total Number of Wins (Everyone on server): " + aow.toString());
	    bot.sendMessage(message, "Total Number of Losses (Everyone on server): " + aol.toString());
	    bot.sendMessage(message, "Win Percentage: " + winp.toString() + " %");
        */

	}
    /*
	if (input.startsWith("&AUTOPLAY")) {
	    i = 0;
	    while (i < 5) {
	        bot.sendMessage(message, ";0;");
	        i++;
	    }
	}
    */
	//End Game Code ^^^
	if(input ===  "&LIVE")
	{
	    bot.sendMessage(message, "__***Live the #MonoLife.***__");
		console.log("Fun(Live) Command Issued.")
	}
	if(input.startsWith("&REPORT")) {
			var te = input;
			reason = te.split(" "); reason.shift();
			var name = reason.shift();
			bot.sendMessage(message.channel.server.owner, "REPORT: '" + name + "' was reported by '" + message.author.username + "'. Reason: '" + reason.join(" ") + "' | SidBot User Reporter");
			bot.reply(message, " thank you for reporting *'" + name + "'*. We will try to look into this case soon.");
			console.log("Report Command Issued. '" + name + "' was reported by '" + message.author.username + "'. Reason: '" + reason.join(" ") + "' | SidBot User Reporter");
	}
	if(input ===  "&WHOAREYOU")
	{
		bot.sendMessage(message, "Hold on, let me take a picture of myself. It may look wierd...");
		console.log("Fun(WhoAreYou) Command Issued.");
		bot.sendFile(message, "http://i.imgur.com/MnS4JXH.png");
		console.log("Fun(WhoAreYou) Image Sent.");

	}

var votename

if(input.startsWith("&NEWVOTE")) {
    if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin')) || bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsMod'))){
            if(voteon === false)
        {
            votename = message.content.split(" ").slice(1).join(" ");
            bot.reply(message, "A new vote was started, with the name, *" + votename + "*.");
            bot.sendMessage(message, ":black_square_button: :white_square_button: @everyone | New Vote Started. Topic: **" + votename + "**. To vote, say `&vote +` or `&vote -` :white_square_button: :black_square_button:");
            voteon = true;
			bot.createRole("175012573039689728",{color : 0xFF0000,hoist : false,name : "jsVote",permissions : ["sendMessages"]});
            votes = 0;
            console.log("NewVote Command Issued. Topic: " + votename + ".");
        }
        else{
            bot.sendMessage(message, "Please wait until the current vote finishes.");
            console.log("NewVote was attempted, but one already exists.");
        }

	} else {
		bot.reply(message, " you do not have access to this command.");
	}
	}

	if(input.startsWith("&VOTE +"))
	{
		if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsVote'))){
		bot.reply(message, " you already voted!")
	} else
		{
			if(voteon === true) {
			votesy = votesy+1;
			bot.sendMessage(message, ":black_square_button: **Vote Recorded** :black_square_button:");
			console.log("Vote+ Command Issued.");
			bot.addMemberToRole(message.sender, message.channel.server.roles.get('name', 'jsVote'), (error2) => {
				if (!error2) {
			// success
			}
    });
  } else {
			bot.sendMessage(message, "There are currently no running votes.");
			console.log("Vote+ was attempted, but no poll exists.");
		}
		}
	}

		if(input.startsWith("&SPAM")) {
		 if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
			var inputty = input;
			spammessage = inputty.split(" "); spammessage.shift();
			var spamee = spammessage.shift();
			var i = 0;
			while (i < 100) {
			i++;
			bot.sendMessage(message.mentions[0], "**SPAMMER** | *__" + message.author + "__* says: " + spammessage.join(" "))
			}

			bot.reply(message, " your spam message to *`" + spamee + "`* has been sent.");
			console.log("Spam Command Issued. '" + message.author.username + "' spammed '" + message.mentions[0] + "'. Message: '" + spammessage.join(" ") + "'");
	} else{
		bot.reply(message, " you do not have access to this command.")
	}
	}

		if(input.startsWith("&KICK")) {
		    if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
		        bot.kickMember(message.mentions[0]);
		        bot.sendMessage(message, message.mentions[0] + " has been kicked.");
		        console.log(message.mentions[0] + " was kicked by " + message.author);
		        bot.sendMessage(message, message.channel.server.owner, message.mentions[0] + " has been kicked by " + message.author);
		    }
		    else{
		        bot.reply(message, " you do not have the permissions to execute this command.");
		    }
		}
		    
					


					if(input.startsWith("&BAN")) {
						 if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))){
							 if(message.mentions[0] === "@nic#4572"){
								 bot.reply(message, " you cannot ban the owner!");
							 } else {
								 bot.banMember(message.mentions[0]);
									 bot.sendMessage(message, message.mentions[0] + " has been banned.");
									 console.log(message.mentions[0] + " was banned by " + message.author);
									 bot.sendMessage(message, message.channel.server.owner, message.mentions[0] + " has been banned by " + message.author);
									}

								}else{
										bot.reply(message, " you do not have the permissions to execute this command.");
									}
								}


	  if(input.startsWith("&VOTE -")) {
			if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsVote'))){
		bot.reply(message, " you already voted!")
	} else
		{
			if(voteon === true) {
			votesy = votesn+1;
			bot.sendMessage(message, ":black_square_button: **Vote Recorded** :black_square_button:");
			console.log("Vote- Command Issued.");
			bot.addMemberToRole(message.sender, message.channel.server.roles.get('name', 'jsVote'), (error2) => {
				if (!error2) {
			// success
			}
    });
  } else {
			bot.sendMessage(message, "There are currently no running votes.");
			console.log("Vote+ was attempted, but no poll exists.");
		}
		}
	}
    if(input === "&ENDVOTE")
    {

		if(bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin')) || bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsMod'))){
			if(voteon === true)
			{
				bot.sendMessage(message, "**__Vote Ended__**\nTopic: **" + votename + "**\n**=RESULTS=**\n** *" + votesy + "* ** Yes Votes\n** *" + votesn + "* ** No Votes");
				voteon = false;
				bot.deleteRole(message.channel.server.roles.get('name', 'jsVote'));
				votesy = 0;
				votesn = 0;
				votename = "";
				console.log("Vote Ended. " + votesy + " votes for Yes. " + votesn + " votes for No.");
			} else {
						bot.sendMessage(message, "No vote is currently running.");
						console.log("VoteEnd was attempted, but no poll exists.");
					}
    } else {
				bot.reply(message, " you do not have access to this command.");
			}
    }
    if(input === "&MUTEALL") {
        /*
        if (bot.memberHasRole(message.author, message.channel.server.roles.get('name', 'jsAdmin'))) {
            bot.muteMember("everyone", "East Chat");
            bot.sendMessage(message, "All members muted");
            console.log("Mute All Command Issued.");
        }
        else {
            bot.sendMessage(message, "You do not have permissions to use this command.");
        }
        If you can figure out a solution to the resolveables, please un-comment the code and fix it...
        */
        bot.sendMessage(message, "This command is not avalible, **yet**. Keep checking for future updates!");
    }
    if (input === "&SERVERNEWS") {
        /*
        bot.sendMessage(message, "Server News recording playing in <Voice Channel>");
        bot.joinVoiceChannel("200309988009181184");
        var connection = bot.internal.voiceConnection;
        bot.voiceConnection.playFile("");
        */
        bot.sendMessage(message, "This command is not avalible, **yet**. Keep checking for future updates!");
    }
    if (input == "&PMPING") {
        bot.sendMessage(message, "PM Message Sent");
        bot.sendMessage(message.author, "Pong!");
    }
    if (input.startsWith("&BOTNICKNAME")) {
        var nickname_raw = message.content.split(" ");
        var nickname = nickname_raw[1];
        bot.setNickname("204004806145212416", nickname);
        console.log("User: " + message.author.username + " changed the bot's nickname to: " + nickname);
        bot.sendMessage(message, "MonoBot's nickname changed to: " + nickname);
    }
    if (input.startsWith("&NICKNAME")) {
        var nickname_raw = message.content.split(" ");
        var nickname = nickname_raw[1];
        bot.setNickname("204004806145212416", nickname, message.author.id);
        console.log("User: " + message.author.username + " changed their nickname to: " + nickname);
        bot.sendMessage(message, "Your nickname was changed to: " + nickname);
    }
    if (input.startsWith("&BOTGAME")) {
        var game = message.content.split(" ").slice(1).join(" ");
        bot.setPlayingGame(game);
        console.log("User: " + message.author.username + " changed the bot's game status to: " + game);
        bot.sendMessage(message, "MonoBot's game status changed to: Playing **" + game + "**");
    }
    if (input.startsWith("&BOTSTATUS")) {
        var stat_raw = message.content.split(" ");
        var stat_rawtwo = stat_raw[1];
        if (stat_rawtwo != undefined) {
            var stat = stat_rawtwo.toLowerCase();
            if (stat === "online") {
                bot.setStatus("online");
                console.log("User: " + message.author.username + " changed the bot's status to: Online");
                bot.sendMessage(message, "MonoBot's status changed to: **Online**");
            }
            else if (stat === "idle") {
                bot.setStatus("idle");
                console.log("User: " + message.author.username + " changed the bot's status to: Idle");
                bot.sendMessage(message, "MonoBot's status changed to: **Idle**");
            }
            else {
                bot.sendMessage(message, stat + " Is not a valid status (online or idle)");
            }
        }
        else {
            bot.sendMessage(message, "[Blank] is not a valid status (online or idle)");
        }
    }
    if (input === "&STARTTYPING") {
        bot.startTyping("204004806145212416");
    }
    if (input === "&STOPTYPING") {
        bot.stopTyping("204004806145212416");
    }
    // Wikipedia Challenge Code vvv
    if (input === ";WIKIPEDIACHALLENGE;") {
        var pages = ["human", "dog", "cat", "Bob Marley", "Earth", "snow", "car", "English", "school", "Discord"]
        var spage = Math.floor((Math.random() * 10));
        var epage = Math.floor((Math.random() * 10));
        while (true) {
            if (spage === epage) {
                var spage = Math.floor((Math.random() * 10) + 1);
            }
            else {
                break;
            }
        }
        bot.sendMessage(message, "@everyone, A new Wikipedia challenge has been started, with the start page: " + pages[spage] + ", and the end page: " + pages[epage] + "\n \n **To Register** \n \n Do W$Register");
    }
    if (input === "W$REGISTER") {
        reg.push(message.author.username);
        bot.sendMessage(message, "Registered " + message.author.username + " for the current Wikipedia Challenge");
    }
    if (input === "W$START") {
        bot.sendMessage(message, "@everyone Who is registered for the Wikipedia Challenge, begin when the word start is messaged! Once you have found the end page, make sure to message W$Done ! Registered: " + reg.toString());
    }
    if (input === "W$DONE") {
        if (reg.indexOf(message.author.username) != -1) {
            bot.sendMessage(message, "@everyone, " + message.author.username + " has won the Wikipedia Challenge!");
            reg = [];
        }
        else {
            bot.sendMessage(messsage, "Your username was not registered!");
        }
        
    }
    if (input === "W$END") {
        bot.sendMessage(message, "The Wikipedia Challenge has ended.");
        reg = [];
    }
    //End Wikipedia Code ^^^
    //Keep Discord Command Code Up There ^^^, Keep CMD Command Code Down Here vvv
    
       rl.on('line', function (cmd) {
           if (cmd == 'test') {
               console.log('Test Affirmitive');
               rl.prompt();
           }
           else if (cmd == 'killtask') {
              try {
                  bot.logout();
                  console.log("Bot Killed");
              }
              catch(err) {
                  console.log("An error occured: " + err)
              } 
           }
           else {
              rl.prompt();
           }
            
       });
    
    
});
//bot.loginWithToken("MTg0MDUyNzU4NDAyNDMzMDI0.CiO0WA.6P1dLYRTZVYUtfuMLe-Z5EayUSs");
bot.loginWithToken("MjA0OTg5NDIyMTMzOTY4ODk3.Cm_mtw.S_2fhJQlvybu5ugVwfEuUSc94Ko");
bot.on("ready", function() {
    console.log("MonoBot Connected Successfully.")
    rl.setPrompt('MonoBot>');
    rl.prompt();
});
bot.on("serverNewMemeber", function (server, user) {
    bot.sendMessage("204004806145212416", "Welcome to Monotone, " + user + ", Message Nic or Alex with any questions!");
});
/*
More old readline code
rl.on('test', () => {
    console.log('Test Affirmitive');
    rl.prompt();
});
*/


