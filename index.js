const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.DISCORD_BOT_SECRET;
client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});
var keyword;
var randWord;
var randNum;
var user;
client.on('message', msg => {
  if (msg.content==='세미봇') {
    msg.channel.send('네!');
  }
  if (msg.content===';나 갈게') {
    msg.channel.send('안녕히 가세요!');
  }
  if (msg.content===';안녕') {
    msg.channel.send('안녕하세요!');
  }
  if (msg.content===';네 이름은 뭐야') {
    msg.channel.send('전 세미봇이라고 해요!');
  }
  if (msg.content===';너 성별 뭐야') {
    msg.channel.send('전 여자예요!');
  }
  if (msg.content===';너 여자지') {
    msg.channel.send('어떻게 아셨어요?');
  }
  if (msg.content===';너 남자지') {
    msg.channel.send('전 여자예요...');
  }
  if (msg.content===';ㅋㅋ') {
    msg.channel.send('ㅋㅋㅋ');
  }
  if (msg.content===';귀여워') {
    msg.channel.send('헤헷~');
  }
  if (msg.content===';헤헷') {
    msg.channel.send('데헷~');
  }
  if (msg.content===';데헷') {
    msg.channel.send('헤헷~');
  }
  if (msg.content===';곧 수업해야 해') {
    msg.channel.send('아...');
  }
  if (msg.content===';나 누구게') {
    user=msg.mentions.users.first();
    msg.channel.send(`당신은 ${msg.author.username}님이예요!`);
  }
});
client.login(token);
