exports.xp = (id, XPTN, corohelp, tampilTanggal, tampilWaktu, instagram, nomer, aktif, groupwa, youtube) => {
	return `
  *${tampilTanggal}*
*${tampilWaktu}*
Bot Aktif ; *${aktif}*

  Hi Kak. *${id.split("@s.whatsapp.net")[0]}* 👋️
  
*Silakan Pilih MENU BOT ${XPTN}*

_*.tools1*_

_*.tools2*_

_*.tools3*_

_*.tools4*_

_*.tools5*_

_*.tools6*_

_*.info*_

_*.owner*_

_*.donasi*_

*Instagram <Follow>*
_${instagram}_

*Creator*
_${nomer}_`
}
