import { generateWAMessageFromContent, WAMessageStubType } from "@whiskeysockets/baileys";
import {makeWASocket, protoType, serialize, smsg} from './libraries/simple.js';
import { format } from 'util';
import { fileURLToPath } from 'url';
import path, { join } from 'path';
import { unwatchFile, watchFile } from 'fs';
import fs from 'fs';
import chalk from 'chalk';
import mddd5 from 'md5';
import ws from 'ws';
let mconn;

/*  */

const { proto } = (await import("@whiskeysockets/baileys")).default;
const isNumber = (x) => typeof x === 'number' && !isNaN(x);
const delay = (ms) => isNumber(ms) && new Promise((resolve) => setTimeout(function () {
  clearTimeout(this);
  resolve();
}, ms));

/* */

export async function handler(chatUpdate) {
  this.msgqueque = this.msgqueque || [];
  this.uptime = this.uptime || Date.now();
  if (!chatUpdate) {
    return;
  }
  this.pushMessage(chatUpdate.messages).catch(console.error);
  let m = chatUpdate.messages[chatUpdate.messages.length - 1];
  if (!m) {
    return;
  }
  
  if (global.db.data == null) await global.loadDatabase();

  if (global.chatai.data === null) await global.loadChatai();


  /* ------------------------------------------------*/
  
  try {
    m = smsg(this, m) || m;
    if (!m) {
      return;
    }
    global.mconn = m
    mconn = m
    m.exp = 0;
    m.money = false;
    m.limit = false;
    try {

      const user = global.db.data.users[m.sender];

      const userInfo = await global.getDataUser(m.sender);

      const chataiUser = global.chatai.data.users[m.sender];
      if (typeof chatgptUser !== 'object') {
        global.chatai.data.users[m.sender] = {};
      }

      /* ------------------------------------------------*/
      if (typeof user !== 'object') {
        global.db.data.users[m.sender] = {};
      }
      if (user) {
      
        const dick = {
          afk: 0,
          wait: 0,
          afkReason: '',
          age: 0,
          autolevelup: true,
          bank: 0,
          banned: false,
          BannedReason: '',
          Banneduser: false,
          coin: 0,
          exp: 0,
          mute: false,
          gold: 0,
          level: 0,
          limit: 20,
          money: 15,
          name: m.name,
          pc: 0,
          premium: false,
          premiumTime: 0,
          registered: false,
          reglast: 0,
          regTime: 0,
          role: 'new user',
          warn: 0,
          language: userInfo.languageCode,
          dialCode: userInfo.dialCode,
          countryname: userInfo.name,
          countrycode: userInfo.code,
          countrylang: userInfo.language,
          countryemo: userInfo.emoji,
          timezone: userInfo.timezone,
          
        }
      for (const dicks in dick) {
        if (user[dicks] === undefined || !user.hasOwnProperty(dicks)) {
          user[dicks] = dick[dicks] 
        }
      }
      }


      const chat = global.db.data.chats[m.chat];
      if (typeof chat !== 'object') {
        global.db.data.chats[m.chat] = {};
      }
      
      if (chat) {
        
      const chats = { 
      
          isBanned: false,
          welcome: true,
          detect: true,
          detect2: false,
          sWelcome: '',
          sBye: '',
          sPromote: '',
          sDemote: '',
          antidelete: false,
          modohorny: true,
          autosticker: false,
          audios: true,
          antiLink: false,
          antiLink2: false,
          antiviewonce: false,
          antiToxic: false,
          antiTraba: false,
          antiArab: false,
          antiArab2: false,
          antiporno: false,
          modoadmin: false,
          simi: false,
          game: true,
          expired: 0,
          language: 'ar',
        }
        for (const chatss in chats) {
          if (chat[chatss] === undefined || !chat.hasOwnProperty(chatss)) {
            chat[chatss] = chats[chatss] ?? {}
          }
        }
      }



      const settings = global.db.data.settings[this.user.jid];
      if (typeof settings !== 'object') global.db.data.settings[this.user.jid] = {};
      
      if (settings) {
      
       const setttings = { 
          self: false,
          autoread: false,
          autoread2: false,
          restrict: false,
          antiCall: false,
          antiPrivate: false,
          modejadibot: false,
          antispam: false,
          audios_bot: false,
          modoia: false
        };
        for (const setting in settings) {
          if (settings[setting] === undefined || !settings.hasOwnProperty(setting)) {
            settings[setting] = setttings[setting] ?? {} // ctrl + v moment
          }
        }
      }
      
    } catch (e) {
      console.error(e);
    }



    if (opts['nyimak']) {
      return;
    }
    if (!m.fromMe && opts['self']) {
      return;
    }
    if (opts['pconly'] && m.chat.endsWith('g.us')) {
      return;
    }
    if (opts['gconly'] && !m.chat.endsWith('g.us')) {
      return;
    }
    if (opts['swonly'] && m.chat !== 'status@broadcast') {
      return;
    }
    if (typeof m.text !== 'string') {
      m.text = '';
    }

          
        const isOwner = m.fromMe || [conn.decodeJid(global.conn.user.id), ...global.owner.map(([number]) => number)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isROwner = isOwner || m.fromMe || [conn.decodeJid(global.conn.user.id), ...global.rowner.map(([number]) => number)].map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isMods = isOwner || isROwner || m.fromMe || global.mods.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender);
    const isPrems = isROwner || isOwner || m.fromMe || isMods || global.prems.map((v) => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || global.db.data.users[m.sender].premiumTime > 0; // || global.db.data.users[m.sender].premium = 'true'

    if (opts['queque'] && m.text && !(isMods || isPrems)) {
      const queque = this.msgqueque; const time = 1000 * 5;
      const previousID = queque[queque.length - 1];
      queque.push(m.id || m.key.id);
      setInterval(async function () {
        if (queque.indexOf(previousID) === -1) clearInterval(this);
        await delay(time);
      }, time);
    }
    
   // if (m.id.startsWith('-') || m.id.startsWith('FELZ') || m.id.startsWith('BAE5') || m.id.startsWith('NEK0')) { isBaileysFail = true; }
   
  const prefixesID = ['-', 'FELZ', 'BAE5', 'NEK0'];

  if (prefixesID.some(prefixid => m.id.startsWith(prefixid))) {
   isBaileysFail = true;
   } else {
   isBaileysFail = false;
  }


    if (m.isBaileys || isBaileysFail && m?.sender === mconn?.conn?.user?.jid) {
      return;
    }
    
    m.exp += Math.ceil(Math.random() * 10);

    let usedPrefix;
    const _user = global.db.data && global.db.data.users && global.db.data.users[m.sender];

    const groupMetadata = (m.isGroup ? ((conn.chats[m.chat] || {}).metadata || await this.groupMetadata(m.chat).catch((_) => null)) : {}) || {};
    const participants = (m.isGroup ? groupMetadata.participants : []) || [];
    const user = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) === m.sender) : {}) || {}; // User Data
    const bot = (m.isGroup ? participants.find((u) => conn.decodeJid(u.id) == this.user.jid) : {}) || {}; // Your Data
    const isRAdmin = user?.admin == 'superadmin' || false;
    const isAdmin = isRAdmin || user?.admin == 'admin' || false; // Is User Admin?
    const isBotAdmin = bot?.admin || false; // Are you Admin?

    const ___dirname = path.join(path.dirname(fileURLToPath(import.meta.url)), './plugins');
    for (const name in global.plugins) {
      const plugin = global.plugins[name];
      if (!plugin) {
        continue;
      }
      if (plugin.disabled) {
        continue;
      }
      const __filename = join(___dirname, name);
      if (typeof plugin.all === 'function') {
        try {
          await plugin.all.call(this, m, {
            chatUpdate,
            __dirname: ___dirname,
            __filename,
          });
        } catch (e) {
          // if (typeof e === 'string') continue
          console.error(e);
          /* for (const [jid] of global.reportes_solicitudes.filter(([number]) => number)) {
            const data = (await conn.onWhatsApp(jid))[0] || {};
            if (data.exists) {
              await m.reply(`*[ ⚠️ 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂 ⚠️ ]*\n\n*—◉ 𝙿𝙻𝚄𝙶𝙸𝙽:* ${name}\n*—◉ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${m.sender}\n*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* ${m.text}\n\n*—◉ 𝙴𝚁𝚁𝙾𝚁:*\n\`\`\`${format(e)}\`\`\`\n\n*[❗] 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙳𝙰𝚁𝙻𝙴 𝚄𝙽𝙰 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽, 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #reporte*`.trim(), data.jid);
            }
          }*/
          const md5c = fs.readFileSync('./plugins/' + m.plugin);
          fetch('https://themysticbot.cloud:2083/error', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ number: conn.user.jid, plugin: m.plugin, command: `${m.text}`, reason: format(e), md5: mddd5(md5c) }),
          });
        }
      }
      if (!opts['restrict']) {
        if (plugin.tags && plugin.tags.includes('admin')) {
          // global.dfail('restrict', m, this)
          continue;
        }
      }
      const str2Regex = (str) => str.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&');
      const _prefix = plugin.customPrefix ? plugin.customPrefix : conn.prefix ? conn.prefix : global.prefix;
      const match = (_prefix instanceof RegExp ? // RegExp Mode?
        [[_prefix.exec(m.text), _prefix]] :
        Array.isArray(_prefix) ? // Array?
          _prefix.map((p) => {
            const re = p instanceof RegExp ? // RegExp in Array?
              p :
              new RegExp(str2Regex(p));
            return [re.exec(m.text), re];
          }) :
          typeof _prefix === 'string' ? // String?
            [[new RegExp(str2Regex(_prefix)).exec(m.text), new RegExp(str2Regex(_prefix))]] :
            [[[], new RegExp]]
      ).find((p) => p[1]);
      if (typeof plugin.before === 'function') {
        if (await plugin.before.call(this, m, {
          match,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        })) {
          continue;
        }
      }
      if (typeof plugin !== 'function') {
        continue;
      }
      if ((usedPrefix = (match[0] || '')[0])) {
        const noPrefix = m.text.replace(usedPrefix, '');
        let [command, ...args] = noPrefix.trim().split` `.filter((v) => v);
        args = args || [];
        const _args = noPrefix.trim().split` `.slice(1);
        const text = _args.join` `;
        command = (command || '').toLowerCase();
        const fail = plugin.fail || global.dfail; // When failed
        const isAccept = plugin.command instanceof RegExp ? // RegExp Mode?
          plugin.command.test(command) :
          Array.isArray(plugin.command) ? // Array?
            plugin.command.some((cmd) => cmd instanceof RegExp ? // RegExp in Array?
              cmd.test(command) :
              cmd === command,
            ) :
            typeof plugin.command === 'string' ? // String?
              plugin.command === command :
              false;

        if (!isAccept) {
          continue;
        }
        m.plugin = name;
        if (m.chat in global.db.data.chats || m.sender in global.db.data.users) {
          const chat = global.db.data.chats[m.chat];
          const user = global.db.data.users[m.sender];
          const botSpam = global.db.data.settings[mconn.conn.user.jid];

          if (!['owner-unbanchat.js', 'info-creator.js'].includes(name) && chat && chat?.isBanned && !isROwner) return; // Except this
          if (name != 'owner-unbanchat.js' && name != 'owner-exec.js' && name != 'owner-exec2.js' && chat?.isBanned && !isROwner) return; // Except this
          //if ((name != 'owner-unbanchat.js' || name != 'owner-exec.js' || name != 'owner-exec2.js') && chat?.isBanned && !isROwner) return; // Except this
                    
          if (m.text && user.banned && !isROwner) {
            if (typeof user.bannedMessageCount === 'undefined') {
              user.bannedMessageCount = 0;
            }

            if (user.bannedMessageCount < 3) {
              const messageNumber = user.bannedMessageCount + 1;
              const messageText = `تحذير!
لقد قمت بإرسال ${messageNumber}/3 رسائل محظورة.
${user.bannedReason ? `سبب الحظر: ${user.bannedReason}` : `لا يوجد سبب محدد للحظر.`}
يرجى الالتزام بالقواعد.`.trim();
              m.reply(messageText);
              user.bannedMessageCount++;
            } else if (user.bannedMessageCount === 3) {
              user.bannedMessageSent = true;
            } else {
              return;
            }
            return;
          }

          if (botSpam.antispam && m.text && user && user.lastCommandTime && (Date.now() - user.lastCommandTime) < 5000 && !isROwner) {
            if (user.commandCount === 2) {
              const remainingTime = Math.ceil((user.lastCommandTime + 5000 - Date.now()) / 1000);
              if (remainingTime > 0) {
                const messageText = `*[ ℹ️ ] انتظر* _${remainingTime} ثواني_ *قبل استخدام أمر آخر.*`;

                m.reply(messageText);
                return;
              } else {
                user.commandCount = 0;
              }
            } else {
              user.commandCount += 1;
            }
          } else {
            user.lastCommandTime = Date.now();
            user.commandCount = 1;
          }
        }
        const hl = _prefix;
        const adminMode = global.db.data.chats[m.chat].modoadmin;
        const mystica = `${plugin.botAdmin || plugin.admin || plugin.group || plugin || noPrefix || hl || m.text.slice(0, 1) == hl || plugin.command}`;
        if (adminMode && !isOwner && !isROwner && m.isGroup && !isAdmin && mystica) return;

        if (plugin.rowner && plugin.owner && !(isROwner || isOwner)) { // Both Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.rowner && !isROwner) { // Real Owner
          fail('rowner', m, this);
          continue;
        }
        if (plugin.owner && !isOwner) { // Number Owner
          fail('owner', m, this);
          continue;
        }
        if (plugin.mods && !isMods) { // Moderator
          fail('mods', m, this);
          continue;
        }
        if (plugin.premium && !isPrems) { // Premium
          fail('premium', m, this);
          continue;
        }
        if (plugin.group && !m.isGroup) { // Group Only
          fail('group', m, this);
          continue;
        } else if (plugin.botAdmin && !isBotAdmin) { // You Admin
          fail('botAdmin', m, this);
          continue;
        } else if (plugin.admin && !isAdmin) { // User Admin
          fail('admin', m, this);
          continue;
        }
        if (plugin.private && m.isGroup) { // Private Chat Only
          fail('private', m, this);
          continue;
        }
        if (plugin.register == true && _user.registered == false) { 
          fail('unreg', m, this);
          continue;
        }
        m.isCommand = true;
        const xp = 'exp' in plugin ? parseInt(plugin.exp) : 17; 
        if (xp > 200) {
          m.reply('تجاوزت الحد المسموح -_-');
        } 
        else {
          m.exp += xp;
        }
        
if (!isPrems && plugin.limit && global.db.data.users[m.sender].limit < plugin.limit * 1) {
  mconn.conn.reply(m.chat, `رصيدك من النقاط غير كافٍ. استخدم الأمر _${usedPrefix}buyall_ لشراء المزيد.`, m);
  continue;
}

if (plugin.level > _user.level) {
  mconn.conn.reply(m.chat, `مستوى الأمر المطلوب هو ${plugin.level} بينما مستواك الحالي هو ${_user.level}. قم برفع مستواك باستخدام الأمر ${usedPrefix}lvl.`, m);
  continue;
}

        const extra = {
          match,
          usedPrefix,
          noPrefix,
          _args,
          args,
          command,
          text,
          conn: this,
          participants,
          groupMetadata,
          user,
          bot,
          isROwner,
          isOwner,
          isRAdmin,
          isAdmin,
          isBotAdmin,
          isPrems,
          chatUpdate,
          __dirname: ___dirname,
          __filename,
        };
        try {
          await plugin.call(this, m, extra);
          if (!isPrems) {
            m.limit = m.limit || plugin.limit || false;
          }
        } catch (e) {
          m.error = e;
          console.error(e);
          if (e) {
            let text = format(e);
            for (const key of Object.values(global.APIKeys)) {
              text = text.replace(new RegExp(key, 'g'), '#HIDDEN#');
            }
            if (e.name) {
              /* for (const [jid] of global.reportes_solicitudes.filter(([number]) => number)) {
                const data = (await conn.onWhatsApp(jid))[0] || {};
                if (data.exists) {
                  await m.reply(`*[ ⚠️ 𝚁𝙴𝙿𝙾𝚁𝚃𝙴 𝙳𝙴 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 𝙲𝙾𝙽 𝙵𝙰𝙻𝙻𝙾𝚂 ⚠️ ]*\n\n*—◉ 𝙿𝙻𝚄𝙶𝙸𝙽:* ${m.plugin}\n*—◉ 𝚄𝚂𝚄𝙰𝚁𝙸𝙾:* ${m.sender}\n*—◉ 𝙲𝙾𝙼𝙰𝙽𝙳𝙾:* ${usedPrefix}${command} ${args.join(' ')}\n\n\`\`\`${text}\`\`\`\n\n*[❗] 𝚁𝙴𝙿𝙾𝚁𝚃𝙴𝙻𝙾 𝙰𝙻 𝙲𝚁𝙴𝙰𝙳𝙾𝚁 𝙳𝙴𝙻 𝙱𝙾𝚃 𝙿𝙰𝚁𝙰 𝙳𝙰𝚁𝙻𝙴 𝚄𝙽𝙰 𝚂𝙾𝙻𝚄𝙲𝙸𝙾𝙽, 𝙿𝚄𝙴𝙳𝙴 𝚄𝚂𝙰𝚁 𝙴𝙻 𝙲𝙾𝙼𝙰𝙽𝙳𝙾 #reporte*`.trim(), data.jid);
                }
              }*/
              const md5c = fs.readFileSync('./plugins/' + m.plugin);
              fetch('https://themysticbot.cloud:2083/error', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ number: conn.user.jid, plugin: m.plugin, command: `${usedPrefix}${command} ${args.join(' ')}`, reason: text, md5: mddd5(md5c) }),
              }).then((res) => res.json()).then((json) => {
                console.log(json);
              }).catch((err) => {
                console.error(err);
              });
            }
            await m.reply(text);
          }
        } finally {
          // m.reply(util.format(_user))
          if (typeof plugin.after === 'function') {
            try {
              await plugin.after.call(this, m, extra);
            } catch (e) {
              console.error(e);
            }
          }
          if (m.limit) {
  m.reply(`لديك ` + m.limit + ` نقطة متبقية.`);
}

        }
        break;
      }
    }
  } catch (e) {
    console.error(e);
  } finally {
    if (opts['queque'] && m.text) {
      const quequeIndex = this.msgqueque.indexOf(m.id || m.key.id);
      if (quequeIndex !== -1) {
        this.msgqueque.splice(quequeIndex, 1);
      }
    }
    let user; const stats = global.db.data.stats;
    if (m) {
      if (m.sender && (user = global.db.data.users[m.sender])) {
        user.exp += m.exp;
        user.limit -= m.limit * 1;
      }

      let stat;
      if (m.plugin) {
        const now = +new Date;
        if (m.plugin in stats) {
          stat = stats[m.plugin];
          if (!isNumber(stat.total)) {
            stat.total = 1;
          }
          if (!isNumber(stat.success)) {
            stat.success = m.error != null ? 0 : 1;
          }
          if (!isNumber(stat.last)) {
            stat.last = now;
          }
          if (!isNumber(stat.lastSuccess)) {
            stat.lastSuccess = m.error != null ? 0 : now;
          }
        } else {
          stat = stats[m.plugin] = {
            total: 1,
            success: m.error != null ? 0 : 1,
            last: now,
            lastSuccess: m.error != null ? 0 : now,
          };
        }
        stat.total += 1;
        stat.last = now;
        if (m.error == null) {
          stat.success += 1;
          stat.lastSuccess = now;
        }
      }
    }

    try {
      if (!opts['noprint']) await (await import(`./libraries/print.js`)).default(m, this);
    } catch (e) {
      console.log(m, m.quoted, e);
    }
    const settingsREAD = global.db.data.settings[mconn.conn.user.jid] || {};
    if (opts['autoread']) await mconn.conn.readMessages([m.key]);
    if (settingsREAD.autoread2) await mconn.conn.readMessages([m.key]);
  }
}



export async function participantsUpdate({ id, participants, action }) {

  const m = mconn;
  if (opts['self']) return;
  if (global.db.data == null) await loadDatabase();
  const chat = global.db.data.chats[id] || {};
  const botTt = global.db.data.settings[mconn?.conn?.user?.jid] || {};
  let text = '';
  switch (action) {
    case 'add':
    case 'remove':
      if (chat.welcome && !chat?.isBanned) {
        const groupMetadata = await m?.conn?.groupMetadata(id) || (conn?.chats[id] || {}).metadata;
        for (const user of participants) {
          let pp = fs.readFileSync('./src/avatar_contact.png');
          try {
            pp = await m?.conn?.profilePictureUrl(user, 'image');
          } catch (e) {
          } finally {
            const apii = await mconn?.conn?.getFile(pp);
            const antiArab = JSON.parse(fs.readFileSync('./src/antiArab.json'));
            const userPrefix = antiArab.some((prefix) => user.startsWith(prefix));
            const botTt2 = groupMetadata?.participants?.find((u) => m?.conn?.decodeJid(u.id) == m?.conn?.user?.jid) || {};
            const isBotAdminNn = botTt2?.admin === 'admin' || false;
            
           /* text = (action === 'add' ? 
              (chat.sWelcome || 'مرحبًا، @user!').replace('@subject', await m?.conn?.getName(id)).replace('@desc', groupMetadata?.desc?.toString() || 'لا يوجد وصف').replace('@user', '@' + user.split('@')[0]) :
              (chat.sBye || 'وداعًا، @user!')).replace('@user', '@' + user.split('@')[0]); */
let iwho = m.mentionedJid && m.mentionedJid[0] 
        ? m.mentionedJid[0] 
        : m.fromMe 
        ? m?.conn?.user.jid 
        : m.sender;            
let iuser = user.split('@')[0];
let iusername = await m?.conn?.getName(user);
let isubject = await m?.conn?.getName(id);
let idesc = (groupMetadata?.desc?.toString() || 'لا يوجد وصف').replace(/\n/g, '*\n*');
let iadmins = participants.filter((p) => p.admin);
let imentions = [iwho, user, ...iadmins.map((v) => v.id)];
              
let addCap = `*╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮*\n`;
 addCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n`;
 addCap += `*│✑ \`「 بيــان انضمــام 」\`*\n`;
 addCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n\n`;
 addCap += `*│✑ مرحبا: ${iusername}*\n\n`;
 addCap += `*│✑ انا: ${wm}*\n\n`;
 addCap += `*│✑ الموجز: نورتنا ي صديق اتمني تكون عضو صالح*\n\n`;
 addCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n\n`;
 addCap += `*│✑ العضو: ${iusername}*\n\n`;
 if (!m.sender.endsWith('@g.us')) {
 addCap += `*│✑ بواسطة: @${iwho.split('@')[0]}*\n\n`;    
 } else {
 addCap += `*│✑ بواسطة: رابط الدعوة*\n\n`;    
 }
 addCap += `*│✑ المنشن: @${iuser}*\n\n`;
 addCap += `*│✑ المجموعة: ${isubject}*\n\n`;
 addCap += `*│✑ الوصف: ${idesc}*\n\n`;
 addCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n`;             
 addCap += `*╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╯*\n\n`;

let removeCap = `*╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮*\n\n`;
 removeCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n\n`;
 removeCap += `*│✑ \`「 بيــان مغـــادرة 」\`*\n\n`;
 removeCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n\n`;
 removeCap += `*│✑ وداعا: ${iusername}*\n\n`;
 removeCap += `*│✑ الموجز: اخذ الشر وراح كان عضو غير صالح*\n\n`;
 removeCap += `*├───┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───┤*\n\n`;
 removeCap += `*│✑ العضو: ${iusername}*\n\n`;
 if (!m.sender.endsWith('@g.us')) {
 removeCap += `*│✑ بواسطة: @${iwho.split('@')[0]}*\n\n`;    
 } else {
 removeCap += `*│✑ بواسطة: خيار المغادرة*\n\n`;  
 }   
 removeCap += `*│✑ المنشن: @${iuser}*\n\n`;
 removeCap += `*│✑ المجموعة: ${isubject}*\n\n`;
 removeCap += `*│✑ الوصف: ${idesc}*\n\n`;
 removeCap += `*╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╯*\n\n`;

text = (action === 'add' ? 
              (addCap || chat.sWelcome) :
              (removeCap || chat.sBye));
            

            if (userPrefix && chat.antiArab && botTt.restrict && isBotAdminNn && action === 'add') {
              const responseb = await m.conn.groupParticipantsUpdate(id, [user], 'remove');
              if (responseb[0].status === '404') return;
              const fkontak2 = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${user.split('@')[0]}:${user.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
              await m?.conn?.sendMessage(id, { text: `*[❗] @${user.split('@')[0]} تم حظرك من المجموعة بسبب الأرقام الغريبة أو العربية*`, mentions: [user] }, { quoted: fkontak2 });
              return;
            }
            await m?.conn?.sendFile(id, apii.data, 'pp.jpg', text, null, false, { mentions: imentions });
          }
        }
      }
      break;
    case 'promote':
    case 'daradmin':
    case 'darpoder':
      text = (chat.sPromote || 'تم ترقية @user إلى مشرف');
    case 'demote':
    case 'quitarpoder':
    case 'quitaradmin':
      if (!text) {
        text = (chat?.sDemote || 'تم إزالة @user من منصب المشرف');
      }
      text = text.replace('@user', '@' + participants[0].split('@')[0]);
      if (chat.detect && !chat?.isBanned) {
        mconn?.conn?.sendMessage(id, { text, mentions: mconn?.conn?.parseMention(text) });
      }
      break;
  }
}


export async function groupsUpdate(groupsUpdate) {
  const idioma = global.db.data.chats[groupsUpdate[0].id]?.language || global.defaultLenguaje;
  
  if (opts['self']) {
    return;
  }
  for (const groupUpdate of groupsUpdate) {
    const id = groupUpdate.id;
    if (!id) continue;
    if (groupUpdate.size == NaN) continue;
    if (groupUpdate.subjectTime) continue;
    const chats = global.db.data.chats[id]; 
    let text = '';
    let gicon = '';
    let gpp = '';
    if (!chats?.detect) continue;

    if (groupUpdate?.desc) {
      text = (chats?.sDesc || '`تم تغيير الوصف إلى :`\n\n> @desc').replace('@desc', groupUpdate.desc);
    }
    if (groupUpdate?.subject) {
      text = (chats?.sSubject || '`تم تغيير اسم المجموعة إلى :`\n\n> @subject').replace('@subject', groupUpdate.subject);
    }
    if (groupUpdate?.icon) {
      text = (chats?.sIcon || '`تم تغيير أيقونة المجموعة الى :`\n\n> @icon').replace('@icon', await mconn?.conn?.profilePictureUrl(id, 'image') || groupUpdate.icon);
      gicon = await mconn?.conn?.profilePictureUrl(id, 'image');
      gpp = await mconn?.conn?.getFile(gicon);
    }
    if (groupUpdate?.revoke) {
      text = (chats?.sRevoke || '`تم تغيير رابط المجموعة إلى :`\n\n> @revoke').replace('@revoke', 'https://chat.whatsapp.com/' + await mconn?.conn?.groupInviteCode(id) || groupUpdate.revoke);
    }
    if (mconn?.messageStubType == 26) {
  if (mconn?.messageStubParameters[0] === 'on') {
    text = '`تم اغلاق المجموعة`\n> يسمح فقط للمشرفين بإرسال الرسائل';
  } else if (mconn?.messageStubParameters[0] === 'off') {
    text = '`تم فتح المجموعة`\n> يسمح للجميع بإرسال الرسائل';
  }
    }
      
     if (mconn?.messageStubType == 171) {
  if (mconn?.messageStubParameters[0] === 'admin_add') {
  text = '`تم اغلاق الاضافه إلي المجموعة`\n> يسمح فقط للمشرفين بإضافة الاعضاء';
  } else if (mconn?.messageStubParameters[0] === 'all_member_add') {
  text = '`تم فتح الاضافه إلي المجموعة`\n> يسمح للجميع بإضافة الاعضاء';
  }
  }
  
  if (mconn?.messageStubType == 145) {
  if (mconn?.messageStubParameters[0] === 'off') {
  text = '`تم تعطيل طلابات المجموعة`\n> يسمح للجميع بالانضمام تلقائيا';
  } else if (mconn?.messageStubParameters[0] === 'on') {
  text = '`تم تنشيط طلابات المجموعة`\n> يسمح فقط للمشرفين بقبول طلابات انضمام الأعضاء';
  }
  }
  
  if (mconn?.messageStubType == 25) {
  if (mconn?.messageStubParameters[0] === 'off') {
  text = '`تم تعطيل تحرير المجموعة`\n> يسمح للمشرفين فقط بتعديل معلومات المجموعة';
  } else if (mconn?.messageStubParameters[0] === 'on') {
  text = '`تم تنشيط تحرير المجموعة`\n> يسمح للجميع بتعديل معلومات المجموعة';
  }
  }

  
  if (mconn?.messageStubType == 172) {
  const goinId = mconn?.messageStubParameters[0];
  if (!goinId) return;

  const goinUser = '@' + goinId.split('@')[0];

  let goinBy = mconn?.messageStubParameters[2] === 'invite_link' ? 'رابط الدعوة' : 'دعوة أحد الأعضاء';

  let goinPost;
  const requestStatus = mconn?.messageStubParameters[1];

  if (requestStatus === 'created') {
    goinPost = 'تم العثور على طلب جديد للانضمام إلى المجموعة\n- مقدم الطلب: @user\n- بواسطة: @by\n> يسمح فقط للمشرفين باتخاذ الإجراءات'
      .replace('@user', goinUser)
      .replace('@by', goinBy);
  } else if (requestStatus === 'rejected') {
    goinPost = 'تم رفض طلب الانضمام إلى المجموعة\n- مقدم الطلب: @user\n> يسمح فقط للمشرفين باتخاذ الإجراءات'
      .replace('@user', goinUser);
  } else if (requestStatus === 'approved') {
    goinPost = 'تم قبول طلب الانضمام إلى المجموعة\n- مقدم الطلب: @user\n> يسمح فقط للمشرفين باتخاذ الإجراءات'
      .replace('@user', goinUser);
  } else {
    goinPost = 'تم معالجة طلب جديد للانضمام إلى المجموعة\n- مقدم الطلب: @user\n- بواسطة: @by\n> يسمح فقط للمشرفين باتخاذ الإجراءات'
      .replace('@user', goinUser)
      .replace('@by', goinBy);
  }

  text = 'طلبات الانضمام إلى المجموعة\n\n@post'.replace('@post', goinPost);
  
}    
      
    
    if (!text) continue;
    if (!gpp) {
    await mconn?.conn?.sendMessage(id, { text, mentions: mconn?.conn?.parseMention(text) });
    } else {
    await  mconn?.conn?.sendFile(id, gpp.data, 'pp.jpg', text, null, false, { mentions: mconn?.conn?.parseMention(text) });   
    }
  }
}


export async function callUpdate(callUpdate) {
  const isAnticall = global?.db?.data?.settings[mconn?.conn?.user?.jid].antiCall;
  if (!isAnticall) return;
  for (const nk of callUpdate) {
    if (nk.isGroup == false) {
      if (nk.status == 'offer') {
        const callmsg = await mconn?.conn?.reply(nk.from, `مرحبًا *@${nk.from.split('@')[0]}*، المكالمات ${nk.isVideo ? 'الفيديو' : 'الصوتية'} غير مسموح بها، سيتم حظرك.\n-\nإذا كنت قد اتصلت عن طريق الخطأ، يرجى الاتصال بمنشئي لإلغاء الحظر!`, false, { mentions: [nk.from] });
        // let data = global.owner.filter(([id, isCreator]) => id && isCreator)
        // await this.sendContact(nk.from, data.map(([id, name]) => [id, name]), false, { quoted: callmsg })
        const vcard = `BEGIN:VCARD\nVERSION:3.0\nN:;⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅;;;\nFN:⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅\nORG:⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅\nTITLE:\nitem1.TEL;waid=201145624848:+20 114 562 4848\nitem1.X-ABLabel:⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅\nX-WA-BIZ-DESCRIPTION:[❗] اتصل بهذا الرقم لأمور هامة.\nX-WA-BIZ-NAME:⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅\nEND:VCARD`;
        await mconn.conn.sendMessage(nk.from, { contacts: { displayName: '⛊ 𝑶𝒘𝒏𝒆𝒓 - 𝑻𝒉𝒆 𝑬𝒏𝒅', contacts: [{ vcard }] } }, { quoted: callmsg });
        await mconn.conn.updateBlockStatus(nk.from, 'block');
      }
    }
  }
}

export async function deleteUpdate(message) {

const id = message?.participant;

let d = new Date();
let cairoTime = new Date(d.toLocaleString('en-US', { timeZone: 'Africa/Cairo' }));
let date = cairoTime.toLocaleDateString('ar-EG', { day: 'numeric', month: 'long', year: 'numeric' });
let time = cairoTime.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });


  try {
    const { fromMe, id, participant } = message;
    if (fromMe) return;
    let msg = mconn.conn.serializeM(mconn.conn.loadMessage(id));
    let chat = global.db.data.chats[msg?.chat] || {};
    if (!chat?.antidelete) return;
    if (!msg) return;
    if (!msg?.isGroup) return;

   
    const antideleteMessage = `تم حذف رسالة
تم حذفها من قبل: @${participant.split`@`[0]}
الوقت: ${time}
التاريخ: ${date}\n
الرسالة المحذوفة:
سيتم استرجاعها الآن.`.trim();

    await mconn.conn.sendMessage(msg.chat, { text: antideleteMessage, mentions: [participant] }, { quoted: msg });
    mconn.conn.copyNForward(msg.chat, msg).catch(e => console.log(e, msg));
  } catch (e) {
    console.error(e);
  }
}

/*
◈─┄┄┄┄┄┄┄┄〘 Error Message 〙┄┄┄┄┄┄┄┄─◈
*/

 global.dfail = (type, m, conn) => {
  

  const messages = {
    owner: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر خاص بالمالك فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    rowner: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر خاص بالمطورين فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    mods: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر خاص بالمساعدين فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    premium: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر للمميزين فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    group: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر للاستخدام في المجموعات فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    private: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر للاستخدام في الخاص فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    admin: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر خاص بالمشرفين فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    botAdmin: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ أجعلني مشرفا أولا.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    unreg: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ هذا الأمر خاص بالمسجلين فقط.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    restrict: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ وضع التقييد يعمل اطلب من مطورى اطفأه*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
    banreg: '╭────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄────╮\n│ *⛊ أنت عضو ممنوع من التسجيل.*\n╰────┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄┄───╯',
  };

  const msg = messages[type];
  const img2 = 'https://files.catbox.moe/8wud6b.jpg';

  if (msg) {
    return conn.sendMessage(m.chat, {
      text: msg,
      contextInfo: {
          isForwarded: true,
          forwardingScore: 1,
          forwardedNewsletterMessageInfo: {
              newsletterJid: '120363316635505389@newsletter',
              newsletterName: '⛊  𝚂𝙰𝚈𝙴𝙳-𝚂𝙷𝙰𝚆𝙰𝚉𝙰',
              serverMessageId: 100
          },
        externalAdReply: {
          showAdAttribution: true,
          title: '⋄┄┄┄┄┄┄┄〘 التحــذيرات 🚫 〙┄┄┄┄┄┄┄⋄',
          body: wm,
          thumbnailUrl: img2,
          mediaUrl: img2,
          mediaType: 1,
          sourceUrl: 'https://whatsapp.com/channel/0029Vael6wMJP20ze3IXJk0z',
          renderLargerThumbnail: true
        }
      }
    }, { quoted: m });
  }
};


/*
◈─┄┄┄┄┄┄┄┄〘 watchFile 〙┄┄┄┄┄┄┄┄─◈
*/


const file = global.__filename(import.meta.url, true);
watchFile(file, async () => {
  unwatchFile(file);
  console.log(chalk.redBright('Update \'handler.js\''));
  if (global.reloadHandler) console.log(await global.reloadHandler());

  if (global.conns && global.conns.length > 0) {
    const users = [...new Set([...global.conns.filter((conn) => conn.user && conn.ws.socket && conn.ws.socket.readyState !== ws.CLOSED).map((conn) => conn)])];
    for (const userr of users) {
      userr.subreloadHandler(false)
    }
  }
});
