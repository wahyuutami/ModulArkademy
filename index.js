// Create Server

const express = require('express'); // import module express
const app = express(); // eksekusi module express

// Eksekusi express dengan memanggil variabel app
app.get('/', function(request, respone){ // simbol / yang berarti "root" atau halaman utama, function req(request) dan res(respone)
    respone.send("abcdefgh") // mengirimkan respone dari http dan dikembalikan
})

app.listen('12345'); //definisi halaman port
