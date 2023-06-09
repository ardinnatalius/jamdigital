setInterval(() => {
    const waktu = new Date();
    const jam = waktu.getHours();
    const menit = waktu.getMinutes();
    const detik = waktu.getSeconds();
 
 

    document.getElementById('jamdigital').innerHTML = jam + ":" + menit + ":" + detik
    
}, 1000)