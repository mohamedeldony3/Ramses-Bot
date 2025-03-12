import cp, {exec as _exec} from 'child_process';
import {promisify} from 'util';
import fs from 'fs';


const exec = promisify(_exec).bind(cp);
const handler = async (m, {conn, isROwner, usedPrefix, command, text}) => {
  
  const ar = Object.keys(plugins);
  const ar1 = ar.map((v) => v.replace('.js', ''));
  const list = (wi) => {
  const mapitems = `
  ╭──────────────────╮
  │ قائمة الملفات المتاحة.
  │ عدد الملفات المتاحة: ${ar1.length}
  │ ${wi ? wi : 'اختر من القائمة'}
  ╰──────────────────╯
  
  ╭──────────────────╮
  ${ar1.map((v, index) => `│ [${index + 1}] ${v}`).join('\n')}
  ╰──────────────────╯`;
  
  return mapitems;
  
 };
 
  if (!text) { 
  return m.reply(list());
  }
  
  if (!ar1.includes(text)) { 
  return m.reply(list('ادخل اسم ملف صحيح'));
  //m.reply(`╭──────────────────╮\n│ ادخل اسم ملف صحيح .\n│ عدد الملفات المتاحة: ${ar1.length}\n╰──────────────────╯\n\n╭──────────────────╮\n${ar1.map((v, index) => `│ [${index + 1}] ${v}`).join('\n')}\n╰──────────────────╯`);
  }
  
  let o;
  try {
    o = await exec('cat plugins/' + text + '.js');
  } catch (e) {
    o = e;
  } finally {
    const {stdout, stderr} = o;
    if (stdout.trim()) {
      const aa = await conn.sendMessage(m.chat, {text: stdout}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa});
    }
    if (stderr.trim()) {
      const aa2 = await conn.sendMessage(m.chat, {text: stderr}, {quoted: m});
      await conn.sendMessage(m.chat, {document: fs.readFileSync(`./plugins/${text}.js`), mimetype: 'application/javascript', fileName: `${text}.js`}, {quoted: aa2});
    }
  }
};
handler.help = ['getplugin'].map((v) => v + ' *<nombre>*');
handler.tags = ['owner'];
handler.command = /^(باتش|gp)$/i;

handler.rowner = true;
export default handler;