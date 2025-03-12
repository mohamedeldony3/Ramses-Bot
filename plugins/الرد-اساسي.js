import fs from 'fs';
import fetch from 'node-fetch'; 

const handler = (m) => m;
handler.all = async function(m) {
  let text = m.text;
  let cap;
  const chat = global.db.data.chats[m.chat];
  const fk = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    'participant': '0@s.whatsapp.net'
  };
  
  if (!chat.isBanned) {

  if (text.startsWith('رمسيس')) {
    const [cm, ...rest] = text.split(' ');
    const qu = rest.join(' ');
    
    if (!qu) {
  
    const username = conn.getName(m.sender);
    
    const img = 'https://files.catbox.moe/hm0l6b.jpg';
    
    const cap = '\n\n*`⛊ مرحبا: ❲ ' + username + ' ❳`*\n\n*`⛊ انا: ❲ ' + wm + ' ❳`*\n\n> 🗃️ *`معلوماتي:`*\n\n- *`◉📑 الاوامر:`* لعرض قائمة اوامري \n\n- *`◉💻 المطور:`* للتواصل مع مطوري\n\n';
    
    m.conn.sendButton(m.chat, cap, wm, img, [['❲ الاوامــر ❳', '.اوامر'], ['❲ المطــور ❳', '.مطور']], null, null, fk);
    
    } else {
    
    cap = await ramses(qu);
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
  }
    
  } else if ('تست' === text) {
    
    cap = ['*`❲ 👌🏻 ❳ شغال والدنيا عال`*', '*`❲ 😒 ❳ شغلانه هي مقولنا شغال`*', '*`❲ 🤭 ❳ هات بوسه`*', '*`❲ 🙂 ❳ انت شايف ايه`*'][Math.floor(Math.random() * 4)];
    
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
    
   
  } else if ('بوت' === text) {
    
    cap = ['*`❲ 👌🏻 ❳ اسمي رمسيس ي حوب`*', '*`❲ 😒 ❳ شايفنى شبهك`*', '*`❲ 🤭 ❳ بوت يركبك`*', '*`❲ 🙂 ❳ ليا اسم زيك`*'][Math.floor(Math.random() * 4)];
    
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
    
  } else if (['صباح الخير', 'صباحو', 'صحيت'].includes(text)) {
    
    cap = ['*`❲ 👌🏻 ❳ صباحو ابيض`*', '*`❲ 😒 ❳ صحي النوم`*', '*`❲ 🤭 ❳ القمر صحي`*', '*`❲ 🙂 ❳ صباح الزفت`*'][Math.floor(Math.random() * 4)];
    
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
    
  } else if (['مسا الخير', 'مساء الخير'].includes(text)) {
    
    cap = ['*`❲ 👌🏻 ❳ ليله سعيده`*', '*`❲ 😒 ❳ روح نام`*', '*`❲ 🤭 ❳ القمر ظهر`*', '*`❲ 🙂 ❳ مسا الزفت`*'][Math.floor(Math.random() * 4)];
    
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
    
  } if ('نعم' === text) {
    
    cap = ['*`❲ 👌🏻 ❳ انعم الله عليك`*', '*`❲ 😒 ❳ حد نداك`*', '*`❲ 🤭 ❳ يختى عليها`*', '*`❲ 🙂 ❳ يدكرى`*'][Math.floor(Math.random() * 4)];
    
    m.conn.sendMessage(m.chat, {text: cap}, {quoted: fk});
    
  } 
  
  }
  
  
  return !0;
};
export default handler;

async function ramses(question) {
  const url = `https://the-end-api.vercel.app/api/ai/ramses?q=${encodeURIComponent(question)}&key=2000`;
  const response = await fetch(url);
  const json = await response.json();
  return json.message;
}