const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
const kp = "1000tofu";
const ke =  "kurumi_chatbot";
const aditya = "@aditya.agatsuma";
const chatbotApi = process.env.CHATBOT_API;
client.on('connected', () => {
    console.log(`${client.user.username} Is Ready Now For Chats`);
});

client.on('messageCreate', (message) => {
    if (message.author.id === client.user.id) return
    message.markSeen();

    if(message.content.toLowerCase().includes('owner')){ 
        return message.chat.sendMessage(`Calling my owner for u ... ${aditya} #Kidding`);
    }
    else if(message.content.toLowerCase().includes('tofu')){ 
        return message.chat.sendMessage('OwO, how do you know my master Tofu⭐?');
          } 
  else
    chatbot(`${chatbotApi}${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.cnt);
    }).catch(err => {});
});

client.login(process.env.USERNAME,process.env.PASSWORD);
//npm run start
