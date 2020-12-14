exports.info = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `*MENU ${XPTN}*
  
──────────
  Hi. *${id.split("@s.whatsapp.net")[0]}* 👋️
──────────

*${tampilTanggal}*
*${tampilWaktu}*
Bot Status ; *${aktif}*


*Group WhatsApp*
 _${groupwa}_
 
 *YouTube <subscribe>*
_${youtube}_

*Instagram <Follow>*
_${instagram}_

*Owner Bot*
_${nomer}_
`
}
