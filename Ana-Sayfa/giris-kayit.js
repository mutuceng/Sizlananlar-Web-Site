var users = {
    "mutu": { isim: "Umut", soyad:"Tanrıverdi", kimlikno: "12547859623", dogumtarihi: "08-11-2002", kullaniciadi:"mutu", sifre: "umut123D" },
    "ulasucan": { isim: "Ulaş",soyad:"Uçan", kimlikno: "12547859624", dogumtarihi: "08-11-2004", kullaniciadi:"ulasucan",sifre: "ulas123D" },
    "mataberk": { isim: "Ataberk",soyad:"Öge", kimlikno: "12547859625", dogumtarihi: "08-11-2001", kullaniciadi:"mataberk",sifre: "ataberk123D" }
  };

var brands = {
    "hepsiburada": {ad: "Hepsiburada", adres: "İstanbul Kadıköy", email: "hepsiburada@gmail.com", telefonno: "03123001212", sifre: "hepsiburada123D"},
    "trendyol": {ad: "Trendyol", adres: "", email: "trendyol@gmail.com", telefonno: "03123001313", sifre: "trendyol123D"},
    "Şikayet Var": {ad: "Şikayetvar", adres: "", email: "", telefonno: "03123001414", sifre: "şikayetvar123D"},
    "Aras Kargo": {ad: "ArasKargo", adres: "", email: "", telefonno: "03123001515", sifre: "aras123D"}
};
  
  $(document).ready(function() {





      $('#register-form').submit(function(event) {
        event.preventDefault(); // Formun submit işlemini engellemek için
  
        var firmaadi = $('#firmaadi').val();
        var firmaadres = $('#firmaadres').val();
        var firmaemail = $('#firmaemail').val();
        var firmatelefonno = $('#firmatelefonno').val();
        var firmasifre = $('#sifre').val();
        
        var newBrand = {
          ad: firmaadi,
          adres: firmaadres,
          email: firmaemail,
          telefonno: firmatelefonno,
          sifre: firmasifre
        };

        brands[firmaadi.toLowerCase()] = newBrand;
  
        console.log("All Brands:");
        for (var brandKey in brands) {
            if (brands.hasOwnProperty(brandKey)) {
                console.log(brands[brandKey]);
            }
        }

        localStorage.setItem('brands', JSON.stringify(brands));
        alert("Bilgiler Kaydedildi.");
  
        var kullaniciadi = $('#kullaniciadi').val();
        var kullanicisoyadi = $('#kullanicisoyad').val();
        var tckimlikno = $('#kullanicitckimlikno').val();
        var dogumtarihi = $('#kullanicidogumtarihi').val();
        var username = $('#kullaniciusername').val();
        var kullanicisifre = $('#sifre').val();

        var newUser = {
          isim: kullaniciadi,
          soyad: kullanicisoyadi,
          kimlikno: tckimlikno,
          dogumtarihi: dogumtarihi,
          kullaniciadi: username,
          sifre: kullanicisifre
        };

        users[username.toLowerCase()] = newUser;

          
        localStorage.setItem('users', JSON.stringify(users));
        
        window.location.href = 'giris_yap.html';
       
  
      });
  
      $('.login-form').submit(function(event) 
      {
          event.preventDefault();
          var kullaniciadi = $('#kullaniciadi').val();
          var kullanicisifre = $('#sifre').val();

          var storedBrands = localStorage.getItem('brands');
          var retrievedBrands = JSON.parse(storedBrands);

          var a = retrievedBrands[kullaniciadi];

          var storedUsers = localStorage.getItem('users');
          var retrievedUsers = JSON.parse(storedUsers);
      
          var b = retrievedUsers[kullaniciadi];
  
          var username = kullaniciadi;
          var user = users[username];

          var brand = brands[username];
          localStorage.setItem('kullanicisifre',kullanicisifre);


          if (b && kullanicisifre == b.sifre) {
            alert("Giriş başarılı. Anasayfaya yönlendiriliyorsunuz.");
            localStorage.setItem('kullaniciadi',kullaniciadi)
            window.location.href = 'Sizlaniyor.html';
          } else if ( a && kullanicisifre == a.sifre) {
            alert("Giriş başarılı. Anasayfaya yönlendiriliyorsunuz.");
            localStorage.setItem('kullaniciadi',kullaniciadi)
            window.location.href = '../Firma-Sayfası/admin.html';
          } else {
            alert("Kullanıcı adı veya şifre yanlış.");
          }
  
      });
  });