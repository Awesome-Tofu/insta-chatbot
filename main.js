const Insta = require('./insta.js');
const client = new Insta.Client();
const chatbot = require("node-fetch").default;
const kp = "1000tofu";
const ke =  "kurumi_chatbot";
const aditya = "@aditya.agatsuma";

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
else if(message.content.toLowerCase().includes('aditya')){ 
        return message.chat.sendMessage('OwO, how do you know my master Adi💛?');
          } 
  else
    chatbot(`http://Kukiapi.xyz/api/apikey=5145883564-KUKISf4kHn2oT0/Kurumi/@aditya.agatsuma/message=${encodeURIComponent(message.content)}`)
    .then(res => res.json())
    .then(json => {
      message.chat.sendMessage(json.reply);
    }).catch(err => {});
});

client.login(`${ke}`, `${kp}`);
//npm run start
