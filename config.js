import {watchFile, unwatchFile} from 'fs';
import chalk from 'chalk';
import {fileURLToPath} from 'url';
import fs from 'fs'; 
import moment from 'moment-timezone';

global.botnumber = ""
global.confirmCode = ""
global.authFile = `TheEndSession`;
global.linkedFile = `TheEndLinked`;
global.tmpFile = 'tmp';

global.defaultLenguaje = 'ar';
global.isBaileysFail = false

global.cuntryUrl = "https://drive.google.com/uc?export=download&id=18AjWHXAfMw0vroZYxtYsXdtzeOxiJTTt";

global.owner = [
['201145624848', '〘 𝗦𝗔𝗬𝗘𝗗-𝗦𝗛𝗔𝗪𝗔𝗭𝗔 〙', true]
];

global.team = [
['201145624848', '𝗦𝗔𝗬𝗘𝗗-𝗦𝗛𝗔𝗪𝗔𝗭𝗔', true],
['966547540321', '𝔻𝕦𝕜𝕖 𝔽𝕝𝕖𝕖𝕕 ', true],
['201144480436', '𝐄𝐌𝐀𝐌-𝐀𝐁𝐎𝐋𝐄𝐋𝐀', true],
['201228616765', '␈3𝙈𝙊 ♔︎ 𝘿𝘼𝙍𝙆シ︎', true],
['201151094460', 'ERIN-MD', true],
['201211231685', '𝐌𝐈𝐊𝐄𝐘', true],
['201063510519', '𝑷𝒂𝒑𝒍𝒐↝|𝑶𝒘𝒏𝒆𝒓', true],
]

global.ownername = '𝚂𝙰𝚈𝙴𝙳-𝚂𝙷𝙰𝚆𝙰𝚉𝙰';
global.ownernumber = '201145624848';
global.ownerid = '201145624848@s.whatsapp.net';
  
global.rowner = [
['201145624848', '𝗦𝗔𝗬𝗘𝗗-𝗦𝗛𝗔𝗪𝗔𝗭𝗔', true],
['201144480436', '𝐄𝐌𝐀𝐌-𝐀𝐁𝐎𝐋𝐄𝐋𝐀', true],
];
global.registers = [];
global.suittag = [ '201204885212'];
global.prems = ['201204885212'];
global.mods = ['201145624848'];

global.nbot = ['𝐑𝐚𝐦𝐬𝐞𝐬 - 𝐁𝐨𝐭', '𝑹𝒂𝒎𝒔𝒆𝒔 - 𝑩𝒐𝒕', '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁', 'ℝ𝕒𝕞𝕤𝕖𝕤 - 𝔹𝕠𝕥'];

global.wm = await nbot[Math.floor(Math.random() * nbot.length)];

global.postarIconUrl = [ 'https://files.catbox.moe/2nejgi.jpg', 'https://files.catbox.moe/hm0l6b.jpg', 'https://files.catbox.moe/xqdpvv.jpg', 'https://files.catbox.moe/oph85o.jpg', 'https://files.catbox.moe/ipui61.jpg', 'https://files.catbox.moe/8wud6b.jpg'];

 global.postarIcon = await postarIconUrl[Math.floor(Math.random() * postarIconUrl.length)];

global.packname = '𝗦𝗔𝗬𝗘𝗗-𝗦𝗛𝗔𝗪𝗔𝗭𝗔';
global.author = '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁';
global.wm2 = '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁';
global.titulowm = '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁';
global.titulowm2 = '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁';
global.igfg = '𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁';

global.wait = '*⎆───┈┈〔 صـليـﮯ عليـﮯ رسـول آللهہ 〕──┈⌲*';
global.waitt = '*↝ صـليـﮯ عليـﮯ رسـول آللهہ‏‏ ...*';

global.channelId = ["120363316635505389@newsletter"];
global.channelName =  ["⛊ 𝐂𝐇𝐀𝐍𝐍𝐄𝐋 𝐒𝐔𝐏𝐏𝐎𝐑𝐓", "⟡ 𝐓𝐇𝐄 𝐄𝐍𝐃 𝐇𝐎𝐌𝐄", "⤿𝐇𝐎𝐌𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐓𝐇𝐄 𝐄𝐍𝐃⤾", "⤳𝐒𝐔𝐏𝐏𝐎𝐑𝐓 𝐓𝐇𝐄 𝐄𝐍𝐃", "⊶ 𝐂𝐄𝐍𝐓𝐑𝐄 - 𝐓𝐇𝐄 𝐄𝐍𝐃 ⊷"];
global.channelUrl = 'https://whatsapp.com/channel/0029Vael6wMJP20ze3IXJk0z';

global.randomchannelId = await global.channelId[Math.floor(Math.random() * global.channelId.length)];
global.randomchannelName = await global.channelName[Math.floor(Math.random() * global.channelName.length)];

global.adsRandomChannel = {
newsletterJid: global.randomchannelId, 
newsletterName: global.randomchannelName, 
serverMessageId: 100
};

global.adsAdReply = {
title: '◈─┄┄┄┄┄┄〘 𝐇𝐎𝐌𝐄 𝐒𝐔𝐏𝐏𝐎𝐑𝐓 〙┄┄┄┄┄┄─◈',
body: '⎆┄┄┄┄〔 قنــاة الــدعم 〕┄┄┄┄⌲',
sourceUrl: global.channelUrl,
thumbnailUrl: global.postarIcon,
mediaType: 1,
renderLargerThumbnail: true
};

global.styel1 = '┌─ 〘 ';
global.styel2 = ' 〙 ─ ⳹';
global.styel3 = '│✑ 「 ';
global.styel4 = ' 」';
global.styel5 = '└┬ ✑ 「 ';
global.styel6 = '│✑ ';
global.styel7 = '「 ';

global.tx1 = '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮';
global.tx2 = '│';
global.tx3 = '├';
global.tx4 = '┤';
global.tx5 = '───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───';
global.tx6 = '◈─┄┄┄┄〘';
global.tx7 = '〙┄┄┄┄─◈';
global.tx8 = '┄┄⋗';
global.tx9 = '├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤';
global.tx10 = '╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╯';




global.img1 = 'https://files.catbox.moe/dd6n3q.jpg';
global.img2 = 'https://files.catbox.moe/b8i50o.jpg';
global.img3 = 'https://telegra.ph/file/5e6456d22a8264b08a2bc.jpg';
global.img4 = 'https://telegra.ph/file/996f53288a1e2f4f35812.jpg';
global.img5 = 'https://telegra.ph/file/07cd1c2a9d2fe455e3b77.jpg';
global.img6 = 'https://telegra.ph/file/fbac075550b8622a94b8e.jpg';

global.imagen1 = await postarIconUrl[Math.floor(Math.random() * postarIconUrl.length)];

global.web = 'https://www.atom.bio/shawaza-2000/';


global.d = new Date(new Date().toLocaleString("en-US", {timeZone: "Africa/Cairo"}));
  //new Date(new Date + 3600000);
global.locale = 'ar';

global.dia = d.toLocaleDateString(locale, {weekday: 'long'});
global.fecha = d.toLocaleDateString('ar', {day: 'numeric', month: 'numeric', year: 'numeric'});
global.mes = d.toLocaleDateString('ar', {month: 'long'});
global.año = d.toLocaleDateString('ar', {year: 'numeric'});
global.tiempo = d.toLocaleString('en-US', {hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true});

global.week = d.toLocaleDateString(locale, { weekday: 'long' });
global.day = d.toLocaleDateString('en', { day: '2-digit' });
global.month = d.toLocaleDateString(locale, { month: 'long' });
global.year = d.toLocaleDateString('en', { year: 'numeric' });
global.time = d.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });


global.wm2 = `© 𝗥𝗮𝗺𝘀𝗲𝘀 - 𝗕𝗼𝘁`;

global.channel = 'https://whatsapp.com/channel/0029Vael6wMJP20ze3IXJk0z';

global.ramsesbot = 'https://github.com/sayed-hamdey-2000/Ramses-Bot';


global.nomorown = '201145624848';
global.pdoc = ['application/vnd.openxmlformats-officedocument.presentationml.presentation', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'application/vnd.ms-excel', 'application/msword', 'application/pdf', 'text/rtf'];

global.cmenut = '❖––––––『';
global.cmenub = '┊✦ ';
global.cmenuf = '╰━═┅═━––––––๑\n';
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     ';
global.dmenut = '*❖─┅──┅〈*';
global.dmenub = '*┊»*';
global.dmenub2 = '*┊*';
global.dmenuf = '*╰┅────────┅✦*';
global.htjava = '⫹⫺';
global.htki = '*⭑•̩̩͙⊱•••• ☪*';
global.htka = '*☪ ••••̩̩͙⊰•⭑*';
global.comienzo = '• • ◕◕════';
global.fin = '════◕◕ • •';

global.ht1 = '*⋄━───═══⌬≼≽⌬═══───━⋄*';
global.ht2 = '*━────── • • ──────━*';
global.ht3 = '*━─────𖦹𖧷𖦹─────━*';

global.botdate = `*[ 📅 ] التاريخ :*  ${moment.tz('Africa/Cairo').format('DD/MM/YY')}`;
global.bottime = `*[ ⏳ ] الوقت :* ${moment.tz('Africa/Cairo').format('HH:mm:ss')}`;

global.fgif = {key: {participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false}, message: {'videoMessage': {'title': wm, 'h': bottime, 'seconds': '', 'gifPlayback': 'true', 'caption': 'Welcom To Bot', 'jpegThumbnail': fs.readFileSync('./src/icon.png')}}};
global.fmsg = {key: {participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false}, message: {conversation: 'فلسطين حرة مهما كان الثمن ❤️🧞'}};
global.fcon = {key: {participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false, 'id': wm}, message: {'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid= '201145624848@s.whatsapp.net':'201145624848@s.whatsapp.net'\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
global.fgif2 = {key: {participant: '0@s.whatsapp.net',  ...('6289643739077-1613049930@g.us' ? {remoteJid: '6289643739077-1613049930@g.us'} : {})}, message: {'videoMessage': {'title': '𝕊ℍ𝔸𝕎𝔸ℤ𝔸-𝔹𝕆𝕋', 'h': `Hmm`, 'seconds': '99999', 'gifPlayback': 'true', 'caption': '𝐓𝐡𝐞 𝐄𝐧𝐝 - 𝐁𝐨𝐭', 'jpegThumbnail': false}}};
global.fgrp = {key: {participant: '0@s.whatsapp.net', remoteJid: '6289643739077-1613049930@g.us', fromMe: false, 'id': wm}, message: {'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid= '201145624848@s.whatsapp.net':'201145624848@s.whatsapp.net'\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
global.floc = {key: {participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false}, message: {locationMessage: {degreesLatitude: 37.7749, degreesLongitude: -122.4194, name: 'Palestine', address: 'San Francisco, CA, USA', url: 'https://maps.google.com/?q=37.7749,-122.4194'}}};
global.frol = {key: {participant: '0@s.whatsapp.net', remoteJid: 'status@broadcast', fromMe: false}, message: {orderMessage: { itemCount: 2024, status: 1, thumbnail: 'https://telegra.ph/file/ba984d78fa802662438ee.jpg', surface: 1, message: wm, orderTitle: packname, sellerJid: '0@s.whatsapp.net' } } };

global.multiplier = 99;
global.flaaa = [
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
  'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=',
];



const file = fileURLToPath(import.meta.url);
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'config.js\''));
  import(`${file}?update=${Date.now()}`);
});
