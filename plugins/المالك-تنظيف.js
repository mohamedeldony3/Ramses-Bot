import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync, readFileSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: 'لا يمكنك استخدام هذا الأمر من جلسة أخرى.'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: 'جارٍ تنفيذ الأمر...'}, {quoted: m});
  
  const sessionPath = `./${global.authFile}/`;
  try {
    if (!existsSync(sessionPath)) {
      return await conn.sendMessage(m.chat, {text: 'لا يوجد مجلد جلسة لتنظيفه.'}, {quoted: m});
    }
    
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      if (file !== 'creds.json') {
        await fs.unlink(path.join(sessionPath, file));
        filesDeleted++;
      }
    }

    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: 'لم يتم العثور على ملفات لحذفها.'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `تم حذف ${filesDeleted} ملف(ات).`}, {quoted: m});
    }
  } catch (err) {
    console.error('خطأ في قراءة أو حذف ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: 'حدث خطأ أثناء محاولة حذف الملفات.'}, {quoted: m});
  }

  await conn.sendMessage(m.chat, {text: `تم التنفيذ بنجاح.`}, {quoted: m});
};

handler.help = ['dsowner'];
handler.tags = ['owner'];
handler.command = /^(تنظيف|ds)$/i;
handler.rowner = true;

export default handler;