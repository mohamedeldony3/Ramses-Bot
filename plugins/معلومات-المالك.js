function handler(m) {
  let data = global.owner.filter(([id, isCreator]) => id && isCreator)
  this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
}
handler.alias = ['المالك']
handler.command = /^(المالك|مالك)$/i

export default handler