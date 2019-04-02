const request = require('request');
const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');
const prefix = config.prefix;

function productExtraction(object) {
  let product = object.product.variants
  return product.map((element) => {
    return message.channel.send ({embed: {
      color: 3447003,
      description: 'Made by Kei',
      title: "Shopify Variant",
      fields: [{
          name: `Size: ${element.title}`,
          value: `Variant: ${element.id}`
        }
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "© NeXuS rEtOR"
    }
  }})})};

client.on("message", (message) => {

  if (message.content.startsWith(prefix.toLowerCase())) {
    const args = message.content.slice(prefix.length).trim().split(/ + /g);
    const command = args.shift().toLowerCase();
    let atcurl = command;
    request({
      url: `${atcurl}.json`,
      json: true,
      headers: {
        Connections: "keep-alive",
        "User-Agent": "Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:65.0) Gecko/20100101 Firefox/65.0",
      }}, function(error, response, body) {
        if (body) {
          try {
            console.log(body)
            return productExtraction(body);
          }
          catch(error) {
            message.channel.send('Please send a valid SHOPIFY link.' + error);
          }
        }
        else {message.channel.send('Please send a valid SHOPIFY link.');}
      })
      }
    });

client.login(config.token)
