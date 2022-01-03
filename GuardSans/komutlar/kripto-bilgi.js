const Discord = require("discord.js");
const investing = require('investing.js')

exports.run = async(client, message, args) => {
let coin = args[0]
let tarih = args[1]
if(!coin) return message.channel.send('coin ismi gir(kısaltmalı giriniz)')
if(!tarih) return message.channel.send('Tarih girmelisin örn: 2018-05-22')
let fiyat = await investing.getHistory(coin, 'usd', tarih)
message.channel.send(`${tarih} tarihinde **${coin}** fiyatı: ${fiyat.fiyat}`)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kripto"],
  permLevel: 0,
  kategori: 'Eğlence',
};

exports.help = {
  name: "kripto",
  description: "Belirlediğiniz tarhiteki kriptonun fiyatını söyler",
  usage: "kripto"
};
