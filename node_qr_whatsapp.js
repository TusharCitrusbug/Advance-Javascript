const qrcode = require('qrcode-terminal');

const { Client } = require('whatsapp-web.js');
const client = new Client();

client.on('qr', qr => {
    
    qrcode.generate(qr, {small: true});
});

// client.on('qr', (qr) => {
//     console.log('QR RECEIVED', qr);
// });

client.on('ready', () => {
    console.log('login successful');
});

client.on('message', message => {
	if(message.body === 'ping') {
		console.log("is ping");
	}
});

client.initialize();


