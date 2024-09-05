import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'ar';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = ` *🤖 The Zoro Bot* 🤖

 *👋 اهلا يحب, ${taguser}*

 *🧑‍💻 المالك.:* 𝙃𝘼𝙎𝙃𝙍𝙄𝘼 (MIDO)
 *📱 wa:* +249128749239
 *🏦 PayPal:* paypal.me/MIDO


 *📆 التاريخ:* ${date}
 *⏳ وقت التشغيل:* ${uptime}
 *🧑 المستخدمين المسجلين:* ${rtotalreg}
 *👥 إجمالي المستخدمين:* ${rtotal}
 *🤖 نوع البوت:* ${(conn.user.jid == global.conn.user.jid ? '' : `Sub-bot de:\n+${global.conn.user.jid.split`@`[0]}`) || 'No es sub-bot'}


 *< معلومات المستخدم />* ⚡

 *📈 المستوى:* ${level}
 *🧰 الخبرة:* ${exp}
 *⚓ الرتبة:* ${role}
 *💎 الماس:* ${limit}
 *🪙 ميدو كوينز:* ${money}
 *🎟️ الرموز:* ${joincount}
 *🎫 مميز:* ${user.premiumTime > 0 ? '✅' : (isPrems ? '✅' : '❌') || ''}


 _*< LISTA DE COMANDOS />*_ 📄

 - Presione en _Leer más_ para ver la lista de comandos${readMore}
 

 *< CMDS DEL BOT />* 🤖

  ▢ _${usedPrefix}terminosycondiciones_
  ▢ _${usedPrefix}grupos_
  ▢ _${usedPrefix}estado_
  ▢ _${usedPrefix}infobot_
  ▢ _${usedPrefix}speedtest_
  ▢ _${usedPrefix}donar_
  ▢ _${usedPrefix}owner_
  ▢ _${usedPrefix}script_
  ▢ _${usedPrefix}reporte *<txt>*_
  ▢ _${usedPrefix}join *<wagp_url>*_
  ▢ _${usedPrefix}fixmsgespera_
  ▢ _Bot_ (sin prefijo)


  *< MENUS ADICIONALES />*
  ▢ _${usedPrefix}menuaudios_
  ▢ _${usedPrefix}menuanimes_
  ▢ _${usedPrefix}labiblia_


 *< SUB-BOTS />* 🤖

  ▢ _${usedPrefix}serbot --code_
  ▢ _${usedPrefix}serbot_
  ▢ _${usedPrefix}deletebot_
  ▢ _${usedPrefix}token_
  ▢ _${usedPrefix}stop_
  ▢ _${usedPrefix}bots_

  ▢ _${usedPrefix}enable restrict_
  ▢ _${usedPrefix}disable restrict_
  ▢ _${usedPrefix}enable autoread_
  ▢ _${usedPrefix}disable autoread_
  ▢ _${usedPrefix}enable antispam_
  ▢ _${usedPrefix}disable antispam_
  ▢ _${usedPrefix}enable anticall_
  ▢ _${usedPrefix}disable anticall_
  ▢ _${usedPrefix}enable modoia_
  ▢ _${usedPrefix}disable modoia_
  ▢ _${usedPrefix}enable audios_bot_
  ▢ _${usedPrefix}disable audios_bot_
  ▢ _${usedPrefix}enable antiprivado_
  ▢ _${usedPrefix}disable antiprivado_
  

 *< JUEGOS />* 🕹️

  ▢ _${usedPrefix}mates *<noob / easy / medium / hard / extreme /impossible /impossible2>*_
  ▢ _${usedPrefix}fake *<txt1> <@tag> <txt2>*_
  ▢ _${usedPrefix}ppt *<papel / tijera /piedra>*_
  ▢ _${usedPrefix}prostituto *<nombre / @tag>*_
  ▢ _${usedPrefix}prostituta *<nombre / @tag>*_
  ▢ _${usedPrefix}gay2 *<nombre / @tag>*_
  ▢ _${usedPrefix}lesbiana *<nombre / @tag>*_
  ▢ _${usedPrefix}pajero *<nombre / @tag>*_
  ▢ _${usedPrefix}pajera *<nombre / @tag>*_
  ▢ _${usedPrefix}puto *<nombre / @tag>*_
  ▢ _${usedPrefix}puta *<nombre / @tag>*_
  ▢ _${usedPrefix}manco *<nombre / @tag>*_
  ▢ _${usedPrefix}manca *<nombre / @tag>*_
  ▢ _${usedPrefix}rata *<nombre / @tag>*_
  ▢ _${usedPrefix}love *<nombre / @tag>*_
  ▢ _${usedPrefix}doxear *<nombre / @tag>*_
  ▢ _${usedPrefix}pregunta *<txt>*_
  ▢ _${usedPrefix}suitpvp *<@tag>*_
  ▢ _${usedPrefix}slot *<apuesta>*_
  ▢ _${usedPrefix}ttt *<nombre sala>*_
  ▢ _${usedPrefix}delttt_
  ▢ _${usedPrefix}acertijo_
  ▢ _${usedPrefix}simi *<txt>*_
  ▢ _${usedPrefix}top *<txt>*_
  ▢ _${usedPrefix}topgays_
  ▢ _${usedPrefix}topotakus_
  ▢ _${usedPrefix}formarpareja_
  ▢ _${usedPrefix}verdad_
  ▢ _${usedPrefix}reto_
  ▢ _${usedPrefix}cancion_
  ▢ _${usedPrefix}pista_
  ▢ _${usedPrefix}akinator_
  ▢ _${usedPrefix}wordfind_


 *< ACT./DESACT. FUNCIONES />* *️⃣

  ▢ _${usedPrefix}enable *welcome*_
  ▢ _${usedPrefix}disable *welcome*_
  ▢ _${usedPrefix}enable *modohorny*_
  ▢ _${usedPrefix}disable *modohorny*_
  ▢ _${usedPrefix}enable *antilink*_
  ▢ _${usedPrefix}disable *antilink*_
  ▢ _${usedPrefix}enable *antilink2*_
  ▢ _${usedPrefix}disable *antilink2*_
  ▢ _${use
