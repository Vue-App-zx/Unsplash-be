let devilGuild = new guild('Devil Guild')
let zexo = new adventure('zexo')

devilGuild.register(zexo, 'silver', 49)
// level kurang dari yg di tentukan
devilGuild.register(zexo, 'silver', 51)
//Selamat datang Devil Guild, zexo. Nomor Akun anda adalah 6332937. level anda 51

let zexoAccount = zexo.guildAccount

/* PASTIKAN BAHWA EXP DAN LVL SELALU BERTAMBAH DAN BERKURANG UNTUK SETIAP SETORAN */

zexoAccount.storeExp(300000, "Membunuh orc")
// Anda sukses menambah XP Anda.

zexoAccount.lvlup(200000, 'LVL UPPPP!!')
// Anda sukses menaikan lvl anda

zexoAccount.lvlup(100000, 'LVL UPPPP!!')
// EXP yg di butuhkan tidak mencukupi

zexoAccount.lvlup(200000, 'LVL UPPPP AGAIN!!!!')
// EXP yg di butuhkan tidak mencukupi

zexoAccount.debet(600000, '')
// EXP anda tidak cukup

let terkoiz = new adventure('Terkoiz')
devilGuild.register(Terkoiz, 'gold', 71)
let terkoizAccount = terkoiz.bankAccount

terkoizAccount.storeExp(1250000, "Membunuh naga")
// Anda sukses menambah EXP Anda.

terkoizAccount.transfer(zexoAccount, 500000)
// Anda sukses transfer exp ke zexo

zexoAccount.transfer(terkoizGuild, 100000)
// Anda gagal transfer ke terkoiz, rank anda lebih rendah

terkoizAccount.transfer(zexoAccount, 500000000)
// EXP anda tidak cukup

console.log(zexoAccount, "ini zexo")

console.log(terkoizAccount, "ini terkoiz")